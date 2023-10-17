import { differenceInSeconds, format, parseISO } from "date-fns";
import toggle, { type Project } from "./loader/toggle";
import jira from "./loader/jira";
import tempo from "./loader/tempo";

type Input = { start: Date; end: Date };
export async function run(input: Input) {
  const [accountId, workspace] = await Promise.all([
    jira.accountId(),
    toggle.workspace(),
  ]);
  if (!workspace) {
    throw new Error("Workspace id is not defined");
  }
  await Promise.all([
    toggle.entries(input.start, input.end),
    toggle.projects(workspace),
  ])
    .then(([entries, projects]) => {
      const projectMap = projects.reduce<Record<Project["id"], Project>>(
        (acc, p) => ({ ...acc, [p.id]: p }),
        {}
      );
      const e = entries.filter((e) => Boolean(e.pid));
      return e.map((e) => ({ entry: e, project: projectMap[e.pid] }));
    })
    .then((entries) =>
      Promise.all(
        entries.map(async (e) => ({
          ...e,
          issue: await jira.issueId(e.project.name),
        }))
      )
    )
    .then((entries) =>
      entries.map((e) => ({
        startDate: format(parseISO(e.entry.start), "yyyy-MM-dd"),
        startTime: format(parseISO(e.entry.start), "HH:mm:ss"),
        timeSpentSeconds: differenceInSeconds(
          parseISO(e.entry.stop),
          parseISO(e.entry.start)
        ),
        authorAccountId: accountId,
        issueId: e.issue,
      }))
    )
    .then((entries) => {
      console.info("Number of entries to send:", entries.length);
      return entries.map(async (e) => {
        console.info("sending:", e);
        return await tempo.worklogs(e);
      });
    })
    .catch((e) => {
      console.error("Broken inside catch", e.message, e.stack);
    });
}

import env from "../env";

const jira_url = env.JIRA_API_URL;
const jira_token = env.JIRA_API_TOKEN;
const jira_email = env.JIRA_EMAIL;

const jira = {
  accountId: async () => {
    const data = (await fetch(`${jira_url}/myself`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${jira_email}:${jira_token}`
        ).toString("base64")}`,
        Accept: "application/json",
      },
    }).then((r) => r.json())) as { accountId: string };

    return data.accountId;
  },
  issueId: async (issueIdOrKey: string) => {
    const data = (await fetch(`${jira_url}/issue/${issueIdOrKey}`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${jira_email}:${jira_token}`
        ).toString("base64")}`,
        Accept: "application/json",
      },
    }).then((r) => r.json())) as { id: number };
    return data.id;
  },
};

export default jira;

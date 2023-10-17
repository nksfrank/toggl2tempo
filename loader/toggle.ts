import format from "date-fns/format";
import env from "../env";
import { z } from "zod";

async function get<T>(
  path: string,
  { schema, params }: { schema: z.ZodType<T>; params?: URLSearchParams }
) {
  const url = new URL(path, env.TOGGL_API_URL);
  url.search = params?.toString() ?? "";
  const resp = await fetch(url, {
    headers: [
      ["Content-Type", "application/json"],
      [
        "Authorization",
        `Basic ${Buffer.from(`${env.TOGGL_API_TOKEN}:api_token`).toString(
          "base64"
        )}`,
      ],
    ],
  });
  if (!resp.ok) {
    throw new Error(`Request failed: ${resp.status} ${resp.statusText}`);
  }
  return schema.parse(await resp.json());
}

const workspaceSchema = z.object({
  id: z.number(),
});

export type Workspace = z.infer<typeof workspaceSchema>;

const entrySchema = z.object({
  id: z.number(),
  workspace_id: z.number(),
  project_id: z.number(),
  task_id: z.number(),
  billable: z.boolean(),
  start: z.string().datetime(),
  stop: z.string().datetime(),
  duration: z.number(),
  description: z.string(),
  tags: z.array(z.unknown()),
  tag_ids: z.array(z.unknown()),
  duronly: z.boolean(),
  at: z.string().datetime(),
  server_deleted_at: z.null().optional(),
  user_id: z.number(),
  uid: z.number(),
  wid: z.number(),
  pid: z.number(),
});

export type Entry = z.infer<typeof entrySchema>;

const projectSchema = z.object({
  id: z.number(),
  workspace_id: z.number(),
  client_id: z.number(),
  name: z.string(),
  is_private: z.boolean(),
  active: z.boolean(),
  at: z.string().datetime(),
  created_at: z.string().datetime(),
  server_deleted_at: z.null().optional(),
  color: z.string(),
  billable: z.null().optional(),
  template: z.null().optional(),
  auto_estimates: z.null().optional(),
  estimated_hours: z.null().optional(),
  rate: z.null().optional(),
  rate_last_updated: z.null().optional(),
  currency: z.null().optional(),
  recurring: z.boolean(),
  recurring_parameters: z.null().optional(),
  current_period: z.null().optional(),
  fixed_fee: z.null().optional(),
  actual_hours: z.number(),
  wid: z.number(),
  cid: z.number(),
});

export type Project = z.infer<typeof projectSchema>;

const toggle = {
  workspace: async () => {
    const data = await get("/workspaces", { schema: z.array(workspaceSchema) });
    return data.at(0);
  },
  projects: async (workspace: Workspace) => {
    return await get(`/workspaces/${workspace.id}/projects`, {
      schema: z.array(projectSchema),
    });
  },
  entries: async (start: Date, end: Date) => {
    const params = new URLSearchParams();
    params.append("start_date", format(start, "yyyy-MM-dd"));
    params.append("end_date", format(end, "yyyy-MM-dd"));
    return await get("/me/time_entries", {
      schema: z.array(entrySchema),
      params,
    });
  },
};
export default toggle;

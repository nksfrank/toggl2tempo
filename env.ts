import { config } from "dotenv-flow";
import { z } from "zod";

class Env {
  private static instance: Env;
  private readonly env: z.infer<typeof Env.envSchema>;

  private static envSchema = z.object({
    TOGGL_API_TOKEN: z.string(),
    TOGGL_API_URL: z.string().url(),
    JIRA_API_TOKEN: z.string(),
    JIRA_API_URL: z.string().url(),
    JIRA_EMAIL: z.string().email(),
    TEMPO_API_TOKEN: z.string(),
    TEMPO_API_URL: z.string().url(),
  });

  private constructor() {
    this.env = Env.envSchema.parse(config().parsed);
  }

  public static getInstance(): Env {
    if (!Env.instance) {
      Env.instance = new Env();
    }

    return Env.instance;
  }

  public getEnv(): z.infer<typeof Env.envSchema> {
    return this.env;
  }
}

export default Env.getInstance().getEnv();

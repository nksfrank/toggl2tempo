import { input } from "@inquirer/prompts";
import { Command } from "commander";
import { parseISO } from "date-fns";
import { run } from "./command.js";

const receiver = async () => {
  const args = {
    start: await input({ message: "From (YYYYMMDD)" }),
    end: await input({ message: "To (YYYYMMDD)" }),
  };
  const interval = { start: parseISO(args.start), end: parseISO(args.end) };
  await run(interval);
};

const app = new Command();
app.version("0.1.0").action(receiver);
app.parse(process.argv);

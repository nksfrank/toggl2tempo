## Configuration

1. Generate an api token from your toggl account and set it to environment variable `TOGGL_API_TOKEN`
2. Generate an api token in the tempo app in jira and set it to environment variable `TEMPO_API_TOKEN`
3. Generate an api token for JIRA and set it to environment variable `JIRA_API_TOKEN`
4. Set your JIRA account email to environment variable `JIRA_EMAIL`

> you can save these values in a `.env.local` file to keep them out of GIT history

## Prepare

run `bun sta` to generate an `api.ts` from the tempo swagger file

## Run

run using `bun start`

# Prerequisites

Each time entry in toggl needs to have:

1. a description, this will be added to the tempo entry.
2. a `project` that corresponds with a JIRA issue, i.e. `PRO-123`, wich the time entry will be repported on
3. a start and end time.

❗️ This tool fetches all entries within the first workspace in you toggl profile.
❗️ There is no deduplication of entries against Tempo, running the same dates multiple times will create new entries in Tempo every time.

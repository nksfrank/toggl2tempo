import { Api as TempoApi, type WorklogInput } from "../api.js";
import env from "../env";

const tempo_token = env.TEMPO_API_TOKEN;
const tempoApi = new TempoApi({
  baseUrl: env.TEMPO_API_URL,
  baseApiParams: {
    headers: {
      Authorization: `Bearer ${tempo_token}`,
    },
  },
});

const tempo = {
  worklogs: (e: WorklogInput) => tempoApi.worklogs.createWorklog(e),
};

export default tempo;

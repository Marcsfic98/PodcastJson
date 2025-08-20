import { serviceFilterEpisodes } from "../services/filterEpsodesService";
import { serviceListEpisodes } from "../services/listEpisodesService";
import {IncomingMessage , ServerResponse} from "http"

export const getListEpisodes =  async (request:IncomingMessage , response:ServerResponse) => {

    const content = await serviceListEpisodes()

    response.writeHead(200,{'content-type':"application/json"});
    response.end(JSON.stringify(content));
};

export  const getFilterEpisodes = async (request:IncomingMessage , response:ServerResponse) => {
    const content = await serviceFilterEpisodes("Flow")

    response.writeHead(200,{'content-type':"application/json"});
    response.end(JSON.stringify(content));
}
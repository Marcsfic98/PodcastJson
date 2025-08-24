import { serviceFilterEpisodes } from "../services/filterEpsodesService";
import { serviceListEpisodes } from "../services/listEpisodesService";
import {IncomingMessage , ServerResponse} from "http"
import { StatusCode } from "../utils/httpStatusCode";
import { ContentType } from "../utils/contentType";

export const getListEpisodes =  async (request:IncomingMessage , response:ServerResponse) => {

 

    const content = await serviceListEpisodes()
    

    response.writeHead(StatusCode.OK,{'content-type':ContentType.JSON});
    response.end(JSON.stringify(content));
};

export  const getFilterEpisodes = async (request:IncomingMessage , response:ServerResponse) => {

       

    const content = await serviceFilterEpisodes(request.url)

    response.writeHead(StatusCode.OK,{'content-type':ContentType.JSON});
    response.end(JSON.stringify(content));
}
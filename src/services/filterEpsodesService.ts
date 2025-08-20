import { repoPodcast } from "../repositories/podcastRepository"



export const serviceFilterEpisodes = async (podcastName:string) => {
    const data = await repoPodcast(podcastName);

    return data
}
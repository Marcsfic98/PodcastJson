import { repoPodcast } from "../repositories/podcastRepository";

export const serviceListEpisodes = async () => {
    const data =  await repoPodcast();
        return data;
}
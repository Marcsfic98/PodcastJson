import fs from "fs";
import path from "path";

interface podcast{
    
}

const pathData = path.join(__dirname,"../repositories/podcast.json");

export const repoPodcast = async () => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
}
import path from "path";
import { TEMP_FOLDER_PATH } from "../data/config";
import { exec } from "child_process";

export async function transformerMediaToWebp(jid: string, filepath: string) {
    const outputFilename = path.join(TEMP_FOLDER_PATH, `sticker-${jid}.webp`)

    const ffmpegCommand = `ffmpeg -i "${filepath}" -vf "scale=512:512:force_original_aspect_ratio=decrease" -q:v 80 -loop 0 -preset picture -an -vsync 0 "${outputFilename}"`;

    return new Promise((resolve, reject) => {
        exec(ffmpegCommand, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(outputFilename);
            }
        });
    });

}
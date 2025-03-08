"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformerMediaToWebp = transformerMediaToWebp;
const path_1 = __importDefault(require("path"));
const config_1 = require("../data/config");
const child_process_1 = require("child_process");
function transformerMediaToWebp(jid, filepath) {
    return __awaiter(this, void 0, void 0, function* () {
        const outputFilename = path_1.default.join(config_1.TEMP_FOLDER_PATH, `sticker-${jid}.webp`);
        const ffmpegCommand = `ffmpeg -i "${filepath}" -vf "scale=512:512:force_original_aspect_ratio=decrease" -q:v 80 -loop 0 -preset picture -an -vsync 0 "${outputFilename}"`;
        return new Promise((resolve, reject) => {
            (0, child_process_1.exec)(ffmpegCommand, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(outputFilename);
                }
            });
        });
    });
}

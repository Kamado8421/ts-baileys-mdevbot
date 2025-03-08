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
const connection_1 = require("./connection");
const config_1 = require("./data/config");
const functions_1 = require("./functions");
const downloader_1 = __importDefault(require("./functions/downloader"));
const execs_terminal_1 = require("./functions/execs-terminal");
const menu_1 = require("./templates/menus/menu");
const bot_funcs_1 = __importDefault(require("./utils/bot-funcs"));
const loads_1 = __importDefault(require("./utils/loads"));
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        const bot = yield (0, connection_1.Connect)();
        bot.ev.on('messages.upsert', (_a) => __awaiter(this, [_a], void 0, function* ({ messages }) {
            var _b, _c;
            const msg = messages[0];
            const key = msg === null || msg === void 0 ? void 0 : msg.key;
            if ((_b = msg === null || msg === void 0 ? void 0 : msg.key) === null || _b === void 0 ? void 0 : _b.fromMe)
                return;
            const data = yield (0, loads_1.default)(msg);
            //console.log(data)
            const { isCommand, command, from, isGroup, isWoner, pushName } = data;
            if (config_1.ANTI_GROUP_ON && isGroup)
                return;
            if (config_1.ANTI_PV_ON && !isGroup)
                return;
            const messageType = (msg === null || msg === void 0 ? void 0 : msg.message) ? Object.keys(msg === null || msg === void 0 ? void 0 : msg.message)[0] : '';
            const idMessage = String((_c = msg === null || msg === void 0 ? void 0 : msg.key) === null || _c === void 0 ? void 0 : _c.id);
            const isImage = messageType === 'imageMessage';
            const isVideo = messageType === 'videoMessage';
            const isSticker = messageType === 'stickerMessage';
            let filepath, outputfile;
            if (isCommand) {
                yield bot.readMessages([key]);
                const MDEVBOT = new bot_funcs_1.default(msg, from, bot);
                switch (command.toLowerCase()) {
                    case 'ping':
                        MDEVBOT.sendTextMessage('pong!!');
                        break;
                    case 'menu':
                    case 'start':
                        MDEVBOT.sendImage({
                            filename: 'menu.jpg',
                            caption: (0, menu_1.menu)(pushName)
                        });
                        break;
                    case 'f':
                    case 's':
                    case 'figu':
                    case 'sticker':
                    case 'figurinha':
                        if (!isImage)
                            return MDEVBOT.sendTextMessage('A mensagem enviada precisa ser uma imagem.\n\n> *(OBS):* Envie o comando na legenda da imagem');
                        filepath = yield (0, downloader_1.default)(msg);
                        if (!filepath)
                            return MDEVBOT.sendTextMessage('Obtive um erro ao receber a imagem. Tente novamente mais tarde.');
                        MDEVBOT.sendTextMessage('Aguarde, enquanto faço sua figurinha...');
                        outputfile = String(yield (0, execs_terminal_1.transformerMediaToWebp)(idMessage, filepath));
                        MDEVBOT.sendSticker(outputfile);
                        (0, functions_1.deleteFile)(filepath);
                        (0, functions_1.deleteFile)(outputfile);
                        break;
                    default:
                        yield bot.sendMessage(from, { text: 'Este comando não existe.' });
                        break;
                }
            }
        }));
    });
}
start();

import { Connect } from "./connection";
import { ANTI_GROUP_ON, ANTI_PV_ON } from "./data/config";
import { deleteFile } from "./functions";
import downloadMedia from "./functions/downloader";
import { transformerMediaToWebp } from "./functions/execs-terminal";
import { menu } from "./templates/menus/menu";
import BotFuncs from "./utils/bot-funcs";
import loads from "./utils/loads";

async function start() {
    const bot = await Connect();

    bot.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        const key = msg?.key;
        if (msg?.key?.fromMe) return;

        const data = await loads(msg);
        //console.log(data)

        const { isCommand, command, from, isGroup, isWoner, pushName } = data;
        
        if (ANTI_GROUP_ON && isGroup) return;
        if (ANTI_PV_ON && !isGroup) return;

        const messageType = msg?.message ? Object.keys(msg?.message)[0] : '';

        const idMessage = String(msg?.key?.id);
        const isImage = messageType === 'imageMessage';
        const isVideo = messageType === 'videoMessage';
        const isSticker = messageType === 'stickerMessage';

        let filepath, outputfile;

        if (isCommand) {

            await bot.readMessages([key]);
            const MDEVBOT = new BotFuncs(msg, from, bot);

            switch (command.toLowerCase()) {
                case 'ping':
                    MDEVBOT.sendTextMessage('pong!!')
                    break;
                case 'menu': case 'start':
                    MDEVBOT.sendImage({
                        filename: 'menu.jpg',
                        caption: menu(pushName)
                    });
                    break
                case 'f': case 's': case 'figu': case 'sticker': case 'figurinha':
                    if (!isImage) return MDEVBOT.sendTextMessage('A mensagem enviada precisa ser uma imagem.\n\n> *(OBS):* Envie o comando na legenda da imagem');

                    filepath = await downloadMedia(msg);

                    if (!filepath) return MDEVBOT.sendTextMessage('Obtive um erro ao receber a imagem. Tente novamente mais tarde.');

                    MDEVBOT.sendTextMessage('Aguarde, enquanto faço sua figurinha...')
                    outputfile = String(await transformerMediaToWebp(idMessage, filepath));
                    MDEVBOT.sendSticker(outputfile);

                    deleteFile(filepath);
                    deleteFile(outputfile);

                    break;
                default:
                    await bot.sendMessage(from, { text: 'Este comando não existe.' })
                    break;
            }
        }
    })
}


start();
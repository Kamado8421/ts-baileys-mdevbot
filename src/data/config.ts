import path from 'path';

// variáveis de configuração
export const PREFIX = "mdev-";
export const BOT_NAME = "MDEV'BOT";
export const ICON_BOT_NAME = "©";
export const WONER_NAME = "M'Dev Systems";
export const PHONE_NUMBER_OWNER = "559883528062";

// ativadores
export const NOTIFY_BOT_ONLINE = true; // avisa ao dono quando o bot for inicado.
export const GENERATE_QRCODE_TERMINAL = true; // gera o qrcode de conexão no terminal

export const TEMP_FOLDER_PATH = path.resolve(__dirname, '..', '..', 'assets', 'temp');
export const IMAGES_FOLDER_PATH = path.resolve(__dirname, '..', '..', 'assets', 'images');

// anti condições
export const ANTI_GROUP_ON = false; // se for grupo, o bot não responde
export const ANTI_PV_ON = false; // se for privado, o bot não responde


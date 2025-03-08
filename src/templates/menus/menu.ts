import { BOT_NAME, ICON_BOT_NAME, PREFIX, WONER_NAME } from "../../data/config"

export const menu = (pushName: string) => {
return `
╭━━⪩ *BEM VINDO(A)* ⪨━━
┃ *BOT:* ${BOT_NAME}
┃ *DONO:* ${WONER_NAME}
┃ *USUÁRIO:* ${pushName}
╰━━─「〘⚡〙」─━━

╭━━⪩ COMANDOS ATIVOS ⪨━━
┃╭━━─ ≪ •❈• ≫ ─━━╮
┃╎${PREFIX}ping
┃╎${PREFIX}sticker
┃╰━━─ ≪ •❈• ≫ ─━━╯

> ${ICON_BOT_NAME} ${BOT_NAME} ²⁰²⁵
__________________________
`
}
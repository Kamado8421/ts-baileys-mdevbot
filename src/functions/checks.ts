import { PREFIX } from '../data/config';
import { getOwnerJid, JID_GROUP_SUFIX } from './jids-funcs';

export const checkIsCommand = (message: string) => {
    const isCommand = message.trim().startsWith(PREFIX);
    return isCommand;
}

export const checkIsGroup = (jid: string) => {
    return jid.endsWith(JID_GROUP_SUFIX);
}

export const checkIsWoner = (jid: string) => {
    const wonerJid = getOwnerJid();
    return wonerJid === jid;
}
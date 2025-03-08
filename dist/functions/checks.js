"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsWoner = exports.checkIsGroup = exports.checkIsCommand = void 0;
const config_1 = require("../data/config");
const jids_funcs_1 = require("./jids-funcs");
const checkIsCommand = (message) => {
    const isCommand = message.trim().startsWith(config_1.PREFIX);
    return isCommand;
};
exports.checkIsCommand = checkIsCommand;
const checkIsGroup = (jid) => {
    return jid.endsWith(jids_funcs_1.JID_GROUP_SUFIX);
};
exports.checkIsGroup = checkIsGroup;
const checkIsWoner = (jid) => {
    const wonerJid = (0, jids_funcs_1.getOwnerJid)();
    return wonerJid === jid;
};
exports.checkIsWoner = checkIsWoner;

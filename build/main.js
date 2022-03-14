"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
let userId;
let userInvites;
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('Role Assigner Ready');
});
client.on('messageCreate', (message) => {
    var _a;
    userId = message.content.slice(50);
    console.log(userId);
    // inviteMessage = message.content.matchAll(/\d+/)
    userId = userId.substring(userId.indexOf("!") + 1, userId.lastIndexOf(">"));
    console.log(userId);
    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));
    console.log(userInvites);
    if (message.author.id == '499595256270946326') {
        if (userInvites)
            (_a = message.member) === null || _a === void 0 ? void 0 : _a.roles.add('952419492577832980');
    }
});
client.login(process.env.TOKEN);

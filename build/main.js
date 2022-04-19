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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
let member;
let access;
let userId;
let userInvites;
const threeHour = '952419492577832980';
const sixHour = '952419298196996116';
const twelveHour = '952351244532482098';
const twentyFourHour = '952350649335554068';
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('Role Assigner Ready');
});
client.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (((_a = message.member) === null || _a === void 0 ? void 0 : _a.user.id) != '499595256270946326') {
        return;
    }
    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("@") + 1, userId.lastIndexOf(">"));
    member = message.guild.members.cache.get(userId);
    try {
        if (member.roles.cache.hasAny('938954181799206983', '952428989421584485', '952021257870790678')) {
            return;
        }
    }
    catch (_b) {
        console.log('Not a valid message');
    }
    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));
    try {
        if (userInvites >= 3 && userInvites < 10) {
            member.roles.add(twentyFourHour);
            access = 24;
        }
        else if (userInvites >= 10 && userInvites < 20) {
            member.roles.remove(twentyFourHour);
            member.roles.add(twelveHour);
            access = 12;
        }
        else if (userInvites >= 20 && userInvites < 30) {
            member.roles.remove(twelveHour);
            member.roles.add(sixHour);
            access = 6;
        }
        else if (userInvites >= 30) {
            member.roles.remove(sixHour);
            member.roles.add(threeHour);
            access = 2;
        }
        console.log(`${userId}: ${access} hour access granted`);
    }
    catch (e) {
        console.log(e);
    }
}));
client.login('OTUyNzEwMzgxNTM5ODM1OTgy.Yi5-rw.rOA_pHF3Y4wtx6erCPfksXlf2Tc').then();

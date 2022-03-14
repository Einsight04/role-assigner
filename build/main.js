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
let user;
let access;
let userId;
let userInvites;
const fourHour = '952419492577832980';
const eightHour = '952419298196996116';
const sixteenHour = '952351244532482098';
const twentyFourHour = '952350649335554068';
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES
    ]
});
client.on('ready', () => {
    console.log('Role Assigner Ready');
});
client.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    user = yield message.guild.members.fetch('485248184415944738');
    user.roles.add('952350649335554068');
    if ((_a = message.member) === null || _a === void 0 ? void 0 : _a.roles.cache.hasAny('938954181799206983', '952428989421584485', '952021257870790678' ||
        message.author.id !=
            '499595256270946326')) {
        return;
    }
    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("@") + 1, userId.lastIndexOf(">"));
    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));
    if (userInvites >= 3 && userInvites < 10) {
        access = 24;
    }
    else if (userInvites >= 3 && userInvites < 10) {
        access = 16;
    }
    else if (userInvites >= 10 && userInvites < 20) {
        access = 8;
    }
    else if (userInvites >= 20 && userInvites < 30) {
        access = 4;
    }
    console.log(`${access} hour access given to ${(_b = message.member) === null || _b === void 0 ? void 0 : _b.user.username}${(_c = message.member) === null || _c === void 0 ? void 0 : _c.user.discriminator}`);
}));
client.login('OTUyNzEwMzgxNTM5ODM1OTgy.Yi5-rw.ufr5_tcKQk6FbZqwiGIdFg442UE').then();

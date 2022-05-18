import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
import DiscordJS, {Intents} from 'discord.js'

// setup __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// load .env
dotenv.config({path: path.join(__dirname, '../.env')});

// roles to ignore when checking for role changes
const ignoreRoles: string[] = ['976215655042941049', '976215656225722449', '976215661778972742', '976215663125332078']

// possible roles to assign
const threeHour: string = '952419492577832980'
const sixHour: string = '952419298196996116'
const twelveHour: string = '952351244532482098'
const twentyFourHour: string = '952350649335554068'

// Intents
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

// On startup
client.on('ready', () => {
    console.log('Role Assigner Ready');
})

// role assigner
client.on('messageCreate', async (message) => {
    // variables
    let member: DiscordJS.GuildMember
    let access: number
    let userId: string
    let userInvites: number

    // if message is from bot, ignore
    if (message.author.bot) return;

    // gather info from "invite logger" message
    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("@") + 1, userId.lastIndexOf(">"));
    member = message.guild!.members.cache.get(userId)!;
    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));

    try {
        // if user has role in {ignoreRoles}, ignore
        if (ignoreRoles.some(role => member.roles.cache.has(role))) {
            return;
        }
    } catch { return; }

    // role assigner logic
    try {
        if (userInvites >= 3 && userInvites < 10) {
            await member.roles.add(twentyFourHour);
            access = 24;
        } else if (userInvites >= 10 && userInvites < 20) {
            await member.roles.remove(twentyFourHour);
            await member.roles.add(twelveHour);
            access = 12;
        } else if (userInvites >= 20 && userInvites < 30) {
            await member.roles.remove(twelveHour);
            await member.roles.add(sixHour);
            access = 6;
        } else if (userInvites >= 30) {
            await member.roles.remove(sixHour);
            await member.roles.add(threeHour);
            access = 2;
        }
        console.log(`${userId}: ${access!} hour access granted`)
    } catch (e) {
        console.log(e);
    }
})

// login
await client.login(process.env.DISCORD_TOKEN);
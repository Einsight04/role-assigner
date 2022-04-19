import DiscordJS, {Intents, TextChannel} from 'discord.js'

let member: any
let access: number
let userId: string
let userInvites: number

const threeHour: string = '952419492577832980'
const sixHour: string = '952419298196996116'
const twelveHour: string = '952351244532482098'
const twentyFourHour: string = '952350649335554068'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Role Assigner Ready');
})


client.on('messageCreate', async (message) => {
    if (message.member?.user.id != '499595256270946326') {
        return;
    }

    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("@") + 1, userId.lastIndexOf(">"));
    member = message.guild!.members.cache.get(userId);

    try {
        if (member.roles.cache.hasAny('938954181799206983', '952428989421584485', '952021257870790678')) {
            return;
        }
    } catch {
        console.log('Not a valid message');
    }

    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));

    try {
        if (userInvites >= 3 && userInvites < 10) {
            member.roles.add(twentyFourHour);
            access = 24;
        } else if (userInvites >= 10 && userInvites < 20) {
            member.roles.remove(twentyFourHour);
            member.roles.add(twelveHour);
            access = 12;
        } else if (userInvites >= 20 && userInvites < 30) {
            member.roles.remove(twelveHour);
            member.roles.add(sixHour);
            access = 6;
        } else if (userInvites >= 30) {
            member.roles.remove(sixHour);
            member.roles.add(threeHour);
            access = 2;
        }
        console.log(`${userId}: ${access} hour access granted`)
    } catch (e) {
        console.log(e);
    }
})

client.login('OTUyNzEwMzgxNTM5ODM1OTgy.Yi5-rw.rOA_pHF3Y4wtx6erCPfksXlf2Tc').then()
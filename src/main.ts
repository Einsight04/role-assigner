import DiscordJS, {Intents} from 'discord.js'

let userId: string
let userInvites: number

const fourHour: string = '952419492577832980'
const eightHour: string = '952419298196996116'
const sixteenHour: string = '952351244532482098'
const twentyFourHour: string = '952350649335554068'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Role Assigner Ready');
})

client.on('messageCreate', (message) => {
    if (message.member?.roles.cache.hasAny('938954181799206983', '952428989421584485', '952021257870790678')) {
        return;
    }

    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("!") + 1, userId.lastIndexOf(">"));

    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));

    if (message.author.id != '499595256270946326') {
        return;
    }

    if (userInvites >= 3 && userInvites < 10) {
        message.member?.roles.add(twentyFourHour)
    } else if (userInvites >= 3 && userInvites < 10) {
        message.member?.roles.add(sixteenHour)
    } else if (userInvites >= 10 && userInvites < 20) {
        message.member?.roles.add(eightHour)
    } else if (userInvites >= 20 && userInvites < 30) {
        message.member?.roles.add(fourHour)
    }
})

client.login(process.env.TOKEN).then()
import DiscordJS, {Intents} from 'discord.js'

let user
let access: number
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

client.on('messageCreate', async (message) => {
    if (message.member?.roles.cache.hasAny(
        '938954181799206983',
        '952428989421584485',
        '952021257870790678' ||
        message.author.id !=
        '499595256270946326'
    )) {
        return;
    }


    userId = message.content.slice(50);
    userId = userId.substring(userId.indexOf("@") + 1, userId.lastIndexOf(">"));
    user = await message.guild!.members.fetch(userId)




    userInvites = parseInt((message.content.slice(-20).match(/\d/g) || []).join(''));

    if (userInvites >= 3 && userInvites < 10) {
        user.roles.add(twentyFourHour)
        access = 24
    } else if (userInvites >= 3 && userInvites < 10) {
        user.roles.add(sixteenHour)
        access = 16
    } else if (userInvites >= 10 && userInvites < 20) {
        user.roles.add(eightHour)
        access = 8
    } else if (userInvites >= 20 && userInvites < 30) {
        user.roles.add(fourHour)
        access = 4
    }

    console.log(`${access} hour access given to ${message.member?.user.username}${message.member?.user.discriminator}`)

})

client.login('OTUyNzEwMzgxNTM5ODM1OTgy.Yi5-rw.ufr5_tcKQk6FbZqwiGIdFg442UE').then()
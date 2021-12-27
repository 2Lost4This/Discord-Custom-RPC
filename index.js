var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Moderator & Developer",
            state: "Feel free to dm me",
            timestamps: {start: Date.now()},
            assets: {
                large_image: "redpanada",
                large_text: ":^)"
            },
            buttons: [{
                label: "Discord",
                url: "https://discord.gg/4Q87pfTWqC"
            }, {
                label: "Spotify",
                url: "https://open.spotify.com/user/x0qw2ktvf9dhl53iv8jbwelky?si=5a3e85f60de94ee2"
            }]
    
        }
    })
})
client.login({
    clientId: "925121241902366773"
}).catch(console.error);
var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
         console.log('RPC started', ); //shows message if the RPC successfully started
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Moderator & Developer", // First Line
            state: "Feel free to dm me", //  Second Line
            timestamps: {start: Date.now()}, // Starting Timer
            assets: {
                large_image: "redpanada", // name of the large image in the Developer Portal
                large_text: ":^)",  // Text shwoing on clicking on the large image 
                small_image: "redpanada", // Text shwoing on clicking on the small image 
                small_text: "Nothing special here" // name of the small image in the Developer Portal
            },
            buttons: [{
                label: "Discord", //Name of the first Button
                url: "https://discord.gg/4Q87pfTWqC" //link of the first button
            }, {
                label: "Spotify", //name of the second button
                url: "https://open.spotify.com/user/x0qw2ktvf9dhl53iv8jbwelky?si=5a3e85f60de94ee2" //link of the second button
            }]
    
        }
    })
})
client.login({
    clientId: "Your Client ID" // can be found in your Application from the Developer Portal
}).catch(console.error);

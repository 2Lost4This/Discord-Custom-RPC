var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Moderator & Developer", //first line on the Status
            state: "Feel free to dm me", // Second line on the Status
            timestamps: {start: Date.now()}, //starting timer
            assets: {
                large_image: "redpanada", // Go to the Developer Portal, add an image and add the Name here 
                large_text: ":^)" //the text from the image 
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

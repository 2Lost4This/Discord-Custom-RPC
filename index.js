var rpc = require("discord-rpc")
const client = new rpc.Client({
    transport: 'ipc'
})
client.on('ready', () => {
         console.log('RPC started', ); //shows message if the RPC successfully started
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Some text", // First Line
            state: "Some text", //  Second Line
            timestamps: {start: Date.now()}, // Starting Timer
            assets: {
                large_image: "ImageName1", // name of the large image in the Developer Portal
                large_text: "Some text",  // Text shwoing on clicking on the large image 
                small_image: "ImageName2", // Text shwoing on clicking on the small image 
                small_text: "Some text" // name of the small image in the Developer Portal
            },
            buttons: [{
                label: "Some text", //Name of the first Button
                url: "Link1" //link of the first button
            }, {
                label: "Some text", //name of the second button
                url: "Link2" //link of the second button
            }]
    
        }
    })
})
client.login({
    clientId: "Your Client ID" // can be found in your Application from the Developer Portal
}).catch(console.error);

const { Client, MessageEmbed} = require('discord.js');

const bot = new Client();

const token = "TOKEN";

const PREFIX = "k!";

bot.on('ready', () => {
    console.log('KudoBot is online!');
})

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "kudo":
            const Embed = new MessageEmbed()
            .setColor(0xFFC300)
            .setTitle("Kudos!")
            .setDescription("Add someone's name or username after k!kudo to praise someone.");

            if(!args[1]){
                message.channel.send(Embed);
            }

            if(args[1]){
                let msgArgs = args.slice(1).join(" ");

                var kudos = [
                    "There’s ordinary, and then there’s " + msgArgs + ".",
                    "On a scale of 1 to 10, " + msgArgs + " is an 11.",
                    "Take the courage from Gryffindor, hardwork from Hufflepuff, intelligence from Ravenclaw, and the ambition from Slytherin. You get " + msgArgs + " after that.",
                    msgArgs + " is like the last piece of a puzzle. Without them, I would be lost and incomplete.",
                    "Hey " + msgArgs + ", is there anything that you can’t do?",
                    msgArgs + " never fails to amaze me with just how briliant they are.",
                    "If " + msgArgs + " were a vegetable, they would be a cute-cumber.",
                    "If they based a movie on " + msgArgs + ", it would definitely win an Oscar because that's how fantastic they are.",
                    msgArgs + " is great. I don't have anything else to say. Words fall short to describe how incredible they are.",
                    msgArgs + " is the only person I would trust with my passwords.",
                    "If Harry Potter was real, " + msgArgs + " would be the magical one born into a muggle family.",
                    msgArgs + " is the most talented person I know.",
                    msgArgs + " is the human embodiment of that feeling you get after watching a Disney movie.",
                    "When I hang out with " + msgArgs + ", I always end up smiling.",
                    "If 😊 was a person, it'd be " + msgArgs,
                    "I bet " + msgArgs + " is the person everyone wants on their team.",
                    msgArgs + " is that \"nothing\" when people ask me what I'm thinking about.",
                    msgArgs + " is better than unicorns and sparkles combined.",
                    msgArgs + " makes me smile. Even when I'm trying not to.",
                    msgArgs + " is the best kind of friend."
                ]

                message.channel.send(kudos[Math.floor((Math.random() * 10) + 1)]);
            }

            

            break;
    }
})

bot.login(token);

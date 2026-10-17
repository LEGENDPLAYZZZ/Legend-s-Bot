// Build the ticket panel embed using your project's createEmbed utility
const panelEmbed = createEmbed({
    title: "✨ Welcome to the Support Center",
    description: [
        "Please create a ticket below if you:",
        "",
        "• **Need Help**",
        "• **Would like to report a user**",
        "• **Would like to apply for staff**",
        "• **Would like to apply for Partnership**"
    ].join("\n"),
    color: getColor('info')
});

// Set your provided ticket banner asset at the bottom of the embed
panelEmbed.setImage("https://cdn.discordapp.com/attachments/1412450542990397593/1490689854411902996/standard_1.gif?ex=6ad412dc&is=6ad2c15c&hm=7ca66caf5cc4ef0e5c973fb00f5291cf9e3ae65514b47353f0845b698bc5fa02");

// Build the button component row
const ticketButton = new ButtonBuilder()
    .setCustomId('create_ticket_btn')
    .setLabel("Create Ticket")
    .setStyle(ButtonStyle.Primary)
    .setEmoji('🎫');

const row = new ActionRowBuilder().addComponents(ticketButton);

// Send the complete panel structure to your channel
await targetChannel.send({
    embeds: [panelEmbed],
    components: [row]
});

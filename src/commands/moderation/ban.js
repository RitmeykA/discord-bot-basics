const { ApplicationCommandOptionType, PermissionFlagsBits } =  require('discord.js');

module.exports = {
  deleted: true,
  name: 'ban',
  description: 'Bans a member.',
  // devOnly: Boolean,
  // testOnly: Boolean,
  options: [
    {
      name: 'target-user',
      description: 'The user to ban.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'The reason for the ban.',
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administator],
  botPermissions: [PermissionFlagsBits.Administator],

  callback: (client, interaction) => {
    interaction.reply("ban..");
  },
};
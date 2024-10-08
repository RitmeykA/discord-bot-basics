const { Client, Interaction, PermissionFlagsBits } = require('discord.js');
const AutoRole = require('../../models/AutoRole');
const { name, description, permissionRequired } = require('./autorole-configure');

module.exports = {
  callback: async (client, interaction) => {
    try {
      await interaction.deferReply();

      if (!(await AutoRole.exists({ guildId: interaction.guild.id }))) {
        interaction.editReply("Auto role has not been configured for this server. Use `/autorole-configure` to set it up.");
        return;
      }

      await AutoRole.findOneAndDelete({ guildId: interaction.guild.id });
      interaction.editReply('Auto role has been configured for this server. Use `/autorole-configure` to set it up again');
    } catch (error) {
      console.log(error);
    }
  },

  name: 'autorole-disable',
  description: "Disable auto-role in this server.",
  permissionRequired: [PermissionFlagsBits.Administrator],
};
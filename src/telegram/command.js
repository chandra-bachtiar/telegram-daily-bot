import utils from "../utils/index.js";

async function initializeCommand(bot) {
    utils.logger.info("Initializing command...");

    bot.command("start", async (ctx) => {
        await ctx.reply("Hallo para keluarga bahagia!");
    });
}

export default initializeCommand;

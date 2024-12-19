import utils from "../utils/index.js";

async function initializeCommand(bot) {
    utils.logger.info("Initializing command...");

    bot.command("start", async (ctx) => {
        const msg = ctx.message;
        console.log(msg)
        // await ctx.reply(`Halo ${userName}! Saya Bachtiar Assistant Bot, siap membantu kebutuhan sehari-hari Anda. Gunakan perintah /menu untuk melihat opsi yang tersedia.`);
    });

    bot.command("menu", async (ctx) => {
        await ctx.reply("Pilih salah satu:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Pemasukan", callback_data: "pemasukan" }, { text: "Pengeluaran", callback_data: "pengeluaran" }],
                    [{ text: "Tambah Cicilan", callback_data: "tambah_cicilan" }, { text: "Cek Cicilan", callback_data: "cek_cicilan" }],
                    [{ text: "Sisa Uang", callback_data: "sisa_uang" }]
                ]
            }
        });
    });

    bot.action("pemasukan", async (ctx) => {
        await ctx.answerCbQuery();
        await ctx.reply("Anda memilih Pemasukan.");
    });

    bot.action("pengeluaran", async (ctx) => {
        await ctx.answerCbQuery();
        await ctx.reply("Anda memilih Pengeluaran.");
    });

    bot.action("tambah_cicilan", async (ctx) => {
        await ctx.answerCbQuery();
        await ctx.reply("Anda memilih Tambah Cicilan.");
    });

    bot.action("cek_cicilan", async (ctx) => {
        await ctx.answerCbQuery();
        await ctx.reply("Anda memilih Cek Cicilan.");
    });

    bot.action("sisa_uang", async (ctx) => {
        await ctx.answerCbQuery();
        await ctx.reply("Anda memilih Sisa Uang.");
    });
}

export default initializeCommand;

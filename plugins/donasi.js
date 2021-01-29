let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana [085212830930]
│ • Telkomsel [081218305935]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281218305935
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

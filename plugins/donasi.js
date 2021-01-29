let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gopay [085870623309]
│ • Telkomsel [085870623309]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

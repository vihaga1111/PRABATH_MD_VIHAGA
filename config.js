const fs = require('fs-extra')

if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\

global.owner = process.env.OWNER_NUMBER.split("𝐌𝐫 𝐕𝐢𝐡𝐚𝐠𝐚🌈™")

global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"

global.port= process.env.PORT || 5000

global.email = 'vihagachamod200@gmail.com'

global.github = '-'

global.location = 'Sultanpur IN'

global.gurl = 'https://instagram.com/' // add your username

global.devs = '94741842307';

global.website = '-' //wa.me/+94741842307
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'

module.exports = {

  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',

  botname: process.env.BOT_NAME || '𝐌𝐫 𝐕𝐢𝐡𝐚𝐠𝐚🌈™ 𝙾𝙵𝙲',

  art: process.env.AUTO_RESTART || 'true',

  sudo: process.env.SUDO || '94741842307',

  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',

  alivemsj: process.env.ALIVE_MSJ || '*POWERD BY Vihaga-MD* 🎊',

  ownername:process.env.OWNER_NAME || '𝐌𝐫 𝐕𝐢𝐡𝐚𝐠𝐚🌈™',

  sessionName: process.env.SESSION_ID || 'PUT-HERE',

  author: process.env.PACK_INFO.split(";")[0] || 'author', 

  auto_read_status : process.env.AUTO_READ_STATUS || 'false',

  packname: process.env.PACK_INFO.split(";")[1] || '*BOT*',

  autoreaction: process.env.AUTO_REACTION || 'on',

  antibadword : process.env.ANTI_BAD_WORD || "fuck","fuck","Fuck","Fuck","Huththa","huththa","Hutta","hutta","huththi","Huththi","hutti","Hutti","Baduwa","baduwa","paka","Paka","Pakaya","pakaya","Pakichchi","pakichchi","wesawa","Wesawa","Wesi","wesi","Payya","payya","Wesige","wesige","hukanawa","Hukanawa","Hukanna","hukanna","Huka","huka","Hikuna","hikuna","Hikila","hikila","kariya","Kariya","Kari","kari","Hukana","hukana","හුත්තා","හුත්ති","හුකන්නා","හුකනවා","හිකුනා","හිකිලා","හුත්","හුකා","කැරියා","කැරි","පකයා","පක","පකා","පක්","ෆක්","පින්නයා","pinnaya","Pinnaya","බඩුව","වේසාවා","වේසි","පයිය","පයියා","esawa","esi","uddika","Uddika","උද්දික","ඒසාවා","ඒසි","Esawa","Esi","හුකන්නා","හුත්තිගෙ","Huththige","huththige","වේසිගෙ","ponnaya","ponnay","ponnayage","ponnayek","ponnayekne","ponnayekge","පොන්නයා","පොන්නයෙක්","පොන්නයෙක්නෙ","පොන්නයෙක්ගෙ","vesi","vesawa","vesiyak","wesiyak","Wesiyak","Vesi","Vesawa","වේසියක්ගෙ","Huththiyak","huththiyak","payyek","Payyek","pakayek","Pakayek","Huththek","huththek","හුත්තියක්","පයියෙක්","වේසියක්","බඩුවක්","baduwak","Baduwak","pinnayek","Pinnayek","පින්නයෙක්","Huththage","huththage","හුත්තගෙ","Huththata","හුත්තට","huththata","pakata","Pakata","පකට","පකාට","ponnayata","Ponnayata","Huththata","huththata","හුත්තට","පොන්නයට","පයියට","payyata","Payyata","vesita","Vesita","wesita","Wesita","වේසිට","vesiyek","Vesiyek","Wesiyek","vesiyek","වේසියෙක්","හුත්තියෙක්","huththiyek","Huththiyek","huttiyek","Huttiyek","huttek","Huttek","ponni","Ponni","පොන්නි","ponniyak","Ponniyak","Ponniyek","ponniyek","Bacic","becic","becige","Basige","Bacige","besige","hukaam","Hukaam","Hukaham","Hukahan","hukahan","hukaham","hukapu","Hukapu","හුකාම්","හුකහම්","pakeer","fakeer","පකීර්","හුකහන්","ෆකීර්","පිත්තම්","කල්ලතෝනි","මරිමොංගල්","සිපයියා","පිම්පි","වඳ","පීචන්","කැරිය","ලෙස්බියන්","හොරහුත්ති","නාට්ටාමි","බැල්ලි","පක","ඇටදෙක","මන්දමානසික","කණ්ඩම්","කොණ්ඩම්","පීචන්","පකෝ","කනවැන්දුමා","මෑඇටේ","මෑමල","අවජාතක","බලුජානෙ","හුකන්නා","බඩුව","ගොම්බඩුව","පොන්නහුකන්නා","කැරිහුත්ති","පොට්ටහුත්ති","පොට්ටවේසි","ෆක්","වඳහුත්ති","ලෙඩබැල්ලි","වේසබඩුව","පිත්තම්","piththam","Piththam","marimongal","Marimongal","pimpi","Pimpi","pichan","Pichan","kariya","Kariya","හොරහුත්ති","horahuththi","Horahuththi","nattami","Nattami","paka","Paka","hukaham","Hukaham","mandamanasika","Mandamanasika","kandam","Kandam","kondam","Kondam","pichan","Pichan","pako","Pako","kanawanduma","Kanawanduma","ma ate","Maate","mamfdfsgggala","Mamaggddsdla","awajathaka","Awajathaka","balujane","Balujane","hukanna","Hukanna","gonbaduwa","Gonbaduwa","ponnah","ponnahukanna","Ponnahukanna","karihuththu","Karihuththi","pottahuththi","Pottahuththi","pottawesi","Pottawesi","kbgigihogkgkgggjvuug","ffhhufffufjjffjjjfjjjifjffhhhfhfh","wadahuththi","Wadahuththi","ledaballi","Ledaballi","wesabaduwa","Wesabaduwa","pinnayek","Pinnayek","හුත්තෝ","huththo","Huththo","hutto","Hutto","පකෝ","pako","Pako","පයියො","payyo","Payyo","කැරියෝ","kariyo","Kariyo","puthcfsdfghjjo","පුvghjiiiiiතෝ","හුකන්නො","hukanno","Hukanno","keriyo","Keriyo","esawo","Esawo","esavo","Esavo","https://chat","hutho","Hutho","pamka","Pamka","Humkapan","humkapan","humtha","Humtha","Humtho","humtho","Pamko","pamko","kamriya","Kamriya","wemsi","Wemsi","pussy","piss","xnxx","Piss","Pussy","vulva","Vulva","penis",

  alwaysonline: process.env.ALWAYS_ONLINE || 'true',

  antifake : process.env.FAKE_COUNTRY_CODE || '',

  readmessage: process.env.READ_MESSAGE || true,

  HANDLERS: process.env.PREFIX || ['.'],

  warncount : process.env.WARN_COUNT || 3,

  disablepm: process.env.DISABLE_PM || "flase",

  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',

  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',

  antilinkaction: process.env.ANTILINK_ACTION || '⚠️ මෙම ගෘප් එක තුල ලින්ක් ශෙයා කිරිමට අවසර නොමැත 🔇remove',

  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',

  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',

  BRANCH: 'main',

  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',

  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',

  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,

  LANG: process.env.THEME|| 'PRABATH-MD',

  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE

};

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)	
	
	console.log(`Update ${__filename}`)

    delete require.cache[file]

	require(file)

})

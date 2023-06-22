## Deploy on VPS or PC.
- You need to Install git,ffmpeg,curl,nodejs,yarn with pm2 
   1. Install git ffmpeg curl 
      ```
       sudo apt -y update &&  sudo apt -y upgrade 
       sudo apt -y install git ffmpeg curl
      ```
   2. Install nodejs 
      ```
      sudo apt -y remove nodejs
      curl -fsSl https://deb.nodesource.com/setup_lts.x | sudo bash - && sudo apt -y install nodejs
      ```

   3. Install yarn
      ```
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
      sudo apt -y update && sudo apt -y install yarn
      ```

   4. Install pm2
      ```
      sudo yarn global add pm2
      ```

   5. Clone Repo and install required packages
      ```
      git clone https://github.com/prabathLK/PRABATH_MD
      cd PRABATH_MD
      yarn install --network-concurrency 1
      ```

   6. Create an env file for ENV. 
      ```
      touch config.env
      nano config.env
      ```
      copy paste lines below.

      ```
      OWNER_NUMBER="94741842307"
      MONGODB_URI="Enter-mongodb_uri"
      SESSION_ID = "enter session_id"
      port = 22
      OWNER_NAME = "𝐌𝐫 𝐕𝐢𝐡𝐚𝐠𝐚🌈™ 𝙾𝙵𝙲"
      AUTO_REACTION = false
      AUTO_VOICE = true
      AUTO_STICKER = true
      FAKE_COUNTRY_CODE = 94
      READ_MESSAGE = true
      PREFIX = .
      DISABLE_PM = false
      ANTI_BAD_WORD = "fuck","fuck","Fuck","Fuck","Huththa","huththa","Hutta","hutta","huththi","Huththi","hutti","Hutti","Baduwa","baduwa","paka","Paka","Pakaya","pakaya","Pakichchi","pakichchi","wesawa","Wesawa","Wesi","wesi","Payya","payya","Wesige","wesige","hukanawa","Hukanawa","Hukanna","hukanna","Huka","huka","Hikuna","hikuna","Hikila","hikila","kariya","Kariya","Kari","kari","Hukana","hukana","හුත්තා","හුත්ති","හුකන්නා","හුකනවා","හිකුනා","හිකිලා","හුත්","හුකා","කැරියා","කැරි","පකයා","පක","පකා","පක්","ෆක්","පින්නයා","pinnaya","Pinnaya","බඩුව","වේසාවා","වේසි","පයිය","පයියා","esawa","esi","uddika","Uddika","උද්දික","ඒසාවා","ඒසි","Esawa","Esi","හුකන්නා","හුත්තිගෙ","Huththige","huththige","වේසිගෙ","ponnaya","ponnay","ponnayage","ponnayek","ponnayekne","ponnayekge","පොන්නයා","පොන්නයෙක්","පොන්නයෙක්නෙ","පොන්නයෙක්ගෙ","vesi","vesawa","vesiyak","wesiyak","Wesiyak","Vesi","Vesawa","වේසියක්ගෙ","Huththiyak","huththiyak","payyek","Payyek","pakayek","Pakayek","Huththek","huththek","හුත්තියක්","පයියෙක්","වේසියක්","බඩුවක්","baduwak","Baduwak","pinnayek","Pinnayek","පින්නයෙක්","Huththage","huththage","හුත්තගෙ","Huththata","හුත්තට","huththata","pakata","Pakata","පකට","පකාට","ponnayata","Ponnayata","Huththata","huththata","හුත්තට","පොන්නයට","පයියට","payyata","Payyata","vesita","Vesita","wesita","Wesita","වේසිට","vesiyek","Vesiyek","Wesiyek","vesiyek","වේසියෙක්","හුත්තියෙක්","huththiyek","Huththiyek","huttiyek","Huttiyek","huttek","Huttek","ponni","Ponni","පොන්නි","ponniyak","Ponniyak","Ponniyek","ponniyek","Bacic","becic","becige","Basige","Bacige","besige","hukaam","Hukaam","Hukaham","Hukahan","hukahan","hukaham","hukapu","Hukapu","හුකාම්","හුකහම්","pakeer","fakeer","පකීර්","හුකහන්","ෆකීර්","පිත්තම්","කල්ලතෝනි","මරිමොංගල්","සිපයියා","පිම්පි","වඳ","පීචන්","කැරිය","ලෙස්බියන්","හොරහුත්ති","නාට්ටාමි","බැල්ලි","පක","ඇටදෙක","මන්දමානසික","කණ්ඩම්","කොණ්ඩම්","පීචන්","පකෝ","කනවැන්දුමා","මෑඇටේ","මෑමල","අවජාතක","බලුජානෙ","හුකන්නා","බඩුව","ගොම්බඩුව","පොන්නහුකන්නා","කැරිහුත්ති","පොට්ටහුත්ති","පොට්ටවේසි","ෆක්","වඳහුත්ති","ලෙඩබැල්ලි","වේසබඩුව","පිත්තම්","piththam","Piththam","marimongal","Marimongal","pimpi","Pimpi","pichan","Pichan","kariya","Kariya","හොරහුත්ති","horahuththi","Horahuththi","nattami","Nattami","paka","Paka","hukaham","Hukaham","mandamanasika","Mandamanasika","kandam","Kandam","kondam","Kondam","pichan","Pichan","pako","Pako","kanawanduma","Kanawanduma","ma ate","Maate","mamfdfsgggala","Mamaggddsdla","awajathaka","Awajathaka","balujane","Balujane","hukanna","Hukanna","gonbaduwa","Gonbaduwa","ponnah","ponnahukanna","Ponnahukanna","karihuththu","Karihuththi","pottahuththi","Pottahuththi","pottawesi","Pottawesi","kbgigihogkgkgggjvuug","ffhhufffufjjffjjjfjjjifjffhhhfhfh","wadahuththi","Wadahuththi","ledaballi","Ledaballi","wesabaduwa","Wesabaduwa","pinnayek","Pinnayek","හුත්තෝ","huththo","Huththo","hutto","Hutto","පකෝ","pako","Pako","පයියො","payyo","Payyo","කැරියෝ","kariyo","Kariyo","puthcfsdfghjjo","පුvghjiiiiiතෝ","හුකන්නො","hukanno","Hukanno","keriyo","Keriyo","esawo","Esawo","esavo","Esavo","https://chat","hutho","Hutho","pamka","Pamka","Humkapan","humkapan","humtha","Humtha","Humtho","humtho","Pamko","pamko","kamriya","Kamriya","wemsi","Wemsi","pussy","piss","xnxx","Piss","Pussy","vulva","Vulva","penis"
      LEVEL_UP_MESSAGE= true
      THEME= PRABATH-MD
      WORKTYPE = public
      PACK_INFO = "*BOT* ✅; *𝐌𝐫 𝐕𝐢𝐡𝐚𝐠𝐚*🌈"
      ANTILINK_VALUES = "chat.whatsapp.com"
      
      ```
      ctrl + o and ctrl + x, To save and exit

   7. start and stop bot

      To start bot ``` npm start ```,
      To stop bot ``` npm stop ```

const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUu27jRhT9FWNayRHflAQYCEW9qDcpSpaULIIhOSJHfJNDSZQhYIsEroKtUqQKkC6LlCrzA/YPpFZ+IL8Q0LLhLbIbpxvM49wz59xz70AQ4hT1UQ7qdyBK8BYSVCxJHiFQB41svUYJKAMLEgjqAI9hbzTKKWhnye6A+XiptbCWdoTEZUJO4ce3TCk9qINF170BxzKIMsPD5hcAe8be9ne31iEe98cWMyB9egM3GTKVDs3aa1iVlXGj1hMMaXgDjgUixAkO7FbkIB8l0OujfAJx8jb6clPQVqXI4e2132ocPEoONsiuevF0mraoLTVUbCbd5Vr3rfQ7JAsdIk+wOyqJNeQtvChJWkKkbxmEkojrHsQ9J3mi7poX+im2A2QpFgoIJvmbdZ+O84lHeYHRy3SspVjF01G3Ul0tDnymjDh6T7pezaJKu5n0NuKS4I+G+6Vmtmd6SGxFX9uYZxeRxZBtywzwZInYJIp1U1c/JT5JXnrF/T+6w35zjrJ9KTSnbLO5UlwzTTQ1H2rE2a+JYHNmHnWbTFN0w7fR7yuLpq610oNE7Wl1Phu7Ji/vnCk12LflpdFFVTzo+mPCYeWVPiRZ8iWWg9xOGnMHMV1Odla8gPV+TK8qbLciVScRt0og7PKKkhjyyPc1w5bXVj7io4bExF1uPncrjjxATrUKpWZjLu/Y5cSMN/bN049clCsWqNPHMkiQjVOSQILDoNjjxDKA1naKzASRJ3WBQSYlbpSGyJJJOpzbtTCmNGZdmcmGsGQrS9egR72NYM089QaUQZSEJkpTZHVxSsIkH6I0hTZKQf2bd2UQoD25+FZUY+kyWOMkJbMgi7wQWi+mvhxC0wyzgEzzwJSLBUpAnXrdRoTgwE4LGbMAJqaDt0h2IElBfQ29FB3LwEJbbKICD7S/oxuZXVXUW8RTrDGwoJ3Ru4KyEwaXK6JpCgZPW9eoSjPXnCUy1xDR5vWaFpDJUtWaICBQBvg5MsWbzzqoz+hAjse5sRAMEvfXi40rkaBicln1yYWL9ChBFqiTJENlYEDTzSI9dFHwBdxNvu+no3HSbzO6pXZUle9uFCuOJm3zE9yLpaB+9zqm5NAq8HrsktHE5hyUgf/Ugbj4eY0TxRpDsaLI1Hn+6/SrXaEjjKKvAkRAGQSwuAwePv51+unqW3A+/Xp1Pv14Pt1f/f3H7+fT/fnDb+fT/cPpfPrhz/fn0/ePHx5/Pp/uH99fXT3+8vDxfPrwcCrYPVtX1LUQgdhLi1E4HDg1Tmm2hmwjN8JOR9rZkmxL4NXql8hcelKu7hhv6YmaLyszIrqrhrDLMrnkBDtnLPloFaX+iNHHtD68+RcQUAeZuhVboRdiXj2MB4OS2FYUQ2rP+n2PMbVetowUeZ7NOmNG2lNDNm5vY2Mg9a1WW7Wq9tRrVSu9qdnrTzdSHG6oSrYfig3ppqh2ablPi7UnjDZelErUZiSU1P0aWWg94zyl0mh3li0pydl4ZoVWsPclsyai1lJJndKml0eym9ZK2Uo38627iSt0R90H4nar3aqRs7uE+WmYeM9DHD/l7O65QdcYPc3EZ+/+y+LXqFDH8icQz0P2M+3YULfDUXTbQ9TKxu0B4jsqSgeJvQ1XVUW3e4EPjd7Gcg9kdgDH47syiDxI1mHigzpIfQOCMvBgSqTXqOvYRymBfgTqtMiyHE/XasLxH8oxQL8fCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});


# vue-i18n



``` js
const axios = require('axios');
const qs = require('querystring');
const request = axios.create();
const _ = require('lodash');
const path = require('path');
const fs = require('fs')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// console = {
//     log(){

//     }
// }
const inputTemp = path.resolve('./src/views/home/statistics.vue');
const outputTemp = path.resolve('./src/locales/zh_en.json');
if (fs.existsSync(outputTemp)) {
    return;
}
let istream = fs.readFileSync(inputTemp).toString();

const localeReg = /\$t\(["'`]+([^"'`]+)["'`]+\)/g;
const reqCh = [];
console.log(localeReg.test(istream))
const mat = istream.replace(localeReg, (a, b, c) => {
    // console.log(a,b,c);
    if (reqCh.includes(b)) return;
    reqCh.push(b);
});

// console.log(mat)
const by = {
    IG: '3419488CB9A2417E919110531AE659A1',
    token: 'KUSgg9zh73l_rR5ZU2VmNOFN3D_7IOi9',
    key: '1684749813009',
};

const bying = ({ text, }) => {
    console.log( text.split(','))

    const qsparams = {
        IG: by.IG,
        IID: 'SERP.5373'
    }
    let ret = '';
    ret = qs.stringify(qsparams);

    const url = `https://cn.bing.com/ttranslatev3?&${ret}`;
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    const method = 'post';
    let req = {
        fromLang: 'zh-Hans',
        text,
        to: 'en',
        token: by.token,
        key: by.key,
        tryFetchingGenderDebiasedTranslations: true
    };

    req = qs.stringify(req)

    return {
        url,
        method,
        headers,
        req
    }


}
main().catch(console.error)
async function main() {
    if (reqCh.length == 0) return;
    const { url,
        method,
        req,
        headers } = bying({ text: reqCh.join(',') });
    const res = await request[method](url, req, { headers });

    const status = _.get(res, 'data.statusCode');
    if (status) {
        console.log(['res', '需要更新id'],)
        return
    };
    console.log(res.status,)

    const en = _.get(res, 'data.0.translations.0.text', '');

    if (en == '') return;
    const enlist = en.split(', ');

    console.log(enlist)
    transform('statistics.', reqCh, enlist);

}

function transform(name, zh, en) {

    let localeCh = {};
    let localeEn = {};

    en.forEach((item, index) => {
        item = item.trim();
        localeCh[name + item] = zh[index];
        localeEn[name + item] = item;
        
    })
    istream = istream.replace(localeReg, (a,b,c) => {
        const enval = en[zh.findIndex(item => item == b)];
        
        return a.replace(b, enval)
    })

    
    fs.writeFileSync(outputTemp, JSON.stringify({ zh: localeCh, en: localeEn }, null, 2), () => {

    });



    fs.writeFileSync(inputTemp, istream, () => {

    });

}
```

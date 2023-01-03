## Resource
### UI design
* [Figma - pyke project](https://www.figma.com/files/project/61146109/%F0%9F%A6%9A-Project-Pyke?fuid=1056914785060703090)
* [Figma - LDP layout version](https://www.figma.com/file/5erIV6U2lmShK68nwJL2Wc/Landing-Page-v1_RWD-(%E5%AD%90%E9%BE%8D%E8%AB%8B%E7%9C%8B%E9%80%99%E4%BB%BD)?node-id=0%3A1&t=LlCRZTTvLJsFv0na-0)
* [Figma - LDP final](https://www.figma.com/file/BeNDoCZkuInKFAF5bPMlYV/Landing-Page-v2-(%E6%A7%8B%E5%9C%96%E4%B8%AD)?node-id=99%3A356&t=EA6BpmrmhieFBLlO-0)

### GA
* [GA project](https://analytics.google.com/analytics/web/?authuser=1#/p347540937/reports/intelligenthome)
* [GA event list](https://docs.google.com/spreadsheets/d/19irCOtBJdtsvDITScZ8wJs7igQ1lABPxcSC5WVOZeOY/edit#gid=0)

### i18n
* use `react-i18next` [link](https://react.i18next.com/)
* json excel list [link](https://docs.google.com/spreadsheets/d/18fr5i14JnMnQylShn1vtQZjJTp-AqyANphBlZh0gdvU/edit#gid=845385020)
* i18n tranlation json path : `public/locales/{ln}/translation.json`
#### DEVELOP NOTE
* i18n HOC : use `withTranslation` instead `import {...} from 'i18n'`
https://github.com/hashgreen/uat-swap-ldp/blob/04518cdbb1d848b177f04403e833400ada1c37b9/src/components/common/LearnMore.tsx#L36
  extends the type `WithTranslation` so it can  get the i18n function like `t` or `i18n`
https://github.com/hashgreen/uat-swap-ldp/blob/04518cdbb1d848b177f04403e833400ada1c37b9/src/components/common/LearnMore.tsx#L6-L13

#### Crowdin
* HashgreenSwap project [link](https://crowdin.com/project/hashgreen-swap)

## Development

### Installation
```bash
yarn
```

### Local Development
```bash
yarn dev
```

### Deploy

* Use Vite Deploy to GitHub Pages function [ref](https://vitejs.dev/guide/static-deploy.html#github-pages)
```bash
./deplpy.sh
```

### Domain
* [All hashgreen project domain list](https://www.notion.so/stmharry/Domain-name-2d06ccb2de5c48de98d209e24a8358a7)
* [Pyke official repo](https://github.com/hashgreen/pyke-ldp)

```
### Pyke ldp

source code: https://github.com/hashgreen/pyke-ldp

**prod**
deploy: https://hashgreen.github.io/swap-ldp
website: hash.green

**uat**
deploy: https://hashgreen.github.io/uat-swap-ldp
website: [uat-swap-ldp.hash.green](https://uat-swap-ldp.hash.green/)

### Pyke app

**mainnet**
source code: https://github.com/hashgreen/pyke-frontend
deploy: k8s
website: swap.hash.green

**testnet**
website: testnet-swap.hash.green
```

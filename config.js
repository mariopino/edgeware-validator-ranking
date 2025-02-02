// edgeware
export const config = {
  name: 'edgeware',
  title: 'Validator resource center and ranking',
  nodeWs: 'wss://mainnet4.edgewa.re',
  denom: 'EDG',
  addressPrefix: 7,
  tokenDecimals: 18,
  historySize: 28, // 1 week
  erasPerDay: 4,
  polkascanAPI: '', // no trailing slash
  theme: '@/assets/scss/themes/edgeware.scss',
  identiconTheme: 'substrate',
  logo: 'img/logo/edgeware.png',
  favicon: 'img/favicon/edgeware.ico',
  baseURL: '/',
  showValSelectorInPage: false,
  googleAnalytics: 'G-Y501123SNX',
}

export const NETWORK_MAIN = '1'
export const NETWORK_KOVAN = '42'

export default {
  [NETWORK_MAIN]: process.env.NETWORK_MAIN_URL,
  [NETWORK_KOVAN]: process.env.NETWORK_KOVAN_URL
}

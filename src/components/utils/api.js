import request from './request'
const api_prefix = 'LG_CONFIG_APIPREFIX'
console.log(api_prefix)

const testInterface = `${api_prefix}/a/b/c/testurl`

export const test = () => request(testInterface, 'GET')
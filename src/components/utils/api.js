import request from './request'
const api_prefix = LG_CONFIG_API_PREFIX

const  testInterface = `${api_prefix}/a/b/c/testurl`

export const test = () => request(testInterface, 'GET')
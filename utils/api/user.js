import { requestWithToken } from './auth';

export function getUserInfoApi() {
    return requestWithToken({
        url: 'http://10.0.0.210:8080/user/info',
        method: 'GET',
    })
}
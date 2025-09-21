const ENV = 'dev'

const BASE_URLS = {
    dev: 'http://10.0.0.210:8080',
    prod: 'https://api.example.com'
}

const BASE_URL = BASE_URLS[ENV]

export const URL_API = {
    COMMENTS_DETAIL: `${BASE_URL}/comments/detail`,
    RANDOM_TOP_COMMENTS: `${BASE_URL}/comments/randomTopComments`,
    COMMENTS_COUNT: `${BASE_URL}/comments/count`,

    GOODS_SEARCH: `${BASE_URL}/goods/search`,
    GOODS_RANGE: `${BASE_URL}/goods/range`,
    GOODS_DETAIL: `${BASE_URL}/goods`,

    AUTH_LOGIN: `${BASE_URL}/auth/login`,
    AUTH_REGISTER: `${BASE_URL}/auth/register`,

    USER_INFO: `${BASE_URL}/user/info`,

    APP_CONFIG: `${BASE_URL}/config`,
}
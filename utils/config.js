const ENV = 'dev'

const BASE_URLS = {
    dev: 'http://10.0.0.210:8080',
    prod: 'https://api.example.com'
}

const BASE_URL = BASE_URLS[ENV]

export const URL_API = {
    CommentsDetail: `${BASE_URL}/comments/detail`,
    RandomTopComments: `${BASE_URL}/comments/randomTopComments`,
    CommentsCount: `${BASE_URL}/comments/count`,

    GoodsSearch: `${BASE_URL}/goods/search`,
    GoodsRange: `${BASE_URL}/goods/range`,
    GoodsDetail: `${BASE_URL}/goods`,

    AuthLogin: `${BASE_URL}/auth/login`,
    AuthRegister: `${BASE_URL}/auth/register`,

    UserInfo: `${BASE_URL}/user/info`,
    UserAvatar: `${BASE_URL}/user/avatar`,

    AppConfig: `${BASE_URL}/api/config`,
    CustomerServiceConfig: `${BASE_URL}/api/config/customerService`
}
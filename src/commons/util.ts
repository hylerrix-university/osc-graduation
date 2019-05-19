
/**
 * 打开新标签页，通常在打开的新标签页时外部链接，不是 route-link 在应用内配置的路由时使用
 * @param url URL 前缀，不包含 ? 问号之前的部分
 * @param param GET 请求中 ? 问号后面的参数
 */
export const openLink = (url: string, param: string) => {
    param ? window.open(url + '?' + param, '_blank') :
        window.open(url)
}

/**
 * 将 JSON 对象格式化为 get 请求 URL 上的字符串
 * 如：{ ningowood: '...', osc: '...' } => "ningowood=...&osc=..."
 * @param json JSON 对象
 */
export const formatJsonToQuery = (json: any) => Object.keys(json).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
}).join('&')

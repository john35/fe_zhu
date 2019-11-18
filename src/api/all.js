import axios from './index'

export function getData() {
    return axios.request({
        methods: 'get',
        params: {
            name: 'dabai'
        }
    })
}

// 行情
export function pigPrice(params) {
    return axios.request({
        methods: 'get',
        url: 'pig/unit',
        params,
    })
}

// 分时图
export function pigFenShi(params) {
    return axios.request({
        methods: 'get',
        url: 'pig/getfenshi',
        params
    })
}

export function signIn(params) {
    console.log(params)
    return axios.request({
            methods: 'post',
            url: "user/sign_in",
            params
        }
    )
}
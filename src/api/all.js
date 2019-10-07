import axios from './index'

export function getData(){
    return axios.request({
        methods:'get',
        params:{
            name:'dabai'
        }
    })
}

// 行情
export function pigPrice(params){
    return axios.request({
        methods:'get',
        url:'price',
        params:{
            page:params.page,
            page_size:10,
        }
    })
}

// 分时图
export function pigFenShi(params){
    return axios.request({
        methods:'get',
        url:'fenshi',
        params
    })
}
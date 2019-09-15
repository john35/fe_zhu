import axios from './index'

export function getData(){
    return axios.request({
        methods:'get',
        params:{
            name:'dabai'
        }
    })
}

export function pigPrice(){
    return axios.request({
        methods:'get'
    })
}
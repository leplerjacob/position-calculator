import axios from 'axios'

export async function getBTCPrice() {
    let data = await axios.get('http://localhost:3001/btcusd')
    return data
}

export async function getETHPrice() {
    let data = await axios.get('http://localhost:3001/ethusd')
    return data
}


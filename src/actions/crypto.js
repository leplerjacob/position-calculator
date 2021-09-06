import axios from 'axios'

export async function getBTCPrice() {
    let data = await axios.get('http://localhost:3000/btcusd')
    return data
}
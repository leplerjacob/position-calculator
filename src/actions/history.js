import axios from 'axios'

export async function postTrade(tradeDetails) {
    let data = await axios.post('http://localhost:3001/history', tradeDetails)
    return data
}

export async function deleteTrade() {
}

export async function editTrade() {
}


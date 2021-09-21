import axios from 'axios'

export async function postTrade(tradeDetails) {
    let data = await axios.post('http://localhost:3001/history', tradeDetails)
    return data
}

export async function deleteTrade(index) {
    // return the deleted trade just in case for use later
    let data = await axios.delete(`http://localhost:3001/history/${index}`)
    return data
}

export async function editTrade() {
}


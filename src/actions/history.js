import axios from 'axios'

export async function postTrade(tradeMade) {
    await axios.post('http://localhost:3000/history', tradeMade)
    return data
}

export async function deleteTrade() {
}

export async function editTrade() {
}


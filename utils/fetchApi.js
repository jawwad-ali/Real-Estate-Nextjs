import axios from "axios"

export const baseURL = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'dc78e1deb3mshaee8b47a5dc24b2p1989d0jsncba7ab11f683'
        }
    })
    return data
}
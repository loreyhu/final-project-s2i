import axios from 'axios'

const clientAPI = async (id) => {
    const data = await axios.get(`https://global-warming.org/api/${id}-api`)
    return data
}

export { clientAPI }
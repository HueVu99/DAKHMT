import axios from 'axios'
const API_URL = 'http://localhost:5000/api/bhxh/'

const createBHXH = async (bhxh, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, bhxh, config)

  return response.data
}
const editBHXH = async (bhxh, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL+bhxh.id, bhxh, config)

  return response.data
}

// Get theu
const getBHXH = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
const deleteBHXH = async (bhxhId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + bhxhId, config)

  return response.data
}


const bhxhService = {
  getBHXH,
  createBHXH,
  deleteBHXH,
  editBHXH
}

export default bhxhService

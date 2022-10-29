import axios from 'axios'

const API_URL = 'http://localhost:5000/api/thue/'



const createThue = async (thue,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL,thue, config)

  return response.data
}
const editThue = async (thue, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL+thue.id, thue, config)

  return response.data
}
// Get theu
const getThue = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const deleteThue = async (thueId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + thueId, config)

  return response.data
}


const thueService = {
  getThue,
  createThue,
  deleteThue,
  editThue
}

export default thueService

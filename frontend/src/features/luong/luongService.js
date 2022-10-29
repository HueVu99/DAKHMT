import axios from 'axios'

const API_URL = 'http://localhost:5000/api/luong/'

const createLuong = async (luong,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL,luong, config)

  return response.data
}
const editLuong = async (luong, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL+luong.id, luong, config)

  return response.data
}
// Get theu
const getLuong = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}
const deleteLuong = async (luongId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + luongId, config)

  return response.data
}


const thueService = {
  getLuong,
  createLuong,
  deleteLuong,
  editLuong
}

export default thueService

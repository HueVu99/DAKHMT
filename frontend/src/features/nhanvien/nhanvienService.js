import axios from 'axios'

const API_URL = 'http://localhost:5000/api/nhanvien/'

const createNhanVien = async (nhanvien, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, nhanvien, config)

  return response.data
}

const editNhanVien = async (nhanvien, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URL+nhanvien.id, nhanvien, config)

  return response.data
}

// Get user goals
const getNhanViens = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

const deleteNhanvien = async (nhanvienId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + nhanvienId, config)

  return response.data
}

const nhanvienService = {
  getNhanViens,
  createNhanVien,
  deleteNhanvien,
  editNhanVien
}

export default nhanvienService

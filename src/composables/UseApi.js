import { api } from 'boot/axios'

export default function useApi (url) {
  const list = async () => {
    try {
      const { data } = await api.get(url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const getById = async (id) => {
    try {
      const { data } = await api.get(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const post = async (obj) => {
    try {
      const { data } = await api.post(url, obj)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const update = async (obj) => {
    try {
      const { data } = await api.put(`${url}/${obj.id}`, obj)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
      const { data } = await api.delete(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    list,
    getById,
    post,
    update,
    remove
  }
}

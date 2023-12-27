import { localhostUserToModel } from "../mappers/localhost-user.mapper"
import { User } from "../models/user"

/**
 * 
 * @param {String|Number} id 
 * @returns {Promise<User>}
 */
export const getUserByID = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
  const res = await fetch(url)
  const result = await res.json()

  const user = localhostUserToModel(result)
  return user
}
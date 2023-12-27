import { userModelToLocalhost } from '../mappers/user-to-localhost.mapper'
import {User} from '../models/user'
/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {

  
  const user = new User(userLike)
  if(!user.firstName || !user.lastName) {
    throw 'First & Last name are required.'
  }

  const userToSave = userModelToLocalhost(user)

  if (user.id) {
    throw 'Not implemented.'
  }

  const updatedUser = await createUser(userToSave)
  return updatedUser
}

/**
 * 
 * @param {Like<User>}
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const newUser = await response.json()
  console.log({newUser})
  return newUser
}
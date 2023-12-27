
/**
 * 
 * @param {String|Number} id 
 * @returns 
 */
export const deleteUserByID = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`
  const response = await fetch(url, {
    method: 'DELETE'
  })

  const deleteUser = await response.json()
  return true
}
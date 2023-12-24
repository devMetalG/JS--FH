/**
 * 
 * @param {Number} page 
 * @returns {Promise<Object>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
  const res = await fetch(url)
  const result = await res.json()
  console.log(result)
  return result
}
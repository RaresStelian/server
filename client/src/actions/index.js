import axios from 'axios'
export const FETCH_USER = 'FETCH_USER'

// export const fetchUser = () => {
//   return dispatch => {
//     axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }))
//   }
// }
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}

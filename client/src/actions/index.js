import axios from 'axios'
export const FETCH_USER = 'FETCH_USER'
export const SEND_TOKEN = 'SEND_TOKEN'

// export const fetchUser = () => {
//   return dispatch => {
//     axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }))
//   }
// }
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data })
}
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)
  dispatch({ type: FETCH_USER, payload: res.data })
}

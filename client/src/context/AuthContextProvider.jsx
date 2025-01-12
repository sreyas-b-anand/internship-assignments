import { useReducer , useEffect } from "react"
import { AuthContext } from "./AuthContext"
import PropTypes from "prop-types"
const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { user: action.payload }
      case 'LOGOUT':
        return { user: null }
      default:
        return state
    }
  }

export const AuthContextProvider = ({children}) => {
   const [user , dispatch ] = useReducer(authReducer , {
    user : null
})
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      dispatch({ type: 'LOGIN', payload: user }) 
    }
  }, [])
   
  return (
    <AuthContext.Provider value={{...user , dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children are provided and of valid type
  };
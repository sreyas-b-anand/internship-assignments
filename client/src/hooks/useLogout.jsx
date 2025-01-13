import { useNavigate } from "react-router-dom"
import { useAuthContext } from "./useAuthContext"

const useLogout = () => {
    const navigate = useNavigate()
    const {dispatch } = useAuthContext()
    const logout =  async () => {
        await localStorage.removeItem('user')

        dispatch({
            type : 'LOGOUT'  , payload : null
        })
        navigate('/')
    }
    return {logout }
}

export default useLogout

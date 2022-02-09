import { useAppSelector } from '../redux/store'

const useAuthState = () => {
  const { token } = useAppSelector((store) => store.auth)
  const isAuth = Boolean(token)

  return isAuth
}

export default useAuthState

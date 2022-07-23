import { http } from "../utils/http"
import { useAuth } from "../context/auth-context"
const useHttp = () => {
    const authValue = useAuth();
    return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, { ...config, token: authValue?.user?.token })
}
export default useHttp
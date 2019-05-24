import Axios from "axios";

export const USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password){

        return Axios.get('http://localhost:8080/basicauth',{
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    executeJwtAuthenticationService(username, password){
        return Axios.post('http://localhost:8080/authenticate',{
            username,
            password
        })
    }

    registerSuccessfulLogin(username, password){
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);
    };

    registerSuccessfulLoginJwt(username, token){
        this.setupAxiosInterceptors(this.createJWTToken(token));
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);
    };

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
        if(user === null){
            return false;
        }
        return true;
    }

    getUserName(){
        return sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);
    }

    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
    }

    createBasicAuthToken(username, password){
        return "Basic " + window.btoa(username + ":" + password);
    }

    createJWTToken(token){
        return "Bearer " + token;
    }

    /**
     *  Added interceptor to add authorization header when user is logged in. This method need to be called before its initialized
     **/
    setupAxiosInterceptors(authorization){
        Axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = authorization
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();
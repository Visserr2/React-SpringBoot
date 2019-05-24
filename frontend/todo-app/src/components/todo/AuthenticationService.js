import Axios from "axios";

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
        sessionStorage.setItem('authenticatedUser', username);
    };

    registerSuccessfulLoginJwt(username, token){
        this.setupAxiosInterceptors(this.createJWTToken(token));
        sessionStorage.setItem('authenticatedUser', username);
    };

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return false;
        }
        return true;
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
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
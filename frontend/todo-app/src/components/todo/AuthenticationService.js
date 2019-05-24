import Axios from "axios";

class AuthenticationService {

    executeBasicAuthenticationService(username, password){

        return Axios.get('http://localhost:8080/basicauth',{
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    createBasicAuthToken(username, password){
        return "Basic " + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin(username, password){
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
        sessionStorage.setItem('authenticatedUser', username);
    };

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if(user === null){
            return false;
        }
        return true;
    }

    /**
     *  Added interceptor to add authorization header when user is logged in. This method need to be called before its initialized
     **/
    setupAxiosInterceptors(basicAuthHeader){
        Axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = basicAuthHeader
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();
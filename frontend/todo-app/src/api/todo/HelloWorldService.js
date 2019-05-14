import Axios from "axios";

/** 
* Class for making Api calls via Javascript
**/
class HelloWorldService {
    
    executeHelloWorldService(){
        // returns a promise
        return Axios.get('http://localhost:8080/hello-world');
    }
}

export default new HelloWorldService()
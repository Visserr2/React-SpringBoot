import Axios from "axios";

/** 
* Class for making Api calls via Javascript
**/
class HelloWorldService {
    
    executeHelloWorldService(){
        // returns a promise. Dit is een asynchrone operatie die eventueel kan lukken danwel mislukken.
        // Bij een promise kun je dus aangeven wat je wilt doen als de operatie faalt of lukt
        return Axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(){
        return Axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathParamService(name){
        return Axios.get(`http://localhost:8080/hello-world/name/${name}`);
    }
}

export default new HelloWorldService()
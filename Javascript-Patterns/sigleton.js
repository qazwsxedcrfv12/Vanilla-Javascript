const Singleton = (function(){
    let instance;

    function createInstance(){
        const object = new Object("Object Instance!!!!!")
        return object;
    }


    return{
        getInstance: function(){
            if(!instance)
              instance=createInstance();
            return instance;
        }
    }
})();

let instanceA = Singleton.getInstance()

console.log(instance)
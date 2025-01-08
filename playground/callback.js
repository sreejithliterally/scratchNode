const doWorkcallback = (callback) =>{

    setTimeout(()=>{
        // callback("this is my errror",undefined)
        callback(undefined,[1,2,3])

    },2000)
}

doWorkcallback((error,result)=>{
    if(error){
        return console.log(error)
    }
    console.log(result)

})
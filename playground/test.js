// const names = ["unni","Kesavan","Bim","jeevanreji"]

// const shortNames = names.filter((name)=>{
//     return name.length <= 4
// })

// console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude:100,
            longitude:300
        }
        callback(data)
    },2000)
}

geocode("random address",(data)=>{
    console.log(data)
})


const add =(a, b, callback)=>{
    setTimeout(()=>{
        const sum = a+b
        callback(sum)
    },5000)
}

add(5,6,(sum)=>{
    console.log(sum)
})
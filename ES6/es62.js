function promises(name){
    return new Promise((resolve, reject)=>{
        if(name == "Haider"){
            resolve({
                status: "success",
                name: "Haider",
                age: 21
            })
        }
        reject({
            status: "failed",
            message: "user not found"
        })
    })
}

promises("Haider").then(data=>console.log("found", data)).catch(err=>console.log("error", err))
promises("HaiderBukhari").then(data=>console.log("found", data)).catch(err=>console.log("error", err))
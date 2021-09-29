fetch ("64c316f7a2fa4897858df1e3aee33c73")
.then(function(response){

    // console.log(response)
    return response.JSON()
})
.then(function(response){
    console.log(response.data)
})
.catch(function(error){
    console.log(error)
})
console.log("raja")
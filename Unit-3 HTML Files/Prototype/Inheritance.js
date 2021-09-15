
var grandParent = {
    grandFather:"Arunabh",
    grandMother:"Parvati",
    nationality:"Nationality"
    
}
var parents = {
    fatherName:"Akhilesh",
    motherName:"Joty"
}

var grnadInheritance = Object.create(grandParent)
var grandParentsChild = Object.create(parents)
grandParentsChild.father = "Sourabh"


console.log(grnadInheritance.__proto__)
console.log(grandParentsChild.__proto__)
console.log(grandParentsChild)


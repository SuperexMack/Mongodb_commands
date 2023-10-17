const mongoose = require("mongoose")

async function main() {

await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}

main().then(()=>{

console.log("Connection successful")

})

.catch(err => console.log(err));


const mySchema = new mongoose.Schema({

Name:String,
City : String,
Marks: Number,


})

const montu = mongoose.model("montu" , mySchema)



const insert1 = new montu({

Name:"Mack Walker",
City : "Almora",
Marks: 89,


})



insert1.save()


montu.deleteMany({})
.then((res)=>{

console.log(res)

})


montu.insertMany([

{Name:"Elvish Yadav" , City : "Haryana" , Marks:20},
{Name:"Mack Walker" , City : "Banglore" , Marks:20},
{Name:"Hanshika Sharma" , City : "Delhi" , Marks:20},
{Name:"Elon Musk" , City : "Mars" , Marks:20},
{Name:"Steve Jobs" , City : "U.S.A" , Marks:20},


])

.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})


montu.find({Marks: {$gt: 10}})

.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})

montu.findOne({Marks: {$gt: 10}})

.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})

montu.findById("652d3250936bb901257f153e")

.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})


// In the uppar method we had find the element using findById


montu.updateOne({Name:"Mack Walker"} , {Name:"Mohit Sati"} )

.then((res)=>{


console.log(res)

})

.catch((err)=>{

console.log(err)

})


montu.updateMany({Marks: {$gt : 10 } } , {Marks : 60})

.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})


montu.findByIdAndUpdate({_id:"652d3250936bb901257f1541"} , {Name: "Elon Bhaiya"} , {new:false} )


.then((res)=>{

console.log(res)

})

.catch((err)=>{


console.log(err)

})



// using  {new:false} this is used to get the updated value

montu.findOneAndUpdate({Marks: {$gt: 30}} , {Marks:300})


.then((res)=>{

console.log(res)


})

.catch((err)=>{

console.log(err)

})


// using findOneAndUpdate we will find the first occurance of that value and then we will update it













































































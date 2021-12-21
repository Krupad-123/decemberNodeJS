debugger;



var name = "Raj";



function getData()
{
console.log(this.name)
}



//context is environmet where it executes



var userData = {
name:"Quinnox"
}



var userInfo = {
name:"Raj"
}



getData.call(userData)
getData.call(userInfo)
getData()
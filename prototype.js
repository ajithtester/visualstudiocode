// function prototype(params) {
//     console.log(params)
// }
// prototype(32)

let funy = function(name , age ){
    this.name = name;
    this.age = age
}

funy.prototype.getname = function(){
    return this.name 
}

funy.prototype.getage = function(){
    return this.age
}

let ex = new funy("ajith",123);
console.log(ex.getname())
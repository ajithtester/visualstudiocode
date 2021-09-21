function absract( age, height) {
    let params = "ajith"
    this.age = age
    this.height = height

    this.getname = function(){
        return params

    }

   // console.log(this.params + this.age + this.height)
}
let jjj = new absract(  12, 180)
console.log( jjj.getname())
//test

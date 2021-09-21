class poly {

    constructor (name)
{
    this.name = name
}    

poling(){

console.log('my name is : '+ this.name)
    }

}
// let ani = new poly(123)
// ani.poling()

class poll extends poly {

    poling(){
      
        super.poling()
       
       console.log('my height is : '+ this.name)
            }
        
        }

let x = new poll(123)
x.poling()



class Tesla{

NoOfGears(Gears){

this.Gears = Gears;
console.log("number of gears in the car is : " + this.Gears);

}

topspeed(speed){
this.speed = speed
console.log("top speed of the car is : " + this.speed)

}

}

class cars extends Tesla {

    model(modelname){
this.modelname = modelname
console.log("modelname of the car is : " + this.modelname)
    }
}

let cardetails = new cars();
cardetails.model("Tesla 2021")
cardetails.NoOfGears(8);
cardetails.topspeed("300 km/h")
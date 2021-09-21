class employeedetails {

    Employee(name, id, number){

        this.name = name;
        this.id = id;
        this.number = number;

    }

getemployeename(){
    return this.name 
}

getemployeeid(){
    return this.id
}

getemployeenumber(){
    return this.number
}


}
let employee = new employeedetails()
employee.Employee("ajith", 123 , 75845)
console.log(employee.getemployeename())
console.log(employee.getemployeeid())
console.log(employee.getemployeenumber())
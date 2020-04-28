class Person{
    constructor (Name, Age, Gender, Interest) {
        this.name=Name;
        this.age=Age;
        this.gender=Gender;
        this.interest=Interest;
    }

    hello(){
      return ("Hello, my name is "+this.name+" and I am "+this.age+" years old. My interests are "+this.interest[0]+","+this.interest[1]+" and"+this.interest[2]);
    }
    // hello(){
    //     return ("Hello, my name is "+this.name+" and I am "+this.age+" years old. My interests are "+this.interest);
    // }  
}

module.exports = {Person}
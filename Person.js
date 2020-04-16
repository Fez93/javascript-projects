class Person{
    constructor (Name, Age, Gender, Interest=[])
    {
        this.name=Name;
        this.age=Age;
        this.gender=Gender;
        this.interest=Interest;

    }

    hello(){
        let str="";
        let i= 0;
        for(i=0; i < this.interest.length; i++){
            str+= this.interest[i];
        }
     
      return ("Hello, my name is "+this.name+" and I am "+this.age+" years old. My interests are "+str);
    }

}

let person = new Person(
    "Ryan",
    "30",
    "male",
    ["being a hardarse", " agile", " ssd hard drives."]);
greeting=person.hello();
console.log(greeting);
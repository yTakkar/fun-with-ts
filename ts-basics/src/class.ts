interface PersonClassInterface {
  name: string,
  updateName(name:string):void,
  getName():string
}

class PersonClass implements PersonClassInterface {
  name:string
  constructor(name: string) {
    this.name = name
  }

  updateName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }
}

const person1 = new PersonClass('faiyaz')
person1.getName()

const object: { cities: string[], getCities():string } = {
  cities: ['mumbai', 'allahabad'],
  getCities: function() {
    return this.cities[1]
  }
}

console.log(object.getCities())

class MyClass {
  age: number;
  get Age(): number {
    return this.age
  }
  set Age(age: number) {
    this.age = age
  }
}

const cl = new MyClass()
cl.Age = 20
console.log(cl.Age)
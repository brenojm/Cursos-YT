"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//string, boolean, number, ...
let x = 10;
x = 25;
console.log(x);
// inferencia x annotation
let y = 12;
//y = "teste"
let z = 12;
//tipos básicos
let firstName = "Breno";
let age = 18;
const isAdmin = true;
// String != string
firstName = "João";
console.log(firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
//console.log(myNumbers.toUpperCase());
console.log(firstName.toUpperCase);
myNumbers.push(5);
//tuplas
let myTuple;
myTuple = [5, "alo", ["a", "b"]];
//myTuple = [true, false, true]
//object literals -> {prop : value}
const user = {
    name: "Breno",
    age: 18,
};
console.log(user);
console.log(user.name);
//user.job = "Programador"
//any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "200";
const shirId = 123;
// enum
//tamanho de roupas (size: Médio, size:Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G
};
console.log(camisa);
// literal types
let teste;
//teste = "outrovalor"
teste = "autenticado";
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
//console.log(12, true);
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Breno"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Breno");
greeting("José", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumber(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 5
};
console.log(multiplyNumber(someNumbers));
// narrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
//generics
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
// classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do Usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O nome do Usuário é ${this.role}`);
            return;
        }
        console.log("Informação Restrita");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
console.log(fusca);
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
//decorators
// constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);

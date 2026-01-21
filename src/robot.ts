const name = "Robbie";
const age = 1;

console.log(name);
console.log(age);
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
console.log("Hello my names is " + name + " and I am " + age + " years old.");

if (age > 2){
    console.log("I am a teenager in robot years");
}

if (age > 10){
    console.log("I am an oldster robot");
} else {
    console.log("I am not excatly an old robot yet");
}

// say happy bday for every year old we are
for (let i = 0; i < age; i++){
    console.log("Happy Birthday to me!");
}

//now do it again with a while loop
// while (i < age){
//     console.log("Happy Birthday to me again!");
//     i++;
// }

// i = 0;
// do{
//     console.log("Happy Birthday to me again!");
//     i++;
// } while (i < age);

// //objects
// type Robot = {
//     name: string;
//     age: number;
//     serialNumber: string;
// }

// const robbie:Robot = {
//     name: "Roberto the rollickin robot",
//     age: 5,
//     serialNumber: "123456789",
// };

// console.log("Here is a robot:", robbie);

// const serials = ["abcd", "123456789"];

// console.log("My list of serial numbers is:", serials);

// function sayHiRobot(r: Robot){
//     const nextAge = r.age + 1;
//     console.log("next year I will be", nextAge, "years old");
// }

// sayHiRobot(robbie);

// sayHiRobot({
//     name: "Richard",
//     age: 100,
//     serialNumber: "1"
// });

// const reportSerial = (robot: Robot): {
//     console.log('the robot named ${robot.name}: ${robot.serialNumber}');
// }
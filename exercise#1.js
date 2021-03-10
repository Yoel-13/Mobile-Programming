//Exercise #1 MobPro - Array Exercise
//Roring Yoel Mengko

//for each of the exercise below, assume you are starting with the following people array
let people = ["Greg", "Mary", "Devon", "James"];

//1. using a for-loop
console.log("Nomor 1");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

//2. using forEach
console.log("Nomor 2");
people.forEach(function (data) {
    console.log(data)
});

//3. command to remove "Greg"
console.log("Nomor 3");
people.shift();
console.log(people)

//4. write command to remove "James"
console.log("Nomor 4");
people.pop();
console.log(people)

//5.write command, add "Matt"
console.log("Nomor 5");
people.unshift("Matt");
console.log(people)

//6. add my name to the end of the array
console.log("Nomor 3");
people.push("Jonathan");
console.log(people)

//7. using a for-loop
console.log("Nomor 7");
for (let i = 0; i < people.length; i++) {
    if (i > 1) {
        break;
    }
    console.log(people[i]);
}

//8. write command, using SLICE
console.log("Nomor 8");
let people1 = people.slice(2);
console.log(people1);

//9. redefine the people using SLICE. remove "Devon", add "Elizabeth" and "Artie"
console.log("Nomor 9");
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//10. create a new variable called withBob, add the string of "Bob"
console.log("Nomor 10");
let withBob = people.concat("Bob");
console.log(withBob);

//ObjectExercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1. add the language "Go"
console.log("Nomor 1");
programming.languages.push("Go");
console.log(programming);

//2. change difficulty to 7, using bracket notation
console.log("Nomor 2");
programming["difficulty"] = 7;
console.log(programming);

//3. using
console.log("Nomor 3");
delete programming.jokes;
console.log(programming);

//4.
console.log("Nomor 4");
programming.isfun = true;
console.log(programming);

//5.
console.log("Nomor 5");
let update = programming.languages.map(function(item, index) {
    return index + " - " + item;
})

console.log(update);
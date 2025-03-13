//Pure functions
//If a pure function is repeatedly invoked with the same set of arguments, the function will always return the same result. Its behavior is predictable. 
//Impure functions are the opposite: the return value is not predictable, and invoking the function might make network or database calls or alter any objects passed in as arguments.
function randomMuktiplyAndFloor () {
    return Math.floor (Math.random ()*100);
}
console.log(randomMuktiplyAndFloor ())
console.log(randomMuktiplyAndFloor ())
console.log()

//This one's impure because it alters the passed-in object:
const ada = {
    name: "Ada Lovelace",
    age: 202,
};
function happyBirthday (person) {
    console.log(`Happy birthday ${person.name} youre ${++person.age} years old`);
}
happyBirthday(ada);
happyBirthday(ada);
console.log(ada);
console.log()

//Here's a pure take on our randomMultiplyAndFloor() function:
function multiplyAndFloor(num) {
    return Math.floor(num * 100);
  }
  
  const randNum = Math.random();
  
  console.log(randNum);
  console.log(multiplyAndFloor(randNum));
  console.log(multiplyAndFloor(randNum));

  //one that returns a new object instead of mutating the passed-in ob
  const adaAge202 = {
    name: "Ada Lovelace",
    age: 202,
  };
  
  function happyBirthday(person) {
    const newPerson = Object.assign({}, person, { age: person.age + 1 });
  
    console.log(
      `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
    );
  
    return newPerson;
  }
  
  const adaAge203 = happyBirthday(adaAge202)

  //Tying it all together
  //let's rewrite our filter() function as a pure function that returns a new array containing the filtered elements:
  const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];
  
  functtion filter (collection, cb) {
    const newCollection = [];
    for (const user of collection) {
        if(cb(user)) {
            newCollection.push(user);
        }
    }
    return newCollection;
  }
  const bluePenguinUsers = filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });

console.log(bluePenguinUsers);

const yellowUsers = filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });  
  console.log(yellowUsers;);
  console.log(users.length);

  //Using Array.prototype.filter()
  [1, 2, 3, 4, 5].filter(function (num) {
    return num > 3;
  });

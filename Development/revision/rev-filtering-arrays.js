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

  //print out everyone's first name:
  function firstNamePrinter(collection) {
for(const user of collection) {
    console.log(user.firstName);
}
  }
  console.log(firstNamePrinter(users));
  console.log()

 // print out only users whose favorite color is blue:
 function blueFilter(collection) {
  for(const user of collection) {
    if(user.favoriteColor === "Blue"){
      console.log(user.firstName);
    }
      }
 }
 console.log(blueFilter(users));
 console.log()

 //filter our collection of users for those whose favorite color is red but
 //let's just pass in the color that we want to filter for as an argument
 function colorFilter(collection, color) {
  for(const user of collection) {
    if(user.favoriteColor === color) {
      console.log(user.firstName);
    }
  }
 }
 console.log(colorFilter(users, "Red"));
 console.log()

 //filter our users based on whose favorite animal is a jaguar,
function filter(collection, attribute, value) {
  for (const user of collection) {
    if (user[attribute] === value) {
      console.log(user.firstName);
    }
  }
}

filter(users, "favoriteAnimal", "Jaguar");

//filter by two attributes
function filter(collection, attribute1, value1, attribute2, value2) {
  for (const user of collection) {
    if (user[attribute1] === value1 && user[attribute2] === value2) {
      console.log(user.firstName);
    }
  }
}

filter(users, "favoriteAnimal", "Jaguar", "favoriteColor", "Blue");
console.log()

//extract the comparison logic into a separate function:
function filter(collection) {
  for(const user of collection) {
    if (likesElephants(user)){
      console.log(user.firstName);
    }
  }
}
function likesElephants(user){
  return user["favoriteAnimal"] === "Elephant";
}
filter(users)
console.log()
//NB:filter() doesn't remotely care what happens inside likesElephants(); it simply delegates the comparison and then trusts that likesElephants() correctly returns true or false

//use a callback function
function (collection, cb) {
  for (const user of collection) {
    if (cb(users)) {
      console.log(user.firstName);
    }
  }
}

filter (users, function (user)) {
  return user.favoriteColor === "Blue" && user.favoriteColor === "Penguin";
}

filter (users, function (user)) {
  return user.filter === "Yellow";
}
console.log()
//NB:Our filter() function doesn't know or care about any of the comparison logic encapsulated in the callback function. All it does is take in a collection and a callback and console.log() out the firstName of every user object that makes the callback return true. And because we've extracted the logic into a separate function, our filter now works regardless of how many conditions we want to filter on

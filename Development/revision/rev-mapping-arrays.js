//Mapping Arrays
//.map(), transforms every element in an array to another value
//[1,2,3].map(function (num) {
   // return num*num
//});
//Callback city
[1,2,3].map(function (num) {
    console.log(num*num);
});
console.log();
//Returning a brand new collection
const originalNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = originalNumbers.map(function (num) {
  return num * num;
});
console.log(squaredNumbers);
console.log();
//Using map() on Flatbook's Expanding Engineering Team
const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = oldAccounts.map(function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });
  console.log(oldAccounts);
  console.log(newEngineers);
  console.log();
  //Notice that we're using Object.assign() to create a new object with updated values instead of mutating the original object's accessLevel property. Nondestructive updating is an important concept to practice — destructively modifying objects at multiple points within a code base is one of the biggest sources of bugs.
  //a simple array of the new engineers' userIDs 
  const userIDs = newEngineers.map(function (eng) {
    return eng.userID;
  });
  console.log(userIDs);
  console.log();

  //update our engineer objects to indicate that all the new engineers have been provided a new work laptop. This time, though, let's use JavaScript's built-in Array.prototype.map() method:
  const  equippedEnginners = newEngineers.map(function (eng) {
    return Object.assign({}, eng, {Equippment: "Laptop"});
  });
  console.log(equippedEnginners);
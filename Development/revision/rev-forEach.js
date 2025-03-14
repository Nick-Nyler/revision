//forEach: The Iterator of No Return
//Use forEach to Work with an Array
oppressedWorkers = [
    "Dopey",
    "Sneezy",
    "Happy",
    "Angry",
    "Doc",
    "Lemonjello",
    "Sleepy",
  ];
  oppressedWorkers.forEach(function (oppressedWorker) {
    console.log(`${oppressedWorker} wants to form a union!`);
  });
  console.log();
  //Explain Why forEach is the Least Expressive Iterator Method
  function sumArray(numberArray) {
    let total = 0;
    numberArray.forEach(function (i) {
        total = total + i;
    });
    return total;
  }
  console.log(sumArray([1, 2, 3]));// it works, but it doesn't communicate. We should always strive to have code that works and communicates.
console.log();

  //The other time we want to use forEach is if we need to directly change (or "mutate") the elements we're iterating through.
  function addFullNameToEmployees(empCollection) {
    empCollection.forEach(function (e) {
      e.fullName = `${e.firstName} ${e.familyName}`;
    });
  }
  
  addFullNameToEmployees([
    { firstName: "Byron", familyName: "Karbitii" },
    { firstName: "Luca", familyName: "Tuexedensis" },
  ]);
const findTheOldest = function(people) {
  // Variables will update with respect to results from each round of the loop
  oldestAge = 0;
  oldest = ""
  currentYear= 2023;

  for (let item in people) {
    // Assigns each person in the array to a variable
    person=people[item];
    

    // This block adds the current year if person is still alive
    if (person["yearOfDeath"]==undefined){
      person["yearOfDeath"] = currentYear;
    }

    // This line calculates the age and adds it as a property to each person
    person["age"] = person["yearOfDeath"] - person["yearOfBirth"];

    // If the person has the new max age, updates are made to the new highest age and person
    if (person["age"] > oldestAge) {
      oldestAge = person["age"];
      oldest = person["name"];
    }
  };
  return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;

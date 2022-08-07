const findTheOldest = function(array) {
    let newArray = array.sort((a,b) => {
      if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
        return -1;
      } else {
        return 1;
      }
    })
    return newArray[0].name;
  };

// Do not edit below this line
module.exports = findTheOldest;

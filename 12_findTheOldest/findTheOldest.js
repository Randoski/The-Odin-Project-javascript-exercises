// TODO: Second test is not passing

const findTheOldest = function(people) {
   people.forEach(person => {
        person.age = person.yearOfDeath - person.yearOfBirth;
    })
    
    return people.reduce((oldest, person) => {
        return person.age > oldest.age ? person : oldest;
    })
}


// Do not edit below this line
module.exports = findTheOldest;




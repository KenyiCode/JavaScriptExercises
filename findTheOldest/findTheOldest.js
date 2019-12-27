let findTheOldest = function(people) { 
    let highest = 0;
    let highestIndex = 0;

    for (let i = 0; i < people.length; i++){
        let today = new Date();

        if (!people[i].yearOfDeath){
            people[i].yearOfDeath = today.getFullYear();
        }

        if ((people[i].yearOfDeath - people[i].yearOfBirth) > highest){
            highest = people[i].yearOfDeath - people[i].yearOfBirth;
            highestIndex = i;
        }
    }

    return people[highestIndex];
}

module.exports = findTheOldest

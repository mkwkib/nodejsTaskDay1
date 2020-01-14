var people = [
    { name: "Steve", friend: true },
    { name: "Dan", friend: false },
    { name: "Bart", friend: true },
    { name: "Sarah", friend: false },
    { name: "Michelle", friend: false },
    { name: "Holly", friend: true }
]
var isFriend =  people.filter(function(people) {
    return people.friend == true;
})
console.log(isFriend)
Exercise 1
var str = "cat. 896. ?=+. abc1";
var matches = str.match(/...\./g); //3 characters in a row. Anything.
console.log(matches);


var place = { name:'ponce city market', address: '675 Ponce De Leon Ave NE', city: 'Atlanta', state: 'Georgia', coords: { lat: 33.772264, long: -84.366190}};
db.places.insert(place);

let characters = [
    {name: "barney", age: 36},
    {name: "fred", age: 40},
    {name: "kevin", age: 23},
    {name: "mark", age: 34}
]

function pluck(arr, propertyName) {
    return arr.map(obj => obj[propertyName]);
  }
  

console.log(pluck(characters, 'name'));





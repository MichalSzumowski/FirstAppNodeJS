const os = require('os');
const fs = require('fs');

// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('User:', os.userInfo());

const genders = ['Male', 'Female'];
const maleNames = ['Adam', 'Michał', 'Robert', 'Paweł', 'Piotr'];
const femaleNames = ['Ewa', 'Ania', 'Asia', 'Ola', 'Karolina'];
const lastNames = ['Kowalski', 'Nowak', 'Szumowski', 'Burzyński', 'Gross'];
const people = [];

function randChoice(arr){
  return Math.floor(Math.random() * arr.length);
}



for (let i = 0; i < 20; i++){
  let randomName = '';
  let newPerson = {};
  const newGender = genders[randChoice(genders)];

  if (newGender === 'Male') {
    randomName = maleNames[randChoice(maleNames)]; 
  } else {
    randomName = femaleNames[randChoice(femaleNames)];
  }

  let randomSurname = lastNames[randChoice(lastNames)];

  function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  newObj = {
    gender: newGender,
    firstName: randomName,
    lastName: randomSurname,
    age: getRandomInt(18, 78),
    phone: getRandomInt(700000000,999999999),
    email: randomName + '.' + randomSurname + '@gmail.com'
  }
  people.push(newObj);
}

console.log(people);
  
let jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
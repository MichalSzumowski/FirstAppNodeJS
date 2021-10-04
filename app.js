const os = require('os');
const fs = require('fs');

const genders = ['Male', 'Female'];
const maleNames = ['Adam', 'Michał', 'Robert', 'Paweł', 'Piotr'];
const femaleNames = ['Ewa', 'Ania', 'Asia', 'Ola', 'Karolina'];
const lastNames = ['Kowalski', 'Nowak', 'Szumowski', 'Burzyński', 'Gross'];
const people = [];

function randChoice(arr){
  return Math.floor(Math.random() * arr.length);
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 20; i++){
  let randomName = '';
  const newGender = genders[randChoice(genders)];

  if (newGender === 'Male') {
    randomName = maleNames[randChoice(maleNames)]; 
  } else {
    randomName = femaleNames[randChoice(femaleNames)];
  }

  const randomSurname = lastNames[randChoice(lastNames)];

  const newObj = {
    gender: newGender,
    firstName: randomName,
    lastName: randomSurname,
    age: getRandomInt(18, 78),
    phone: getRandomInt(700000000,999999999),
    email: `${randomName}.${randomSurname}@gmail.com`
  }

  people.push(newObj);
}

const jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

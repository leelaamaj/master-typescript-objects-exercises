interface Person {
  age: number;
}

function isPersonOldEnoughToDrink(person: Person): boolean {
 return person.age>=21;
}
export {};

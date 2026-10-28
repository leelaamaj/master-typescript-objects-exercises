interface Person {
  age: number;
}

function isPersonOldEnoughToDrive(person: Person): boolean {
 return person.age>=16;
}
export {};

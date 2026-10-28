interface Person {
  age: number;
}

function isPersonOldEnoughToVote(person: Person): boolean {
 return person.age>=18;
}
export {};

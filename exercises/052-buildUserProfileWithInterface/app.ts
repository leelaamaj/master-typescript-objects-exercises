interface UserProfile {
  name: string;
  age: number;
  isAdult: boolean;
}

function buildUserProfile(name: string, age: number): UserProfile {
 return {name,age,isAdult:age>=18};
}
export {};

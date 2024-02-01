// let data: string | number = 42 // could be string or number this is type of assignmement 

// data = "42"

// console.log(data)

export interface Duck {
    name: string;
    age: number;
    makeSound: (sound: string) => void;

}

const duck1: Duck  = { 
    name: 'Donald', 
    age: 50,
    makeSound : (sound: string) => console.log(sound) 
}

const duck2: Duck  = { 
    name: 'Ronald', 
    age: 30,
    makeSound : (sound: string) => console.log(sound) 
}

export const ducks = [duck1, duck2]
import forShop from './interfaces/InterfaceForShop';

export default class Movie implements forShop {

    constructor(
        readonly id: number, 
        readonly name: string, 
        readonly price: number,
        readonly nameEng: string, 
        readonly year: number, 
        readonly country: string, 
        readonly tagline: string, 
        readonly genre: string, 
        readonly time: string) 
    {}
}

const test2 = new Movie(123, 'Be be be и друзья', 2000, 'some', 2002, 'Russia', 'be or not be', 'string', '1:32');

console.log(test2)
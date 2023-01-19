import forShop from './interfaces/InterfaceForShop';

export default class Book implements forShop {
    constructor(
      readonly id: number,
      readonly name: string,
      readonly author: string,
      readonly price: number,
      readonly pages: number,
    ) { }
  }

  const test = new Book(222, 'Leo', 'Leo LEo', 200, 356);
  console.log(test)
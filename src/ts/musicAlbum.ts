import forShop from './interfaces/InterfaceForShop';

export default class MusicAlbum implements forShop {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
    ) { }
}

const test = new MusicAlbum(2223, 'Skrillex', 'Skrillex', 200000000);
console.log(test)
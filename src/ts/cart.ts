import Book from './book';
import Movie from './movie';
import MusicAlbum from './musicAlbum';
import forShop from './interfaces/InterfaceForShop'

export default class Cart {
    private _items: forShop[] = [];

    add(item: forShop): void {
        this._items.push(item);
    }
    
    get items(): forShop[] {
        return [...this._items];
    }
    
    sumWithoutDiscount(): number {
        return this._items.reduce(
            (item, currentItem) => item + currentItem.price,
                0,
            );
    }

    sumWithDiscount(discount: number): number {
        return this.sumWithoutDiscount() * (1 - discount / 100);
    }

    deleteItem(id: number): void {
        const idIndex = this._items.findIndex((item) => item.id === id);
        if (idIndex >= 0) {
            this._items.splice(idIndex, 1);
        }
    }
}
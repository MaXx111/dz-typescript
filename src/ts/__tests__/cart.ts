import Book from '../book';
import Movie from '../movie';
import MusicAlbum from '../musicAlbum';
import Cart from '../cart';
import forShop from '../interfaces/InterfaceForShop';

test('Should get right length of items', () => {
    const book = new Book(222, 'Leo', 'Leo LEo', 200, 356);
    const movie = new Movie(123, 'Be be be и друзья', 2000, 'some', 2002, 'Russia', 'be or not be', 'string', '1:32');
    const musicAlbum = new MusicAlbum(2223, 'Skrillex', 'Skrillex', 200000000);

    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);

    const result = cart.items;

    expect(result.length).toEqual(3);
});

test('Should delete one of the items', () => {
    const book = new Book(222, 'Leo', 'Leo LEo', 200, 356);
    const movie = new Movie(123, 'Be be be и друзья', 2000, 'some', 2002, 'Russia', 'be or not be', 'string', '1:32');
    const musicAlbum = new MusicAlbum(2223, 'Skrillex', 'Skrillex', 200000000);

    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    
    cart.deleteItem(222)

    const result = cart.items;

    expect(result.length).toEqual(2);
});

test('Should get right sum without discount', () => {
    const book = new Book(222, 'Leo', 'Leo LEo', 200, 356);
    const movie = new Movie(123, 'Be be be и друзья', 2000, 'some', 2002, 'Russia', 'be or not be', 'string', '1:32');
    const musicAlbum = new MusicAlbum(2223, 'Skrillex', 'Skrillex', 2000);

    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);

    const result = cart.sumWithoutDiscount();

    expect(result).toEqual(4200);
});

test('Should get right sum with discount', () => {
    const book = new Book(222, 'Leo', 'Leo LEo', 200, 356);
    const movie = new Movie(123, 'Be be be и друзья', 2000, 'some', 2002, 'Russia', 'be or not be', 'string', '1:32');
    const musicAlbum = new MusicAlbum(2223, 'Skrillex', 'Skrillex', 2000);

    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);

    const result = cart.sumWithDiscount(2);

    expect(result).toEqual(4116);
});
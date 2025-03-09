import { getItems, setItem, pageSize, getTotalItemsLength } from "./items.service";
import data from './data.json';

//I'd usually mock data for the tests, but since we're using a json for data, I'll reuse it
describe('getItems', () => {
    it('should retrieve the first page of results if no arguments are provided', async () => {
        const results = await getItems();
        expect(results).toEqual(data.slice(0, pageSize));
    });

    it('should filter items based on a given search term', async () => {
        const results = await getItems({ searchTerm: 'Level up' });
        expect(results).toEqual([{
            "title": "Level up",
            "description": "Level up",
            "imagePath": "https://images.unsplash.com/photo-1568659358810-bdbdb4decb5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmVvbnxlbnwwfHwwfA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        }]);
    });

    it('should handle empty search term', async () => {
        const results = await getItems({ searchTerm: '' });
        expect(results).toEqual(data.slice(0, pageSize));
    });

    it('should paginate results', async () => {
        const page = 3;
        const results = await getItems({ page });
        expect(results).toEqual(data.slice(page * pageSize, page * pageSize + pageSize));
    });

    it('should paginate filtered results', async () => {
        const page = 2;
        const results = await getItems({ page, searchTerm: 'g' });
        console.log(results)
        expect(results).toEqual([
            {
              "title": "Avengers",
              "description": "Avengers",
              "imagePath": "https://images.unsplash.com/photo-1560932684-5e552e2894e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxuZW9ufGVufDB8fDB8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            }
        ]);
    });
});

describe('setItem', () => {
    it('should add a new item', async () => {
        const newItem = { title: 'Whip it', description: 'Whipers', imagePath: 'whipit.jpg' };
        const result = await setItem(newItem);
        expect(result).toBe(true);
        expect(data[0]).toEqual(newItem);
    });

    it('should not add an item with a duplicate imagePath', async () => {
        const item = { title: 'Juan', description: 'Domingo', imagePath: 'Peron.jpg' };
        const duplicateItem = { title: 'John', description: 'Peppers', imagePath: 'Peron.jpg' };
        const result = await setItem(item);
        const duplicateResult = await setItem(duplicateItem);
        expect(result).toBe(true);
        expect(duplicateResult).toBe(false);
        expect(data[0].imagePath).toEqual(item.imagePath);
    });
});

describe('getTotalItemsLength', () => {
    it('should return the total length of filtered data', async () => {
        await getItems({ searchTerm: 'Level up' });
        const result = await getTotalItemsLength();
        expect(result).toBe(1);
    });

    it('should return the total length of unfiltered data', async () => {
        await getItems();
        const result = await getTotalItemsLength();
        expect(result).toBe(data.length);
    });
});
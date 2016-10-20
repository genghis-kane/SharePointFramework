import NewsArticleItem from '../models/NewsArticleItem'

export default class MockHttpClient {
    private static _items: NewsArticleItem[] = [
        { title: 'Kitten 1', date: '04/10/2016', introduction: 'This kitten came first.', imageSrc: 'https://placekitten.com/g/400/200' },
        { title: 'Kitten 2', date: '12/10/2016', introduction: 'This kitten came second.', imageSrc: 'https://placekitten.com/g/300/300' },
        { title: 'Kitten 3', date: '02/10/2016', introduction: 'This kitten came third.', imageSrc: 'https://placekitten.com/g/400/250' }
    ];

    public static get(restUrl: string, options?: any): Promise<NewsArticleItem[]> {
        return new Promise<NewsArticleItem[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }

    public static getSynch(restUrl: string, options?: any): NewsArticleItem[] {
        return (MockHttpClient._items);
    }
}
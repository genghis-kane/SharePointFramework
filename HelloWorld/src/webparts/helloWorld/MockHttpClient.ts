import { ISPList } from './HelloWorldWebPart';

export default class MockHttpClient {
    private static _items: ISPList[] = [{Title: 'Puppies', Id: '1'}, {Title: 'Kittens', Id: '2'}, {Title: 'Chinchillas', Id: '1'}];

    public static get(restUrl: string, options?: any): Promise<ISPList[]> {
        return new Promise<ISPList[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
}
// tslint:disable-next-line: no-empty-interface
export interface Book {
    accessInfo: {};
    etag: string;
    id: string;
    kind: string;
    // tslint:disable-next-line: ban-types
    saleInfo: Object;
    // tslint:disable-next-line: ban-types
    searchInfo: {'textSnippet': string};
    selfLink: string;
    // tslint:disable-next-line: ban-types
    volumeInfo: {
        'title': string,
        'authors': string[],
        'imageLinks': {
          'smallThumbnail': string,
          'thumbnail': string,
          'publisher': string,
          'pageCount': number,
          'categories': string[],
          'publishedDate': string,
        }
    };
}



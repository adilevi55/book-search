import { Book } from './book.interface';

// tslint:disable-next-line: class-name
export interface responseHttpSearchBook {
     'items': Book[] ;
      'kind': string;
       'totalItmes': number;
}

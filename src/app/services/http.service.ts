import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseHttpSearchBook } from '../interfaces/response.interface';
@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}
    bookSearch( search: string, page: string): Observable<responseHttpSearchBook> {
        let params = new HttpParams();
        params = params.append('q' , search);
        params = params.append('startIndex' , page);
        params = params.append('maxResults' , '20');

        return this.http.get<responseHttpSearchBook>
        ('https://www.googleapis.com/books/v1/volumes?', { params })
        ;
    }
}

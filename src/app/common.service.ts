import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data: any;

  constructor(
    private http: HttpClient

  ) { }

  baseURL = `https://projectapi.gerasim.in/`;
  getEmpData(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?_page=2&_limit=10
`)
      .pipe(
        retry(1),
        map((response: any) => {
          return response.data;
        }),
        // catchError((error:any) => {
        //   console.log(error);
        //   const message = error.error.message
        //     ? error.error.message
        //     : 'Something went wrong.';
        // })
      )
  }

  getData() {
    return this.http.get<any[]>('assets/dummy-data.json')
  }

}

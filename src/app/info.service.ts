import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  startLoading$ = new BehaviorSubject<any>(undefined);
  selectedUser: any;
  category: any;
  apiURL = 'https://api.giphy.com/v1/gifs/';
  constructor(
    private http: HttpClient
  ) { }

  getImgData(searchData: string, limit: number, ) {
    return this.http.get<any>((this.apiURL + 'search?q=' + searchData + '&limit=' + limit + '&api_key=' + environment.apiKey ))
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error;
    }
    return throwError(errorMessage);
  }
}

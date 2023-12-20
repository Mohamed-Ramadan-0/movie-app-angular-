import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private _httpClient: HttpClient) { }

  getTrending(type:string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/movie/day?api_key&page=1`)
  }

  getDetails(id: string, type: string = "movie"): Observable<any> {
    console.log(type);

    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key&language=en-US`)
  }

  getTvPopular(pageCount:number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key&page=${pageCount}`)
  }

  searchOnTV(term: string,page:number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/search/movie?api_key&language=en-US&page=${page}&query=${term}&include_adult=false`)
  }
  
}

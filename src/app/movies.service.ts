import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _httpClient: HttpClient) { }


  getTrending(type:string): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key&page=2`)
  }

  getDetails(id: string, type: string = "tv"): Observable<any> {
    console.log(type);

    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key&language=en-US`)
  }

  getTvPopular(pageCount:number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/popular?api_key&page=${pageCount}`)
  }

  searchOnTV(term: string,page:number): Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/search/tv?api_key&language=en-US&page=${page}&query=${term}&include_adult=false`)
  }
}

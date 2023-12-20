import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pages:number[] =[]
  movieData: any = [];
  term: string = "";
  pageCount:number = 1

  constructor(private _moviesServe: TvService , private _router:Router) {
    this.pages = new Array(10).fill("nour").map((ele, index) =>  index + 1)
  }



  getMovies(page: number) {
    this.pageCount = page;
    if (this.term) {
      this.search()
    } else {
      this._moviesServe.getTvPopular(this.pageCount).subscribe({
        next: (res :any) => {
          this.movieData = res.results

        }
      })
    }

  }

  ngOnInit(): void {
    this.getMovies(1)
  }


  search() {
    if (this.term) {
      this._moviesServe.searchOnTV(this.term, this.pageCount).subscribe({
        next: (res :any) => {
          this.movieData = res.results

        }
      })
    } else {
      this.getMovies(1)
    }

  }

}

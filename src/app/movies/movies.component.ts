import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  pages:number[] =[]
  movieData: any = [];
  term: string = "";
  pageCount:number = 1

  constructor(private _moviesServe: TvService) {
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
          console.log( this.movieData)

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

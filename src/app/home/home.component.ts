import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allMovies: any = []
  allTV: any = []

  constructor(private _movies:MoviesService) { }

  ngOnInit(): void {


    this._movies.getTrending("movie").subscribe({
      next: (data: any) => {
        this.allMovies = data.results.splice(0,7)

      }
    })

        this._movies.getTrending("tv").subscribe({
      next: (data: any) => {
            this.allTV = data.results.splice(0,7)

      }
    })
  }

}

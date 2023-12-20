import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  pages:number[] =[]
  tvData: any = [];
  term: string = "";
  pageCount:number = 1
  constructor(private _movieServe: MoviesService) {
    this.pages = new Array(10).fill("nour").map((ele, index) =>  index + 1)
  }



  getTV(page: number) {
    this.pageCount = page;
    if (this.term) {
      this.search()
    } else {
      this._movieServe.getTvPopular(this.pageCount).subscribe({
        next: (res) => {
          this.tvData = res.results

        }
      })
    }

  }

  ngOnInit(): void {
    this.getTV(1)
  }


  search() {
    if (this.term) {
      this._movieServe.searchOnTV(this.term, this.pageCount).subscribe({
        next: (res) => {
          this.tvData = res.results

        }
      })
    } else {
      this.getTV(1)
    }

  }

}

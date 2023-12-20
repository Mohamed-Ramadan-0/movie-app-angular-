import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  details:any = null

  constructor(private _activatedRoute: ActivatedRoute, private _moviesService:MoviesService) {
    let {id,type} = this._activatedRoute.snapshot.params;
    console.log(id, type);

    this.getDetails(id,type)

   }

  getDetails(id:string,type:string) {
    this._moviesService.getDetails(id, type).subscribe({
      next: (res) => {
        this.details = res;
        console.log(this.details);

      }
    })
  }

  ngOnInit(): void {
  }

}

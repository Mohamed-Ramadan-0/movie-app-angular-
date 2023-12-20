import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  pages:number[] =[]
  movieData: any = [];
  term: string = "";
  pageCount:number = 1

  isLogin:boolean = false
  constructor(private _auth: AuthService ,private _movies:MoviesService , private _router:Router) {
    this._auth.userData.subscribe({
      next: () => {
        if (this._auth.userData.getValue()) {
          this.isLogin= true
        } else {
          this.isLogin = false
        }



      }
    })
   }

  ngOnInit(): void {
  }


  logOut() {
    this._auth.logOut()
  }

  search() {
    if (this.term) {
      this._router.navigate(['/search'])
      this._movies.searchOnTV(this.term, this.pageCount).subscribe({
        next: (res :any) => {
          this.movieData = res.results

        }
      })
    } 

  }
}

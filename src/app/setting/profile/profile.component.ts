import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _auth:AuthService) { }
  isEdit:boolean = false
  NewName :string = ""

  name:string = this._auth.userData.getValue().name


  ngOnInit(): void {
    console.log(this.NewName);


  }

  getNameEdit(){
    if(this.isEdit){
      this.isEdit = false

    }
    else{
      this.isEdit = true


    }
  }

  getNewName(){

    if(this.isEdit){

      this.isEdit = false

    }
    else{
      this.isEdit = true


    }

  }

}

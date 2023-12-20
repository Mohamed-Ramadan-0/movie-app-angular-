import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() info:any
  constructor() { }

  ngOnInit(): void {
    // this.info.overview = this.info.overview.split(" ").splice(0, 10).join(" ")
    this.info.media_type = this.info.media_type ? this.info.media_type : "tv"

  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../data.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  bookid: number;


  constructor(private route: ActivatedRoute, private _data: DataService) {
    this.route.params.subscribe(res => this.bookid = res.id);
  }

  ngOnInit() {
    //this._data.book.subscribe(res => this.books = res);
  }

}

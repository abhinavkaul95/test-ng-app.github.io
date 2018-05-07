import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('books', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
  wishlist: string = 'My wishlist';
  bookname: string;
  books = []

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.book.subscribe(res => this.books = res);
    this.itemCount = this.books.length;
    this._data.changeBook(this.books);
  }

  addItem() {
    this.books.push(this.bookname);
    this.itemCount = this.books.length;
    this._data.changeBook(this.books);
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private books = new BehaviorSubject<any>(['Book 1', 'Book 2']);
  book = this.books.asObservable();
  constructor() { }
  changeBook(book) {
    this.books.next(book);
  }
}

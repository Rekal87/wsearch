import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface Page {
  title: string;
  wordcount: number;
  snippet: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((pages) => {
      pages = pages;
    });
  }
}

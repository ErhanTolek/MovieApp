import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  template: `
    <h1>AUTHORS</h1>
    <ul>
      <li *ngFor="let author of authors">
        {{author}}
      </li>
    </ul>
  `,
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(authors: AuthorsService) { 
    this.authors = authors.getAuthors();
  }

  ngOnInit(): void {
  }

}

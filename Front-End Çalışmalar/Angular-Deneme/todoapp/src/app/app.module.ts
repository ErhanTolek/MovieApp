import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';

import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService, AuthorsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

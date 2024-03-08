import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  authorName: string = ""
  displayedName: string = ""
  submittedNames: string[] = [];

  submit() {
    this.submittedNames.push(this.authorName)
    this.authorName = ""
  }

  clear() {
    this.submittedNames = []
  } 

}

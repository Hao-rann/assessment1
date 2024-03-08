import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessment1-app';
  authordata: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.retrieveData().subscribe(response=>{
      this.authordata = response
    })
  }
}

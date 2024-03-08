import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent implements OnInit {
  authordata: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.retrieveData().subscribe(response =>{
      this.authordata = response
    })
  }
}

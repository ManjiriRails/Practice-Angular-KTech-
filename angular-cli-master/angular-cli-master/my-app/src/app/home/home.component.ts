import { Component, OnInit, } from '@angular/core';
import { SigninComponent } from '.././signin/signin.component';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(user => this.user = user);
  }

  recieveUser($userEvent){
    this.user=$userEvent;
  }
}

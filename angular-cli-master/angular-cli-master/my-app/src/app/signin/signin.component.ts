import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '.././data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user:string;
  password:string;
  warning:string = null;

  constructor(private data: DataService, private router:Router) { }

  ngOnInit() {
     this.data.currentMessage.subscribe(user => this.user = user)
  }

  onSubmit(){
    this.user = (document.getElementById("username") as HTMLInputElement).value;
    this.password = (document.getElementById("pwd") as HTMLInputElement).value;

    if(this.user==="admin" && this.password==="admin"){
      
     this.data.displayHomeWithUser(this.user);
     this.router.navigate(['/home']);
    }

    else{
      this.data.displayHomeWithUser("User is non-admin!!");
      this.router.navigate(['/home']);
    }

    console.log("Name entered");
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService{

    private messageSource = new BehaviorSubject('default user');
    currentMessage = this.messageSource.asObservable();

    constructor(){ }

    displayHomeWithUser(username : string){
        this.messageSource.next(username);
    }
}
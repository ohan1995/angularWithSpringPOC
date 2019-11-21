import {HttpClient} from '@angular/common/http';
import {UserRegisterData} from '../model/userregister.model';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UserRegisterService {

    constructor(private httpserv:HttpClient){}

    userRegister(user:UserRegisterData) {
        console.log(user)
        return this.httpserv.post("http://localhost:8080/user/save",user);
    }
}
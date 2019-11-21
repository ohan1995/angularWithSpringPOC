import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {UserLoginData} from '../model/userlogin.model'

@Injectable({
    providedIn:'root'
})

export class LoginService {

    constructor(private httpser:HttpClient){}

    getUser(user:UserLoginData) {
        return this.httpser.post("http://localhost:8080/user/checkLogin",user)
    }
}
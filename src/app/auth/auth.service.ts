import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(private router: Router, private userService: UserService) { }

    token: string;

    loginUser(username: string, password: string) {
        // Save the authenticated user to local storage
        const authUser = this.userService.getUserByUsername(username);
        localStorage.setItem('authUser', JSON.stringify(authUser));

        // Save dummy authentication token
        this.token = this.genAuthToken(932);
        localStorage.setItem('authToken', this.token);
        
        this.router.navigate(['profile']);
    } 

    logoutUser() { 
        localStorage.removeItem('authUser');
        localStorage.removeItem('authToken');
        this.router.navigate(['login']);
    }

    // Generate dummy authentication token
    genAuthToken(length: number) {
        let genToken         = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            genToken += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return genToken;
    }

    isAuthenticated() {
        return localStorage.getItem('authToken') != null;
    }

}
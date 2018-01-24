import { userInfo } from 'os';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    user: any = {
        name: 'Test user',
        isAdmin: false
    };

    loginAsUser() {
        this.user.isAdmin = false;
        this.user.name = 'User';
        return this.user;
    }

    loginAsAdmin() {
        this.user.isAdmin = true;
        this.user.name = 'Admin';
        return this.user;
    }
}

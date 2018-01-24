import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-user-info',
    template: `
        <div class="user-info" *ngIf="user">
            {{user?.name}}
            <button (click)="logout()">Logout</button>
        </div>
        <div class="user-info" *ngIf="!user">
            <button (click)="loginAsAdmin()">Admin</button>
            <button (click)="loginAsUser()">User</button>
        </div>
    `,
})
export class UserInfoComponent  {
    user: any;

    constructor(private userService: UserService) {
    }

    loginAsAdmin() {
        this.user = this.userService.loginAsAdmin();
    }

    loginAsUser() {
        this.user = this.userService.loginAsUser();
    }

    logout() {
        this.user = null;
    }
}

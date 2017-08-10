import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-user-info',
    template: `
        <div class="user-info">
            {{user.name}}
        </div>
    `,
})
export class UserInfoComponent  {
    user: any;

    constructor(private userService: UserService) {
        this.user = userService.user;
    }
}

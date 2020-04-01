/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
// DEPENDENCIES
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// BASE SERVICE
import { UserBaseService } from './base/user.base.service';


// start documentation
/**
 * Custom APIs
 *
 * Service.changePassword
 *	@description Change password of user from admin
 *	@returns object
 *
 */
// end documentation

/**
 * YOU CAN OVERRIDE HERE UserBaseService
 */
@Injectable()
export class UserService extends UserBaseService {

    // CONSTRUCTOR
    constructor(
        http: HttpClient,
    ) {
        super(http);
    }

    /*
    Name: changePassword
    Description: Change password of user from admin
    Params:
        id: id of user
        passwordNew: new password in SHA-3
        passwordAdmin: admin password in SHA-3
    */
    changePassword(id: String, passwordNew: string, passwordAdmin: string): Observable<void> {
        return this.http
            .post<void>(this.contextUrl + '/' + id + '/changePassword', {
                passwordNew: passwordNew,
                passwordAdmin: passwordAdmin
            })
            .pipe(
                map(response => response)
            );
    }
}

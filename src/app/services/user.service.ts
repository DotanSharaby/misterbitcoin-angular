import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {
    constructor() { }

    getLoggedinUser(): Observable<User> {
        const user: User = JSON.parse(localStorage.getItem("loggedinUser"))
        return of(user);
    }

    addTransfer(user, contact, amount) {
        const transfer = this._newTransfer(amount, contact._id, contact.name)
        user.coins -= amount;
        user.moves.unshift(transfer);
        this.updateUser(user);
    }

    signup(name) {
        var user = JSON.parse(localStorage.getItem(name));
        if (!user) {
            user = this._newUser(name);
            localStorage.setItem(user.name, JSON.stringify(user));
        }
        localStorage.setItem("loggedinUser", JSON.stringify(user));
        return Promise.resolve(user)
    }

    updateUser(user){
        localStorage.setItem(user.name, JSON.stringify(user));
        localStorage.setItem("loggedinUser", JSON.stringify(user));
    }

    _newTransfer(amount, toId, to) {
        return {
            amount,
            toId,
            to,
            at: Date.now()
        }
    }

    _newUser(name) {
        return {
            name,
            coins: 100,
            moves: []
        }
    }

}

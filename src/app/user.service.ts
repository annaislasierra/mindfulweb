import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData = {
    name: 'Pepito Pérez',
    email: 'pepito@example.com',
    profilePicture: 'assets/pepito.jpg'
  };
  constructor() { }
  getUserData() {
    return this.userData;
  }
}

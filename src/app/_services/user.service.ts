import { Subject } from 'rxjs';
import { User } from '../_model/user.model';

export class UserService {

    constructor() { }

    usersChanged = new Subject<User[]>();

    private users: User[] = [
      new User(0, 'jennigritters', 'password', 'Jenni Gritters', 'www.jennigritters.com', 'Web Developer/Designer',
                '+639182132918', 'Female', '../../assets/images/users/user.jpeg'),
      new User(1, 'sammy', 'sampass', 'Sammy Sarmiento', 'www.sammysarmiento.com', 'Film Director',
                '+639182132918', 'Female', '../../assets/images/users/user.jpeg')
    ];

    getUser(index: number) {
      return this.users[index];
    }

    getAllUsersExceptAuth(id: number) {
      let filteredUsers = [];
      for (let user of this.users) {
        if (user.id !== id) {
          filteredUsers.push(user.username);
        }
      }
      return filteredUsers;
    }

    getUserByUsername(index: string) {
      for (let user of this.users) {
        if (user.username === index) {
          return user;
        }
      }
    }

    // get all usernames
    getUsernames() {
      return this.users.map(x => x.username);
    }

    // get last user object in array and get it's id
    getUserLastId() {
      return this.users[this.users.length-1].id;
    }

    getLastUser() {
      return this.users[this.users.length-1];
    }

    addUser(user: User) {
      this.users.push(user);
      this.usersChanged.next(this.users.slice());
    }



}



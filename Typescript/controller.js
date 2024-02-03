//controller
console.log("Controller Online");
import "./services.js";
import { User, UsersArry } from "./services.js";
import "./view.js";
const arrayOfUsers = new UsersArry();
export class Controller {
    start() {
    }
    static checkDuplcates(arry) {
        const [userName, password, email, firstName, lastName] = arry;
        const user = new User(userName, password, email, firstName, lastName);
        return arrayOfUsers.isDuplcated(user);
    }
    static getUserFromSubmit(arry) {
        const [userName, password, email, firstName, lastName] = arry;
        const user = new User(userName, password, email, firstName, lastName);
        console.log("User object from controller", user);
        arrayOfUsers.addUser(user);
        arrayOfUsers.renderUsers();
        console.log(arrayOfUsers);
    }
}

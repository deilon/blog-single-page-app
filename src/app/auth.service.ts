export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 8000);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }


    logout() {
        this.loggedIn = false;
    }
}

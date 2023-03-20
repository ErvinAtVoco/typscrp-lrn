export class Kasutaja {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public firstname: string,
        public lastname: string

    ) {}

    get id() {
        return this.id;
    }
    get username() {
        return this.username;
    }
    set username(newUsername:string) {
        this.username = newUsername;
    }
    get password() {
        return this.password;
    }
    set password(newPassword:string) {
        this.password = newPassword;
    }
    get firstname() {
        return this.firstname;
    }
    set firstname(newFirstname:string) {
        this.firstname = newFirstname;
    }
    get lastname() {
        return this.lastname;
    }
    set lastname(newLastname:string) {
        this.lastname = newLastname;
    }
}
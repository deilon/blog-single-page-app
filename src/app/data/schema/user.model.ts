export class User {
    id: number;
    username: string;
    password: string;
    name: string;
    website: string;
    bio: string;
    phone: string;
    gender: string;
    photo: string;

    constructor(
        id: number,
        username: string,
        password: string,
        name: string,
        website: string,
        bio: string,
        phone: string,
        gender: string,
        photo: string,
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.website = website;
        this.bio = bio;
        this.phone = phone;
        this.gender = gender;
        this.photo = photo;
    }
}


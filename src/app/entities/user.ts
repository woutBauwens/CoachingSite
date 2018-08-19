export class User {
    public id: number;
    public name: string;
    public lastname: string;
    public gender: string;
    public weight: number;
    public date_preference: string;
    public email: string;
    public city: string;

    constructor(id: number, name: string, lastname: string, gender: string, weight: number, date_preference: string, email: string, city: string) {
        this.id=id;
        this.name=name;
        this.lastname=lastname;
        this.gender=gender;
        this.weight = weight;
        this.date_preference = date_preference;
        this.email = email;
        this.city = city;
    }
}

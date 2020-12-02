class user { //definerer model-klasse for User
    constructor(firstName, lastName, birthday, gender, aboutMe){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.aboutMe = aboutMe;
        this.interest = interest;
    }
}
//eksporter user
module.exports = {
    user: user}
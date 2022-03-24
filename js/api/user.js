/*
 * @prettier
 * 사용자
 */

export default class User {
  constructor(id, email, name, userType) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.userType = type;
  }

  get getId() {
    return this.id;
  }

  get getEmail() {
    return this.email;
  }

  get getName() {
    return this.name;
  }

  get getUserType() {
    return this.userType;
  }
}

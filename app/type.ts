export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export interface IUser extends IUserLogin {
    nom: string;
    prenom: string;
    isAdmin: string;
  }
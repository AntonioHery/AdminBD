export interface IUserLogin {
    email: string;
    password: string;
 }

  export interface IClient extends IUserLogin {
    nomClient: string;
    solde: number;
   
  }
  export interface IAdmin extends IUserLogin {
    adminId: number;
   
  }


    
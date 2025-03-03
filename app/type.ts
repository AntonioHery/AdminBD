export interface IUserLogin {
    numCompte: number;
    password: string;
    access_token?:string
 }

  export interface IClient {
    email: string;
    password: string;
    nomClient: string;
    solde: number;
   
  }
  export interface IAdmin extends IUserLogin {
    adminId: number;
   
  }
  export interface ILoginToken {
    access_token: string;
  }


    
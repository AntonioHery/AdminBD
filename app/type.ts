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
  
  export interface IRetrait {
    numRetrait: number;
    numCheque: string;
    montant: number;
    client?: Partial<IClient>;
  }
  

    
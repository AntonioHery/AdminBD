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
  export interface IAdminLogin {
     email:string,
     password: string
     access_token?:string
   
  }
  
  export interface IRetrait {
    numRetrait?: number;
    numCheque: string;
    montant: number;
    client?: Partial<IClient>;
  }

  export interface IToken{
    
      numCompte:number,
      nomClient:string,
      role:string
  

  }
  

    
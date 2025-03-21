"use client";
import { useState,useEffect } from "react";
import jwt from "jsonwebtoken";
//import { IToken } from "../type";
import FormRetrait from "./formRetrait";
import { IToken } from "../type";
import TableRetrait from "./tableRetrait";
import { Button, Flex, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import React from "react";

const UserPage = () => {
  //const token = localStorage.getItem("access_token");

  const router= useRouter()

 // const decodedToken = jwt.decode(token!) as IToken; // decoder le token
 const [decodedToken, setDecodedToken] = useState<IToken | null>(null);

 useEffect(() => {
   const token = localStorage.getItem("access_token");
   if (token) {
     const decoded = jwt.decode(token) as IToken;
     setDecodedToken(decoded);
   } else {
    router.push("auth/login"); ; // Rediriger si pas de token
   }
 }, [router]);

 if (!decodedToken) return null;

  const numCompteString = JSON.stringify(decodedToken.numCompte);
  const numCompte = parseInt(numCompteString); 
  const nomClient = JSON.stringify(decodedToken.nomClient);

  const handleLogout = () => {
    localStorage.removeItem("access_token"); 
    router.push("auth/login"); 
  };

  return (
    <div>
      <div className="flex justify-between mb-12">
        <Title order={3}>
          Bienvenue sur votre espace client {nomClient.trim().replace(/^"|"$/g, "")}
        </Title>
        <Button color="rgba(33, 7, 7, 1)" onClick={handleLogout}>Deconnexion</Button>
      </div>
      <Flex gap="xl" direction="row">
        <FormRetrait numCompte={numCompte} />
        <TableRetrait numCompte={numCompte} />
      </Flex>
    </div>
  );
};

export default UserPage;

"use client";

import {
  CustomPasswordInput,
  CustomTextInput
} from "@/app/components/customInput";
import { Button, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import useLoginClient from "@/app/hooks/auth/useLogin";
import { successToast } from "@/app/lib/toast";
import { primaryColor } from "@/app/constants/themeColor";

interface IFormInput {
  numCompte: number;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<IFormInput>({
    mode: "uncontrolled",
    initialValues: {
      numCompte: 0,
      password: "",
    },

    validate: {
      numCompte: (value) => (value >= 0 ? null : "Numero de compte invalide"),
      password: (value) => (value.length >= 8 ? null : "Mot de passe invalide"),
    },
  });

  const redirect = () => {
    router.push("/user");
  };

  const { mutate: login, isPending,data } = useLoginClient(redirect);

  const handleSubmit = (values: IFormInput) => {
    const formattedValues = {
      ...values,
      numCompte: Number(values.numCompte), // Conversion en number
    };

    console.log("Données soumises connexion :", formattedValues);
    console.log("Données :", data);


    const { numCompte, password } = formattedValues;
    login(
      { numCompte, password },
      {
        onSuccess() {     
          successToast("Connexion réussie");
          
        },
        onSettled() {},
        onError() {
          form.setErrors({
            email: "Email ou mot de passe incorrect",
            password: "Email ou mot de passe incorrect",
          });
        },
      }
    );
  };

  return (
    
      
      <form
        className="flex flex-col space-y-4 w-1/3 mx-auto mt-20 bg-white px-10 py-12 rounded-xl shadow-[0px_8px_24px_rgba(149,157,165,0.2)]"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <Text size="xl" fw={700} className="text-center mt-10">
        Connexion </Text>
        <CustomTextInput
                  type="number"
                  label="Numero de compte"
                  placeholder="0000"
                  {...form.getInputProps("numCompte")}
                />
        <CustomPasswordInput
          placeholder="johnDoe@gmail.com"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Button type="submit" color={primaryColor}  disabled={isPending} >Se connecter</Button>
        <Text size="sm" className="text-center">
          Vous n&apos;avez pas de compte ?
          <Text
            fs="italic"
            td="underline"
            ml={2}
            c="blue.4"
            component={Link}
            className="underline-offset-1"
            href={"/auth/signup"}
          >
            S&apos;inscrire
          </Text>
        </Text>
        <Text  c="blue.4" td="underline" className="underline-offset-1" component={Link} href={"/auth/loginAdmin"} fs="italic">Vers Admin</Text>
      </form>
  
  );
};

export default LoginPage;

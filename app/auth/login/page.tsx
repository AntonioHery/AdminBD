"use client";

import {
  CustomPasswordInput
} from "@/app/components/customInput";
import { Button, NumberInput, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import useLoginClient from "@/app/hooks/auth/useLogin";
import { successToast } from "@/app/lib/toast";

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
      numCompte: (value) => (value >= 0 ? null : "Solde invalide"),
      password: (value) => (value.length >= 8 ? null : "Mot de passe invalide"),
    },
  });

  const redirect = () => {
    router.push("/user");
  };

  const { mutate: login, isPending,data } = useLoginClient(redirect);

  const handleSubmit = (values: IFormInput) => {
    console.log("Données soumises connexion :", values);
    console.log("Données :", data);

    const { numCompte, password } = values;
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
    <div>
      <form
        className="flex flex-col space-y-4 w-1/3 mx-auto mt-20 bg-gray-200 p-4 rounded-lg"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <NumberInput
                  label="Numero de compte"
                  placeholder="Numero de compte"
                  {...form.getInputProps("numCompte")}
                />
        <CustomPasswordInput
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Button type="submit"  disabled={isPending} >Se connecter</Button>
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
    </div>
  );
};

export default LoginPage;

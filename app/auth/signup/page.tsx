"use client";
import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/app/components/customInput";
import useSignup from "@/app/hooks/useSignup";
import { Button, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import React from "react";

interface IFormInput {
  nomClient: string;
  solde: number;
  email: string;
  password: string;
}

const SignupPage = () => {
  const router = useRouter();

  const form = useForm<IFormInput>({
    mode: "uncontrolled",
    initialValues: {
      nomClient: "",
      email: "",
      password: "",
      solde: 0,
    },

    validate: {
      nomClient: (value) => (value.length > 1 ? null : "Nom trop court"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "email invalide"),
      password: (value) => (value.length >= 8 ? null : "Mot de passe invalide"),
      solde: (value) => (value >= 0 ? null : "Solde invalide"),
    },
  });
  const signupTriggered = () => {};
  const { mutate: signup, isPending } = useSignup(signupTriggered);

  const handleSubmit = (values: IFormInput) => {
    console.log("Données soumises :", values);
    const { nomClient, email, password, solde } = values;
    signup(
      { nomClient, email, password, solde },
      {
        onSuccess() {
          alert("Connexion réussie");
          router.push("/user");
        },
        onSettled() {},
        onError() {
          alert("Erreur lors de l'inscription");
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <CustomTextInput
          placeholder="Nom"
          label="Nom"
          {...form.getInputProps("nomClient")}
        />
        {/* <CustomTextInput placeholder="Solde" label="Solde" {...form.getInputProps("solde")} /> */}
        <NumberInput
          label="Solde"
          placeholder="Solde"
          {...form.getInputProps("solde")}
        />
        <CustomTextInput
          placeholder="Email"
          label="Email"
          {...form.getInputProps("email")}
        />
        <CustomPasswordInput
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Button disabled={isPending} type="submit">
          S&apos;inscrire
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;

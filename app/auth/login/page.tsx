"use client";

import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/app/components/customInput";
import { Button, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import useLoginClient from "@/app/hooks/useLogin";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<IFormInput>({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "email invalide"),
      password: (value) => (value.length >= 8 ? null : "Mot de passe invalide"),
    },
  });

  const redirect = () => {
    router.push("/user");
  };

  const { mutate: login, isPending } = useLoginClient(redirect);

  const handleSubmit = (values: IFormInput) => {
    const { email, password } = values;
    login(
      { email, password },
      {
        onSuccess() {
          console.log("Connexion réussie");
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
        <Button type="submit"  disabled={isPending} >Se connecter</Button>
        <Text size="sm" className="text-center">
          Vous n&apos;avez pas de compte ?
          <Text
            fs="italic"
            td="underline"
            ml={2}
            c="teal.4"
            component={Link}
            className="underline-offset-1"
            href={"/auth/signup"}
          >
            S&apos;inscrire
          </Text>
        </Text>
      </form>
    </div>
  );
};

export default LoginPage;

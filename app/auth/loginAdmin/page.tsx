"use client";

import {
  CustomPasswordInput,
  CustomTextInput,
} from "@/app/components/customInput";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import useLoginAdmin from "@/app/hooks/auth/useLoginAdmin";
import { Button, Text } from "@mantine/core";
import { primaryColor } from "@/app/constants/themeColor";

interface IFormInput {
  email: string;
  password: string;
}

const LoginAdminPage = () => {
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
    router.push("/admin");
  };

  const { mutate: loginAdmin, isPending, data } = useLoginAdmin(redirect);

  const handleSubmit = (values: IFormInput) => {
    console.log("Données soumises connexion :", values);
    console.log("Données :", data);

    const { email, password } = values;
    loginAdmin(
      { email, password },
      {
        onSuccess() {
          alert("Connexion réussie");
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
      <Text size="xl" fw={700} className="text-center ">
        Connexion{" "}
      </Text>
      <div className="flex flex-col space-y-4  pb-12">
        <CustomTextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <CustomPasswordInput
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
      </div>
      <Button type="submit" color={primaryColor} disabled={isPending}>
        Se connecter
      </Button>
    </form>
  );
};

export default LoginAdminPage;

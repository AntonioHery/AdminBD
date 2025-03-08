"use client";

import {
  CustomPasswordInput,
  CustomTextInput
} from "@/app/components/customInput";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import useLoginAdmin from "@/app/hooks/auth/useLoginAdmin";

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

  const {mutate:loginAdmin,isPending,data}=useLoginAdmin(redirect)

  
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
    <div>
      <form
        className="flex flex-col space-y-4 w-1/3 mx-auto mt-20 bg-gray-200 p-4 rounded-lg"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
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
        <Button type="submit"  disabled={isPending} >Se connecter</Button>
      </form>
    </div>
  );
};

export default LoginAdminPage;

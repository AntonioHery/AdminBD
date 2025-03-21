"use client";

import { Title, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import usePostRetrait from "../hooks/retrait/usePostRetrait";
import { CustomTextInput } from "../components/customInput";
import { useRouter } from "next/navigation";
import { successToast } from "../lib/toast";
import { primaryColor } from "../constants/themeColor";
//import { IClient } from '../type';

interface IFormInput {
  numCheque: string;
  montant: number;
}

interface IProps {
  numCompte: number;
}

const FormRetrait = ({ numCompte }: IProps) => {
  const router = useRouter();

  const form = useForm<IFormInput>({
    mode: "uncontrolled",
    initialValues: {
      montant: 0,
      numCheque: "",
    },
    validate: {
      montant: (value = 0) => (value >= 0 ? null : "Montant invalide"),
    },
  });

  const callback = () => {
    console.log("ok");
    router.refresh();
  };
  const { mutate: postRetrait } = usePostRetrait(callback);

  const handleSubmit = (values: IFormInput) => {

    const formattedValues = {
      ...values,montant: Number(values.montant), // Conversion en number
    };
    console.log("Données soumises retrait :", formattedValues);
    const { montant, numCheque } = formattedValues;

    if (!numCompte) {
      console.log("Erreur : numCompte est undefined !");
      return;
    }

    postRetrait(
      { montant, numCheque },
      {
        onSuccess() {
          successToast("Retrait effectué avec succès");
          router.refresh();
        },
      }
    );
  };

  return (
    <div className="flex flex-col w-1/2">
      <form
        onSubmit={form.onSubmit((values) => {
          handleSubmit(values);
        })}
        className="flex flex-col space-y-4 bg-white px-8 py-10 w-3/5 rounded-xl"
      >
        <Title order={3}>Mes retraits</Title>

        <CustomTextInput
          label="Numéro de chèque"
          {...form.getInputProps("numCheque")}
        />

        <CustomTextInput
          type="number"
          label="Montant "
          placeholder="0000"
          {...form.getInputProps("montant")}
        />
        <Button type="submit" color={primaryColor}>
          Effectuer Retrait
        </Button>
      </form>
      {/* <CustomTable /> */}
    </div>
  );
};

export default FormRetrait;

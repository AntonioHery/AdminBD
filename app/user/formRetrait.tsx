"use client";

import { Title, NumberInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import usePostRetrait from "../hooks/retrait/usePostRetrait";
import { CustomTextInput } from "../components/customInput";
import { useRouter } from "next/navigation";
//import { IClient } from '../type';

interface IFormInput {
  numCheque: string;
  montant: number;
}

interface IProps {
  numCompte: number;
}

const FormRetrait = ({ numCompte }: IProps) => {

  const router= useRouter()

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
    router.refresh()
    
  };
  const { mutate: postRetrait } = usePostRetrait(callback);

  const handleSubmit = (values: IFormInput) => {
    console.log("Données soumises retrait :", values);
    const { montant, numCheque } = values;

    if (!numCompte) {
      console.log("Erreur : numCompte est undefined !");
      return;
    }

    postRetrait(
      { montant, numCheque },
     
    );
  };

  return (
    <>
      <div className="mb-8">
        <Title order={3}>Mes retraits</Title>
      </div>
      <div className="flex gap-8 ">
        <form
          onSubmit={form.onSubmit((values) => {
            handleSubmit(values);
          })}
          className="flex flex-col justify-between space-y-4 bg-gray-100 px-8 py-6 w-3/5 h-48"
        >
          <CustomTextInput
            label="Numéro de chèque"
            {...form.getInputProps("numCheque")}
          />
          <div className="flex flex-col gap-4">
            <NumberInput label="Montant " {...form.getInputProps("montant")} />
            <Button type="submit">Effectuer Retrait</Button>
          </div>
        </form>
        {/* <CustomTable /> */}
      </div>
    </>
  );
};

export default FormRetrait;

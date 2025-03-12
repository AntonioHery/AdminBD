"use client"
import { CustomTextInput } from "@/app/components/customInput";
import useGetRetraitById from "@/app/hooks/retrait/useGetRetraitById";
import usePatchRetrait from "@/app/hooks/retrait/usePatchRetrait";
import { Button, NumberInput, Text } from "@mantine/core";
//import { useForm } from "@mantine/form";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IFormInput {
  numCheque: string;
  montant: number;
}
const EditPage = () => {

  const params= useParams()
  const id:number= Number(params.id)

  const{data:retrait}=useGetRetraitById(id)

  const[formValues, setFormValues]=useState<IFormInput>(
   {
    numCheque: "",
    montant: 0
   }
  )

  useEffect(() => {
    if (retrait) {
      setFormValues({
        numCheque: retrait.numCheque || "",
        montant: retrait.montant || 20,
      });
    }
  }, [retrait]);

  const callback = () => {
    console.log("Modification ok");
   
    
  };

  const{mutate:updateRetrait}= usePatchRetrait(id,callback)

  const handleSubmit=()=>{

    

    const{montant, numCheque}=formValues
    updateRetrait({montant, numCheque})
  }

  return (
    <div className="flex flex-col gap-8">
      
    <Text> Modifier Retrait</Text>
      <form onSubmit={handleSubmit}  className="flex flex-col justify-between space-y-4 bg-gray-100 px-8 py-6 w-3/5 h-48">
        <CustomTextInput label="Numéro de chèque" value={formValues.numCheque} onChange={(value) => setFormValues({ ...formValues, montant: Number(value) })}  />
        <div className="flex flex-col gap-4">
          <NumberInput label="Montant" value={formValues.montant} onChange={(value) => setFormValues({ ...formValues, montant: Number(value) })} />
          <Button type="submit" >Modifier Retrait</Button>
        </div>
      </form>
      
    </div>
  );
};

export default EditPage;

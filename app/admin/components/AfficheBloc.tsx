import useGetStats from "@/app/hooks/auditRetrait/useGetStats";
//import { ScrollArea } from "@mantine/core";
//import { Text } from "@mantine/core";
import React from "react";

const AfficheBloc = () => {
  const { data: stats, error, isLoading } = useGetStats();

  // Extraction des valeurs par type d'action
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : erreur</p>;

  const getActionMessage = (typeAction: string, nb: number) => {
    switch (typeAction) {
      case "INSERT":
        return `Ajout(s) effectué(s): ${nb}`;
      case "UPDATE":
        return `Modification(s) effectuée(s): ${nb}`;
      case "DELETE":
        return `Suppression(s) effectuée:(s) ${nb}`;
      default:
        return `Action inconnue (${typeAction}) exécutée ${nb} fois`;
    }
  };

  return (
    <div className="flex flex-row justify-around mb-5">
      {stats && stats.map((stat: { id: number; typeAction: string; nb: number }) => (
        <div key={stat.id} className="bg-red-100 p-2 rounded-lg">
          {getActionMessage(stat.typeAction, stat.nb)}
        </div>
      ))}
    </div>
  );
};

export default AfficheBloc;
 
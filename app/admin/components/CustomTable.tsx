import useGetAllAudit from "@/app/hooks/auditRetrait/useGetAllAudit";
import React from "react";
import moment from "moment";


const CustomTable = () => {

  // const fr=moment.locale('fr');

  const { data: audits } = useGetAllAudit();

  const rows = audits?.map((audit) => (
    <tr key={audit.id}>
      <td>{audit.nomClient}</td>
      <td>{audit.numCompte}</td>
      <td>{audit.typeAction}</td>
      <td>{audit.montantAncien}</td>
      <td>{audit.montantNouveau}</td>
      <td>{moment(audit.dateDeMAJ).format("LLL")}</td>
    </tr>
  ));
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Nom du client</th>
          <th>Numero de compte</th>
          <th>Type d&apos;action</th>
          <th>Montant Ancien</th>
          <th>Montant Nouveau</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default CustomTable;

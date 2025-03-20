import React from 'react'
import useGetRetraitByNumcompte from '../hooks/retrait/useGetRetraitByNumcompte'
import { Table, Text,Flex , Button} from '@mantine/core';
import Link from 'next/link';
import useDeleteRetrait from '../hooks/retrait/useDeleteRetrait';
import { infoToast } from '../lib/toast';

interface IProps {
    numCompte: number;
  }

const TableRetrait = ({numCompte}:IProps) => {

    const{data:retraits, refetch}=useGetRetraitByNumcompte(numCompte)

    const callback = () => {
        console.log("Modification ok");
       
        
      };

    
    
    const{mutate:deleteRetrait}=useDeleteRetrait(callback)

    const handleDelete = (numRetrait: number ) => {
     if(numRetrait){
       {
        deleteRetrait({numRetrait},
        {
          onSuccess() {
           infoToast("Retrait supprimé avec succès");
           refetch()
          },
        }
        );
      }
     }
    };
    
    if (!retraits || retraits.length === 0) {
      return <Text>Pas de retrait</Text>;
    }


    const rows = retraits.map((retrait) => (
        <Table.Tr key={retrait.numRetrait}>
          <Table.Td>{retrait.numCheque}</Table.Td>
          <Table.Td>{retrait.montant}</Table.Td>
          <Table.Th>
            <Flex gap="md">
              <Button>
                <Link href={`/user/edit/${retrait.numRetrait}`}> Modifier</Link>
              </Button>
              <Button onClick={()=>handleDelete(retrait.numRetrait)}>Supprimer</Button>
            </Flex>
          </Table.Th>
        </Table.Tr>
      ));

    
  return (
   <div className='w-2/3'>
     <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Numero de cheque</Table.Th>
          <Table.Th>Montant</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
   </div>
  )
}

export default TableRetrait
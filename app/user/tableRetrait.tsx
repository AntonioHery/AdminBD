import React from 'react'
import useGetRetraitByNumcompte from '../hooks/retrait/useGetRetraitByNumcompte'
import { Table, Text,Flex , Button} from '@mantine/core';
import Link from 'next/link';

interface IProps {
    numCompte: number;
  }

const TableRetrait = ({numCompte}:IProps) => {

    const{data:retraits}=useGetRetraitByNumcompte(numCompte)

    if (!retraits || retraits.length === 0) {
        return <Text>Pas de retrait</Text>;
      }

    const rows = retraits?.map((retrait) => (
        <Table.Tr key={retrait.numRetrait}>
          <Table.Td>{retrait.numCheque}</Table.Td>
          <Table.Td>{retrait.montant}</Table.Td>
          <Table.Th>
            <Flex>
              <Button>
                <Link href={`/user/edit/${retrait.numRetrait}`}> Modifier</Link>
              </Button>
              <Button>Supprimer</Button>
            </Flex>
          </Table.Th>
        </Table.Tr>
      ));

    
  return (
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
  )
}

export default TableRetrait
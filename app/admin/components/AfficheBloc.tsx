import { Text } from '@mantine/core'
import React from 'react'

const AfficheBloc = () => {
  return (
    <div>
        <div className='flex'>Insertions effectues:&nbsp;<Text fw={500} fs="italic"> 19</Text> </div>
        <div className='flex'>Modifications effectues:&nbsp;<Text fw={500} fs="italic"> 19</Text></div>
        <div className='flex'>Suppressions effectues:&nbsp;<Text fw={500} fs="italic"> 19</Text></div>
        
    </div>
  )
}

export default AfficheBloc
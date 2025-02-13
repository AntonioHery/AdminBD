import React from 'react'

const CustomTable = () => {
  return (
    
  <table className='table' >
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Nom et Prenoms</th>
        <th>Numero de compte</th>
        <th>Type d&apos;action</th>
       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>

  )
}

export default CustomTable
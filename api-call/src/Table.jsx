import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const MainTable = (props) => {
    return (
        <div>
             <Table>
            <thead>
    <tr>
      <th>SL.NO</th>
      <th>Name</th>
      <th>Email</th>
      
    </tr>
  </thead>
  <tbody>
  {props.comments.map((value,index)=>{
       return(
<tr key={index}>
    <td>{index+1}</td>
    <td>{value.name}</td>
    <td>{value.email}</td>
</tr>
       )
   })}
  </tbody>

</Table>

        </div>
    )
}

export default MainTable

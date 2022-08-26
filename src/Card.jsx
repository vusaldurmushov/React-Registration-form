import React from 'react'

function Card({title , phone, num, surname ,age}) {
  return (
    <>


    <tr>
        <td>{num}</td>
        <td>{title}</td>
        <td>{phone}</td>
        <td>{surname}</td>
        <td>{age}</td>

        </tr>
    </>
  )
}

export default Card
import { useState } from "react"
import Card from "./Card"

function App() {

  const [data, setData] = useState({})
  const [register, setRegister] = useState([])

  const getInput = (e) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const getSubmit = (e) => {
    e.preventDefault();

    setRegister([...register, data])

    e.target.reset()
  }
  
  console.log(register);




  return (
    <>
      <div className="container">
        <h1>Registration</h1>
        <form onSubmit={(e) => getSubmit(e)} >
          <div className="row">
            <div className="col-6 my-2">
              <input className="form-control" onChange={(e) => getInput(e)} type="text" name="title" placeholder="Name" />
            </div>
            <div className="col-6 my-2">
              <input className="form-control" onChange={(e) => getInput(e)} type="text" name="surname" placeholder="Surname" />
            </div>
            <div className="col-6 my-2">
              <input className="form-control" onChange={(e) => getInput(e)} type="text" name="age" placeholder="Age" />
            </div>
            <div className="col-6 my-2">
              <input className="form-control" onChange={(e) => getInput(e)} type="text" name="Phone" placeholder="Phone" />
            </div>
          </div>
          <button className="btn btn-success w-25">Add</button>
        </form>
<div className="col-12 mt-2">
<table className="table table-dark table-striped">
<thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Age</th>
    </tr>

</thead>
<tbody>

          {
            register.map((index, key) =>(
              <Card key ={key} num={key+1} title={index.title} age ={index.age} surname ={index.surname} phone ={index.Phone}  /> 
              
            ))
          }
            
</tbody>

</table>

          
</div>


        
        

      </div>


    </>
  );
}

export default App;

import React, { useState } from 'react'

function NewAss() {
    const [name, setName]=useState("")
    const [age, setAge]= useState("")
    const [dob, setDob] = useState("")
    const [gen, setGen] = useState("")
    const [data, setData] = useState([""])
function saveme(){
     setData =[name, age, dob, gen]
    localStorage.setItem('data',`${data}` );
    // localStorage.setItem('age',`${age}` );
}
    return (
        <>

        <br/>
        <div className='col-md-4'>
            <center>
<input type="text" className='form-control' placeholder="NAME" name="name" value={name} onChange={(e) => { setName(e.target.value) }}  />
<input type="number" className='form-control' placeholder="AGE" name="age" value={age} onChange={(e) => { setAge(e.target.value) }}   />
<input type="date" className='form-control' placeholder="DATEPICKER" name="dob" value={dob} onChange={(e) => { setDob(e.target.value) }}   />
<select >
                <option>GENDER</option>
                <option value="0">MALE</option>
                <option value="1">FEMAIL</option>
                </select>
                <p></p>
            </center>
            <right>
                <button onClick={saveme}> SaveMe</button>
                </right>
</div>

<table border="1" className="table">
                <tr >
                    <td></td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>DOB</td>
                    <td>Gender</td>
                    <td>Action</td>
                    
                </tr>
                {
                    localStorage && localStorage.getItem.map((item, i) =>
                    < tr >
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.age}</td>
                    <td>{item.hobby}</td>
                    <td>{item.gender}</td>
                    <td>
                        {/* <Link className='btn btn-outline-primary' to ={`/user/edit/${item._id}`}>Edit</Link> */}
                    </td>
                    {/* <button onClick={e=>(this.props.selUser(item._id))}>editme</button> */}
                    
                    
                    {/* Delete button woking */}
                    {/* <td><button className="button" onClick={()=>{{
                            const confBox=window.confirm("Are You Sure to Delete - "+item.name)
                            if(confBox===true){deluser(item._id)}
                        }}}>Delete</button></td> */}
                    </tr>)
                } 
            </table>   
        </>
    )
}

export default NewAss
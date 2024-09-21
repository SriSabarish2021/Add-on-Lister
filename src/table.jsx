import './table.css'
import { TbXboxXFilled } from "react-icons/tb";

const Table = ({load,data,openadd,removeadd,adddata,getdata,post,deleter,editing}) => {
    
  return (
    <div className='container'>
        {load?<p className='load'>Loading... Please Wait</p>:console.log("Sucessfully gotted")}
        <table className='table'>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((items,index)=>
                           <tr key={index}>
                           <td>{index+1}</td>
                           <td>{items.name}</td>
                           <td>{items.age}</td>
                           <td>{items.city}</td>
                           <td><button className='green' onClick={()=>editing(items)}>Edit</button></td>
                           <td><button className='red' onClick={()=>deleter(items.id)}>Delete</button></td>
                       </tr>
                )}
            </tbody>     
        </table>
        {openadd && (
                <div className='adddata'>
                    <div className='contents'>
                        <div className='close'>
                            <p className='addtitle'>Add your Data</p>
                            <span onClick={removeadd}><TbXboxXFilled/></span>
                        </div>
                        <input type="text" id='name' name='name' placeholder='Name' value={adddata.name} onChange={getdata}/>
                        <input type="number" id='age' name='age' placeholder='Age' value={adddata.age} onChange={getdata}/>
                        <input type="text" id='city' name='city' placeholder='City' value={adddata.city} onChange={getdata}/>
                        <button onClick={post}>Add Data</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Table
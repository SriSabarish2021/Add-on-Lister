import './table.css'
import { TbXboxXFilled } from "react-icons/tb";

const Table = ({data,addclose,loadcont,postdata,obj,chnageuser,load,deleter,editer,edit}) => {
    
  return (
    <div className='container'>
        {load?<p className='load'>Loading...please Wait</p>:console.log('Table loaded succesfully')
        }
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
                        <tr key={items.id}>
                            <td>{index+1}</td>
                            <td>{items.name}</td>
                            <td>{items.age}</td>
                            <td>{items.city}</td>
                            <td><button className='green' onClick={()=>editer(items)}>Edit</button></td>
                            <td><button className='red' onClick={()=>deleter(items.id)}>Delete</button></td>
                        </tr>
                )}
            </tbody>     
        </table>
        {addclose && (
            <div className='adddata'>
                <div className='contents'>
                    <div className='close'>
                        {edit?<p className='addtitle'>Edit-Your Data</p>:<p className='addtitle'>Add-Your Data</p>}
                        <span onClick={loadcont}><TbXboxXFilled/></span>
                    </div>
                    <input type="text" placeholder='Name' name='name' value={obj.name} onChange={chnageuser}/>
                    <input type="number" placeholder='Age' name='age' value={obj.age} onChange={chnageuser}/>
                    <input type="text" placeholder='City' name='city' value={obj.city} onChange={chnageuser}/>
                    <button onClick={()=>{postdata}}>{edit?'Edit User':'Add On'}</button>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default Table
import './App.css'
import Title from './title'
import Seradd from './seradd'
import Table from './table'
import { useEffect, useState } from 'react'

function App() {
  const[load,isload]=useState(false)
  const[data,changedata]=useState([])
  const[curval,chnageval]=useState('')
  const[adddata,subadddata]=useState({name:'',age:'',city:''})
  const[openadd,changeopen]=useState(false)

  const getdatas=async()=>{
    try{
        const fetchingdata=await fetch('http://localhost:3500/items')
        if(!fetchingdata.ok)throw Error ("Please reload the site")
        const jsondata=await fetchingdata.json()
        changedata(jsondata) 
    }catch(err){
        console.log(err)
    }
    finally{
        isload(false)
    }    
}

  useEffect(()=>{
      isload(true)
      getdatas()
  }, [])
  const removesearch=()=>{
    chnageval('')
  }
    
  const handleadddata=()=>{
    subadddata({name:'',age:'',city:''})
    changeopen(true)
    
  }
  const removeadd=()=>{
    changeopen(false)
      getdatas()
  }
  const getdata=(e)=>{
    subadddata({...adddata,[e.target.name]:e.target.value})
  }
  const post= async (e)=>{
    e.preventDefault()  
    if(adddata.id){
      const updatedata=await fetch(`http://localhost:3500/items/${adddata.id}`,{
        method:'PATCH',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(adddata)
      })
    }else{
      const postingdata=await fetch('http://localhost:3500/items',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(adddata)
      })
    } 

    }

    
  
  const deleter=async(id)=>{
    const deleting=await fetch(`http://localhost:3500/items/${id}`,{
      method:'DELETE'
    })
      getdatas()   
  }
  const editing=async(data)=>{
    console.log(data);
    subadddata(data)
    changeopen(true)
    

  }
  return (
    <>
      <Title/>
      <Seradd curval={curval}
      chnageval={chnageval}
      removesearch={removesearch}
      handleadddata={handleadddata}/>
      <Table load={load}
      data={data.filter((user)=>user.name.toLowerCase().includes(curval.toLowerCase())||user.city.toLowerCase().includes(curval.toLowerCase()))}
      openadd={openadd}
      removeadd={removeadd}
      adddata={adddata}
      getdata={getdata}
      post={post}
      deleter={deleter}
      editing={editing}/>
    </>
  )
}

export default App

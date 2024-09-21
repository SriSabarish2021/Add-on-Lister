import './App.css'
import Title from './title'
import Seradd from './seradd'
import Table from './table'
import { useEffect, useState } from 'react'

function App() {
  const[data,datagetter]=useState([])
  const[serval,chnageval]=useState('')
  const[addclose,addopen]=useState(false)
  const[obj,getobj]=useState({name:'',age:'',city:''})
  const[load,isloading]=useState(false)

  const getdata=async()=>{
    try{
      let fetching=await fetch('http://localhost:3500/items')
      if(!fetching.ok)throw Error("Please reload the site")
      let jsondata=await fetching.json()
      datagetter(jsondata)
      
    }catch(err){
      console.log(err);
    }finally{
      isloading(false)
    }
  }
  useEffect(()=>{
    isloading(true)
    getdata()
  },[])

  const removeall=()=>{
    chnageval('')
  }

  const openadder=()=>{
    getobj({name:'',age:'',city:''})
    addopen(true)
  }

  const loadcont=()=>{
    addopen(false)
    getdata()
  }
  const chnageuser=(e)=>{
    getobj({...obj,[e.target.name]:e.target.value})

  }

  const postdata=async()=>{

    if(obj.id){
      const updatedata=await fetch(`http://localhost:3500/items/${obj.id}`,{
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
       })
    }else{
      const postdata=await fetch('http://localhost:3500/items',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
       })
    }
     
  }

  const deleter=async(id)=>{
    const deletedata=await fetch(`http://localhost:3500/items/${id}`,{
      method:'DELETE'
    })
    getdata()
  }

  const editer=(data)=>{
    getobj(data)
    addopen(true)
  }


  
  
  return (
    <>
      <Title/>
      <Seradd serval={serval}
      chnageval={chnageval}
      removeall={removeall}
      openadder={openadder}/>
      <Table data={data.filter((info)=>info.name.toLowerCase().includes(serval.toLowerCase())||info.city.toLowerCase().includes(serval.toLowerCase()))}
        addclose={addclose}
        loadcont={loadcont}
        postdata={postdata}
        obj={obj}
        chnageuser={chnageuser}
        load={load}
        deleter={deleter}
        editer={editer}/>
    </>
  )
}

export default App

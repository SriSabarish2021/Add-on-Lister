import { TbXboxXFilled } from "react-icons/tb";
import './seradd.css'
const Seradd = ({serval,chnageval,removeall,openadder}) => {
  return (
    <div className="inp">
      <form className="form">
          <input type="text" placeholder="Search Items" value={serval} onChange={(e)=>chnageval(e.target.value)}/>
          <span onClick={removeall}><TbXboxXFilled /></span>
      </form>
      <button onClick={openadder}>Add On</button>
    </div>
  )
}

export default Seradd
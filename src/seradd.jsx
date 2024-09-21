import { TbXboxXFilled } from "react-icons/tb";
import './seradd.css'
const Seradd = ({curval,chnageval,removesearch,handleadddata}) => {
  return (
    <div className="inp">
      <form className="form">
          <input type="text" placeholder="Search Items" value={curval} onChange={(e)=>chnageval(e.target.value)}/>
          <span  onClick={removesearch}><TbXboxXFilled /></span>
      </form>
      <button onClick={handleadddata}>Add On</button>
    </div>
  )
}

export default Seradd
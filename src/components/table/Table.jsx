import useFetch from "../../hooks/useFetch";
import "./table.css";
import { useNavigate } from "react-router-dom";
import {CircularProgress} from '@material-ui/core'
import { Link } from "react-router-dom";


const Featured = () => {
  const navigate=useNavigate();
  const { data, loading, error } = useFetch(
    "https://api-3-feun.onrender.com/api/hotels/countByCity?cities=travel,mahal,lodge"
  )
 

  const handleclick=()=>{
    navigate("/Date")

}
const handleclick1=()=>{
    navigate("/MahalTable")
    
}
const handleclick2=()=>{
    navigate("/Lodgetable")
    
}
  return (
    <div className="featured">
         { loading ? < CircularProgress/> :(<><div className="featuredItem">

            <img
              src="https://th.bing.com/th/id/OIP.Yj37YzzXd_dZWH6xS63dPwHaE8?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
       

            />

            <div className="featuredTitles">     
              <h1 >Travel</h1>
             
            </div>
          </div>
<br></br>
          <div className="featuredItem">
            <img
              src="https://media.weddingz.in/images/8d1a270f36030c1e69403a4556f1eed1/5_r4N0Wan.jpg "
              alt=""
              className="featuredImg"
              
            />
            <div className="featuredTitles">
              <h1>Mahal</h1>
              
            </div>
          </div>
          <br></br>
          <div className="featuredItem">
            <img
              src="https://th.bing.com/th/id/OIP.Bwad_OW5yt0rKPU-bz0qUQHaE7?rs=1&pid=ImgDetMain"
              alt=""
              className="featuredImg"
              
            />
          
           
            <div className="featuredTitles">
              <h1>Lodge</h1>
            
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

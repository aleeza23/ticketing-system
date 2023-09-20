import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/authContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {FiLoader} from "react-icons/fi";


const ProtectedRoutes = ({children, CURRENT_USER_API, CURRENT_USER_ROLE}) => {
  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
      
    if (auth && auth.token && auth.user.role === CURRENT_USER_ROLE) {    
      axios
      .get(CURRENT_USER_API, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });     
    } else{
      setLoading(false)
      
    }   
  

  }, [auth && auth.token]);

  if (loading) {
    return  <FiLoader className='form-submitting loadig-spinner' />;
  }


  if (!auth || !auth.token || auth.user.role !== CURRENT_USER_ROLE) {
    navigate("/");
  }

 
  return <>{children}</>;
};

export default ProtectedRoutes;

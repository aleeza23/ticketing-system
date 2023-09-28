import axios from "axios";
import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import toast from "react-hot-toast";

const useHandleCategory = (category, setcategory) => {
  const [loading, setloading] = useState(false);
  const {auth} = useContext(AuthContext);
  const [categoriesData, setcategoriesData] = useState([]);

  //handle submit category
  const handleSubmitCategory = () => {
    setloading(true);
    axios
      .post("http://localhost:9000/api/by/auth/create/category", category, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success(res.data.message);
          setcategoriesData([...categoriesData, res.data.category]);
          setloading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("error");
        setloading(false);
      });
  };

  //api call to get categories data
  useEffect(() => {
    if (auth && auth.token) {
      setloading(true);
      axios
        .get("http://localhost:9000/api/all/categories", {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setcategoriesData(res.data.categories);
          setloading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error("error!");
          setloading(false);
        });
    }
  }, [auth]);

  //api call  to delete category
  const removeCategory = (id) => {
    setloading(true);
    axios
      .delete(`http://localhost:9000/api/by/auth/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.ok) {
          const updatedCategories = categoriesData.filter(
            (elm) => elm._id !== id
          );
          setcategoriesData(updatedCategories);
          setloading(false);
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something wents wrong!");
      });
  };

  return {
    handleSubmitCategory,
    categoriesData,
    removeCategory,
    loading,
  };
};

export default useHandleCategory;

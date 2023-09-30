import { Card, List } from "antd";
import React, { useState } from "react";
import Button from "../../../../partials/Button";
import '../../../../components/authentication/constant/Form.css'
import  useHandleCategory  from "../../../Hook/custom hook/useHandleCategory";
import { Link } from "react-router-dom";


const Category = () => {
    const [category, setcategory] = useState({name : ''});
    const {handleSubmitCategory,categoriesData ,loading , removeCategory} = useHandleCategory(category ,setcategory)

    //handle on change  
    const handleChange = (e) => {
        const { name, value } = e.target; 
        setcategory((prevCategory) => ({
          ...prevCategory, 
          [name]: value,  
        }));
      };



  return <>
    <Card title='Add Category' className="mt-4 ">
    <label className="constant__text mb-1">Category Name</label>
    <input type="text" className="form-control focused" name='name' placeholder="Add category name..." value={category.name} onChange={handleChange}/>
    <Button className='create-account__btn px-4 py-2 fw-bold mt-3' onClick={handleSubmitCategory}>Submit</Button>

    <List
          itemLayout='horizontal'
          dataSource={categoriesData}
          loading={loading}
          renderItem={(item, index) => (
            <List.Item
              actions={[               
                <Link
                  key='list-loadmore-delete'
                  className='text-danger text-decoration-none'
                  onClick={() => removeCategory(item._id)}
                >
                  Delete
                </Link>,
              ]}
            >
              <List.Item.Meta               
                title={<p>{item.name}</p>}
              />
            </List.Item>
          )}
        />
    </Card>
  </>;
};

export default Category;


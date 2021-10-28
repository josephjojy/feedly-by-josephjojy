import { Pane,Button,Typography,Checkbox } from "@bigbinary/neetoui/v2";
import {React,useState,useEffect} from 'react'
import {Check} from '@bigbinary/neeto-icons'
import { categories } from "../../constants";
import { Link } from "react-router-dom";

const SidePane = ({category,setCategory,showFilter,setShowFilter,setFilter}) => {

    

    const handleChecked = (e) => {
        setCategory((category) => ({
          ...category,
          [e.target.id]: e.target.checked
        }));
      };
    const handleSave = () => {
        let selectedCategories = Object.keys(category).filter((key)=>category[key]==true);
        setFilter(selectedCategories);
    }



  return (
    <div className="w-full">
      <Pane isOpen={showFilter} onClose={() => setShowFilter(false)}>
        <Pane.Header>
          <Typography style="h2" weight="semibold">
            Filter Articles
          </Typography>
        </Pane.Header>
        <Pane.Body>
          <Typography style="h4">
            Category
          </Typography>
          <div>
              {categories.map(items=>{
                  return <Checkbox className="ml-3 mt-8"
                  id={items.toLowerCase()}
                  label={items}
                  checked={category[items.toLowerCase()]||false}
                  onChange={handleChecked}
                />
                })}
          </div>
        </Pane.Body>
        <Pane.Footer className="flex items-center space-x-2">
            <Link to ={{pathname: "/"}}>
                <Button
                icon={Check}
                size="large"
                label="Save Changes"
                onClick={() => {setShowFilter(false);handleSave()}}/>
            </Link>
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => setShowFilter(false)}
          />
        </Pane.Footer>
      </Pane>
    </div>
  );

}

export default SidePane
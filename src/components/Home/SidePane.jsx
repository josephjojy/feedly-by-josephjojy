import { Pane,Button,Typography,Checkbox } from "@bigbinary/neetoui/v2";
import {React, useContext} from 'react'
import {Check} from '@bigbinary/neeto-icons'
import { categories } from "../../constants";
import { Link } from "react-router-dom";
import { ArchiveContext } from "../../App";

const SidePane = ({category,setCategory,showFilter,setShowFilter,setFilter}) => {

    const {archive,setArchive} = useContext(ArchiveContext);


    const handleChecked = (e) => {
        setCategory((category) => ({
          ...category,
          [e.target.id]: e.target.checked
        }));
      };
    const handleSave = () => {
        let selectedCategories = Object.keys(category).filter((key)=>category[key]===true);
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
          <div className="w-full pb-8 border-b-2" > 
              {categories.map(items=>{
                  return <Checkbox className="ml-3 mt-8"
                  key = {items}
                  id={items.toLowerCase()}
                  label={items}
                  checked={category[items.toLowerCase()]||false}
                  onChange={handleChecked}
                />
                })}
          </div>
          <Checkbox className="ml-3 mt-8"
                  id="archive"
                  label="Include archived articles"
                  checked = {archive}
                  onChange={()=>setArchive(!archive)}
                />
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
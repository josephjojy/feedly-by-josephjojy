import React from "react";
import { Tag } from "@bigbinary/neetoui/v2";


const FilterLabel = ({setCategory,setFilter,filter}) => {

    const removeFilter = (item) =>{
        const filtered = filter.filter((ele)=>ele!=item);
        setFilter(filtered);
        setCategory((category) => ({
            ...category,
            [item]: false
          }));
    }

    return(
        <div>
            {
                filter.map((item)=>{
                    const capitalizeTitle = item[0].toUpperCase()+item.slice(1)
                    return <Tag
                            key = {item}
                            className="mr-5"
                            label={capitalizeTitle}
                            onClose= {()=>removeFilter(item)}
                    />
                })
            }
        </div>
    )
}

export default FilterLabel
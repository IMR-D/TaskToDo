import React from "react"
import { useDispatch } from "react-redux";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../../redux/types.js";
import {setVisibilityFilter} from "../../redux/actions.js";
const FilterButtons = () => {
    const dispatch = useDispatch();
  
    return (
        <div>
            <button onClick={()=>dispatch(setVisibilityFilter(SHOW_COMPLETED))}>SHOW_COMPLETEDs</button>
            <button onClick={()=>dispatch(setVisibilityFilter(SHOW_ACTIVE))}>SHOW_ACTIVEs</button>
            <button onClick={()=>dispatch(setVisibilityFilter(SHOW_ALL))} >SHOW_ALLs</button>
        </div>
    )
}       

export default FilterButtons;
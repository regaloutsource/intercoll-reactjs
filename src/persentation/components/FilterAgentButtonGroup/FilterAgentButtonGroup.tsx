import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import './filterbtn.css'

const FilterAgentButtonGroup:React.FC = () => {
    const buttons = ['All','Field Agents','Phone Agent',"Other DD's"];
    const [selectedButton,setSelectedButton] = useState(0);
    const handleClick=(id:number)=>{
        setSelectedButton(id);
    }

  return (
    <Box display='flex' sx={{marginX:'2em'}}>
       {
        buttons.map((element,idx)=>
        <Button key={idx} 
        className={(idx===selectedButton)?'selectedBtn':'btnGrp'}
        variant={(idx===selectedButton)?'contained':'outlined'}
        size='small'
        sx={{
            borderTopLeftRadius:(idx===0)?'32px':'0px',
            borderBottomLeftRadius:(idx===0)?'32px':'0px',
            borderTopRightRadius:(idx===3)?'32px':'0px',
            borderBottomRightRadius:(idx===3)?'32px':'0px',
        }}
        onClick={()=>handleClick(idx)}>
          {element}
        </Button>)
       }
    </Box>
  )
}

export default FilterAgentButtonGroup
import React, { useState } from 'react'

import  Box from '@mui/material/Box'
import  Button from '@mui/material/Button'

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
        buttons?.map((element:string,index)=>
        <Button key={index} 
        className={(index===selectedButton)?'selectedBtn':'btnGrp'}
        variant={(index===selectedButton)?'contained':'outlined'}
        size='small'
        sx={{
            borderTopLeftRadius:(index===0)?'32px':'0px',
            borderBottomLeftRadius:(index===0)?'32px':'0px',
            borderTopRightRadius:(index===3)?'32px':'0px',
            borderBottomRightRadius:(index===3)?'32px':'0px',
        }}
        onClick={()=>handleClick(index)}>
          {element}
        </Button>)
       }
    </Box>
  )
}

export default FilterAgentButtonGroup
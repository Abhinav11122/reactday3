import { Button, Input, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const One = () => {
    var [data,setData]=useState()
    var [text,setText]=useState()
    const InputHandler=(e)=>{
        setData(e.target.value)
    }
    const btnClicked=()=>{
        setText(data)

    }


  return (
    <div style={{margin:'10%'}}>
        <Typography varient ='h3'>{text}</Typography>
        <TextField variant='outlined' label="name" onChange={InputHandler}/>
        <br></br>
        <Button variant='contained' onClick={btnClicked}>Click</Button>

    </div>
  )
}

export default One

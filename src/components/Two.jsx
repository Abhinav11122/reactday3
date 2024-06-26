import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Two = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" style={{textAlign:'left'}} component="div" sx={{ flexGrow: 1 }}>
            My app
          </Typography>
          <Button><Link to={'/'}>Login</Link></Button>
          <br />
          <Button><Link to={'/s'}>Form</Link></Button>
          <br />
          <Button><Link to={'/t'}>Table</Link></Button>
          <br />
          <Button><Link to={'/a'}>Array</Link></Button>



        </Toolbar>
      </AppBar>
    </Box>
      
    </div>
  )
}

export default Two

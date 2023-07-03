import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo, mainColor } from '../utils/constants'
import Searchbar from './Searchbar'
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{position: 'sticky', background: '#092C5C', top: '0', justifyContent: 'space-between'}}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        {/* <img src={logo} alt='logo' height={45}/> */}
        <LiveTvIcon style={{color: mainColor, fontSize: '4rem'}}/>
      </Link>
      <Searchbar />
    </Stack>
  )
}

export default Navbar
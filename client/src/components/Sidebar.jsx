import React, {useContext} from 'react'
import { Stack } from '@mui/material'
import { categories, mainColor } from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
   <Stack direction='row' sx={{overflowY: 'auto', height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}>
    {categories.map((category)=> (
      <button key={category.name} 
      className='category-btn' 
      onClick={()=> setSelectedCategory(category.name)}
      style={{background: category.name === selectedCategory && `#092C5C`, color: 'white', marginRight: '15px' }}>
        <span style={{color: category.name === selectedCategory ? 'white' : `${mainColor}`}}>{category.icon}</span>
        <span style={{opacity: category.name === selectedCategory? '1' : '0.8'}}>{category.name}</span>
      </button>
    ))}

   </Stack>
  )
}

export default Sidebar
import React, {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'
import { mainColor } from '../utils/constants'


const SearchFeed = () => {
  console.log('here')
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

    useEffect(()=> {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVideos(data.items)})
    }, [searchTerm])

  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
    Result for <span style={{color: mainColor}}>{searchTerm}</span> 
    </Typography>
    <Videos videos={videos} />
  </Box>
  )
}

export default SearchFeed
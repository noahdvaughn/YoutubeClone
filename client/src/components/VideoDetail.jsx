import {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetail = () => {
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>

      </Stack>

    </Box>
  )
}

export default VideoDetail
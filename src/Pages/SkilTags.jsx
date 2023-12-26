import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const SkilTags = ({tags}) => {
  return (
    <Box bg={'#01a479'}color={'white'}p={2}m={1}fontWeight={500} borderRadius={3} fontSize={10}>
      {tags}
    </Box>
  )
}

export default SkilTags

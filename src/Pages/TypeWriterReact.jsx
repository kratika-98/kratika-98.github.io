import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriterReact = () => {
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
  return (
    <Box  w={'100%'} >
      <Text fontSize={['20px','40px','50px']} m={'auto'} fontWeight={700} textAlign={'center'} >
        Hello , I am {' '} <br/>
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Web', 'MERN Stack','Masai Student']}
            loop={'infinite'}
            cursor
            cursorStyle='</>'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        <br/>
        Developer 
      </Text>
    </Box>
  )
}

export default TypeWriterReact

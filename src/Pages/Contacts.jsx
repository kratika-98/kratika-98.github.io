import { Box, Flex, Input, Link, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiTwotonePhone } from "react-icons/ai"
import { AiOutlineMail } from "react-icons/ai"

const Contacts = () => {
  return (
    < >
      <Box id='contact' w={'fit-content'} m={'auto'}  >
        <Text fontSize={30} fontWeight={600} pt={'15vh'}>Contact Me</Text>
        <Text fontWeight={800} color={'gray'}>Meet you soon ...</Text>
      </Box>
      <Box >
        <Box m={'auto'} w={['90%', '80%', '50%']} >
          <form action='https://formspree.io/f/xaygoyk' method='POST' >
            <Input outline={'2px solid gray'} my={5} type={'text'} name='username' placeholder="username" required />
            <Input outline={'2px solid gray'} my={5} type={'email'} name='Email' placeholder="Email" required />
            <Textarea outline={'2px solid gray'} my={5} name='message' placeholder='Send message' cols={30} rows={6} required />
            <Box m={'auto'} w={'30%'}>
              <Input color={'white'} bg={'#1976d2'} outline={'2px solid gray'} cursor={'pointer'} my={5} type={'submit'} value={'Send'} />
            </Box>
          </form>
        </Box>
        <Box id='contacts' w={'fit-content'} m={'auto'}  >
          <Text my={5} fontWeight={800} color={'gray'}>You can also Contact Me...</Text>
        </Box>
        <Flex maxW={'70%'} m={'auto'} display={['block','block','flex']} >
          <Box id="contact-github" fontSize={30} w={'fit-content'} m={'auto'}p={5} >
            <Link target='_blank' href='https://github.com/kratika-98' >
              <Box textAlign={'center'}>
                <Box w={'fit-content'} m={'auto'}><AiFillGithub /></Box>
                <Text fontSize={20} fontWeight={700} >GitHub</Text>
                <Text fontSize={15} textAlign={'center'}>Kratika_Jharbade</Text>
              </Box>
              </Link>
          </Box>
          <Box id="contact-linkedin" fontSize={30} w={'fit-content'} m={'auto'} p={5}>
            <Link target='_blank' href='https://www.linkedin.com/in/kratika-jharbade-15178b21b/' >
              <Box textAlign={'center'}>
                <Box w={'fit-content'} m={'auto'}><AiOutlineLinkedin /></Box>
                <Text fontSize={20} fontWeight={700} >LinkedIn</Text>
                <Text fontSize={15} textAlign={'center'}>Developer Kratika</Text>
              </Box>
            </Link>
          </Box>
          <Box id="contact-phone" fontSize={30} w={'fit-content'} m={'auto'}p={5} >
            <Link target='_blank' href='tel:+91 9174055077' rel='noreferrer'>
              <Box textAlign={'center'}>
                <Box w={'fit-content'} m={'auto'}><AiTwotonePhone /></Box>
                <Text fontSize={20} fontWeight={700} >Phone</Text>
                <Text fontSize={15} textAlign={'center'}>+91 9174055077</Text>
              </Box>
            </Link>
          </Box>
          <Box id="contact-email" fontSize={30} w={'fit-content'} m={'auto'}p={5} >
            <Link target='_blank' href='mailto:sweety.jharbade999@gmail.com' rel='noreferrer' >
              <Box textAlign={'center'}>
                <Box w={'fit-content'} m={'auto'}><AiOutlineMail /></Box>
                <Text fontSize={20} fontWeight={700} >Email</Text>
                <Text fontSize={15} textAlign={'center'}>sweety.jharbade999@gmail.com</Text>
              </Box>
            </Link>
          </Box>
        </Flex>
        <Box m={'auto'} w={'90%'} >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.869565388498!2d82.9964572260068!3d25.30858602717887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e0218bf7da5%3A0xc0b41fcef2056aff!2sLuxa%2C%20Varanasi%2C%20Uttar%20Pradesh%20221001!5e0!3m2!1sen!2sin!4v1692428678228!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, marginTop: "30px", marginBottom: "30px" }}
            allowFullScreen=""
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  )
}

export default Contacts

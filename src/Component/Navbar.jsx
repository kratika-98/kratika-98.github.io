import { Box, ChakraProvider, Flex, Spacer, theme, Button, Link as ResumeLink, useToast } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { BiDownload } from 'react-icons/bi';
import { Link } from "react-scroll";
import DrawerChakra from '../Pages/DrawerChakra';
import Resume from "../Essentials/kratika-jharbade-Resume.pdf"


const Navbar = () => {
  const links = [
    { id: "home", title: "Home", className: "nav-link home" },
    { id: "about", title: "About", className: "nav-link about" },
    { id: "skills", title: "Skills", className: "nav-link skills" },
    { id: "projects", title: "Projects", className: "nav-link projects" },
    { id: "contact", title: "Contacts", className: "nav-link contact" },
  ]

  const toast = useToast()

  const handleDownload = () => {
    window.open(Resume, '_blank');
    toast({
      title: "Resume-downloading",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  };

  return (
    <Flex id="nav-menu" bg={'#60a5fa'} w={'100%'} color={'white'} position={'fixed'} top={0} >
      <Box id="user-detail-name" fontSize={30} fontWeight={700} ml={[3, 10, 10]} cursor={'pointer'} >
       Kratika Jharbade
      </Box>
      <Spacer />
      <Box my={'auto'} fontSize={20} display={['none', 'none', 'block']} cursor={'pointer'}  >
        {links.map((ele, i) => {
          return (
            <Link className={ele.className} key={i} to={ele.id} style={{ marginLeft: "30px" }} spy={true} smooth={true} offset={50} duration={500} ><a>{ele.title}</a></Link>
          )
        })}
        <Button target='_blank' id="resume-button-1" className="nav-link resume" fontSize={20} colorScheme='#60a5fa' leftIcon={<BiDownload />} ml={5} >
          <ResumeLink id="resume-link-1"
            rel="noreferrer"
            onClick={handleDownload}
            href={Resume}
            download={"kratika-jharbade-Resume.pdf"}
          >RESUME
          </ResumeLink>
        </Button>
        <ChakraProvider theme={theme} >
          <ColorModeSwitcher justifySelf="flex-end" />
        </ChakraProvider>
      </Box>
      <Box display={['block', 'block', 'none']} fontSize={30} m={'auto'} mr={[1, 10, 10]} color={'white'}>
        <DrawerChakra links={links} />
      </Box>
    </Flex>
  )
}

export default Navbar

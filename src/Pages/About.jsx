import { Box, Text, Button, Flex, Spacer, Link, useToast } from '@chakra-ui/react'
import React from 'react'
import Resume from "../Essentials/kratika-jharbade-Resume.pdf"
import kratika from "../Essentials/kratika.png"
import { BiDownload } from 'react-icons/bi';


const About = () => {
  const handleDownload = () => {
    window.open(Resume, '_blank');
    toast({
      title: "Resume-downloading",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  };
  const toast = useToast()
  return (
    <Flex id="about" className="about section" w={'90%'} m={'auto'} display={['block', 'block', 'flex']} minH={'94vh'} >

      <Box w={'90%'} m={'auto'} >
        <Box textAlign={'center'} >
          <Text fontSize={30} fontWeight={600} >About</Text>
          <Text fontWeight={800} color={'gray'} >Know about me?</Text>
        </Box>
        <Box>
          <Box>
            <Text id="user-detail-intro" >I am an aspiring full stack developer and recent graduate of Masai School. I have a passion for developing scalable web applications and learning across the full stack. I am proficient in HTML, CSS, JavaScript, and React, and I have a good command of Node.js, Express, and MongoDB. I am focused on efficient learning and eager to tackle more complex problems.I am a highly motivated and self-driven inBoxidual with a strong work ethic. I am also a team player and I am always willing to help others. I am confident that I have the skills and experience necessary to be successful in a full stack development role.I am eager to learn more about the full stack development process and I am confident that I can make a significant contribution to your team. I am available for full-time employment and I am eager to start working on challenging and rewarding projects.</Text>
            <Flex>
              <Text fontWeight={700} color={'gray'} >Some of my other interests
                <br />
                Build Website(Cloning)
                <br />
                Gym
                <br />
                Traveling
              </Text>
              <Spacer />
              <Button id="resume-button-2" m={'auto'} >
                <BiDownload
                  fontSize={['40px', '40px', '10px']}
                />
                <Link
                  id="resume-link-2"
                  style={{ marginLeft: "10px" }}
                  rel="noreferrer"
                  onClick={handleDownload}
                  href={Resume}
                  download={"kratika-jharbade-Resume.pdf"}
                >
                  RESUME
                </Link>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box m={'auto'} maxW={['100%', '100%', '25%']} >
        <img className="home-img" src={kratika} />
      </Box>
    </Flex>
  )
}

export default About

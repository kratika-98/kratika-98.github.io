import { Box, Button, Flex, Grid, GridItem, Image, Link, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import boatClone from "../Essentials/boatClone.png"
import gemClone from "../Essentials/gemClone.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineApi } from 'react-icons/ai';
import { RiNavigationLine } from 'react-icons/ri';
import SkilTags from './SkilTags'

const Projects = () => {
  const projects = [
    {
      img: boatClone,
      githubLink: "https://github.com/Anwar-3108/Boat-clone/tree/main",
      live: "https://boat-lifestylee.netlify.app/",
      title: "Boat",
      desc: "Meticulous recreation of a successful boat project Utilized HTML, CSS, JS, and Bootstrap for development Focused on speed, stability, and maneuverability",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React.js" },
        { title: "Express.js" },
        { title: "Node.js" },
        { title: "MongoDB" },
        { title: "ChakraUI" },
        { title: "GitHub" },
      ],
      api: "",
    },
    {
      img: boatClone,
      githubLink: "https://github.com/Anwar-3108/Boat-clone/tree/main",
      live: "https://boat-lifestylee.netlify.app/",
      title: "Boat",
      desc: "Meticulous recreation of a successful boat project Utilized HTML, CSS, JS, and Bootstrap for development Focused on speed, stability, and maneuverability",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "React.js" },
        { title: "Node.js" },
        { title: "Express.js" },
        { title: "ChakraUI" },
        { title: "FireBase" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: gemClone,
      githubLink: "https://github.com/Saurav9284/Gem-Garden_Project",
      live: "https://saurav01gemgarden.netlify.app/",
      title: "gem garden",
      desc: "Replicated design, craftsmanship, and quality to mirror the original project Focused on mirroring brand's standards in aesthetics and craftsmanship ",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "Local Storage" },
        { title: "GitHub" },
      ],
      api:"",
    },
    {
      img: gemClone,
      githubLink: "https://github.com/Saurav9284/Gem-Garden_Project",
      live: "https://saurav01gemgarden.netlify.app/",
      title: "gem garden",
      desc: "Replicated design, craftsmanship, and quality to mirror the original project Focused on mirroring brand's standards in aesthetics and craftsmanship",
      tags: [
        { title: "HTML" },
        { title: "CSS" },
        { title: "JS" },
        { title: "API" },
        { title: "Local Storage" },
        { title: "GitHub" },
      ],
      api:"",
    },
  ]
  return (
    <Box>
      <Box id="projects" w={'80%'} m={'auto'} mt={[10, 10, 2]}>
        <Box w={'fit-content'} m={'auto'} >
          <Text fontSize={30} fontWeight={600} pt={'15vh'}>My Projects</Text>
          <Text fontWeight={800} color={'gray'}>with 5 team mates</Text>
        </Box>
        <Grid fontSize={20} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={0} w={'fit-content'} m={'auto'}>
          {
            projects.map((ele, i) => {
              return (
                <GridItem className="project-card" p={5} key={i} m={[2, 5, 10]} outline={'2px solid #1976d2'} borderRadius={10} style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} >
                  <Image src={ele.img} />
                  <Text className="project-title" fontSize={25} fontWeight={800} mt={5} >{ele.title}</Text>
                  <Text className="project-description">{ele.desc}</Text>
                  <Box m={'auto'} w={'fit-content'}>
                    <Grid templateColumns={['repeat(3, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)', 'repeat(6, 1fr)', 'repeat(6, 1fr)', 'repeat(7, 1fr)']} w={'fit-content'} textAlign={'center'} >
                      {
                        ele.tags.map((ele, i) => {
                          return (
                            <GridItem>
                              <SkilTags tags={ele.title} key={i} />
                            </GridItem>
                          )
                        })
                      }
                    </Grid>
                  </Box>
                  < Flex w={'fit-content'}m={'auto'} my={3} >
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiFillGithub />} colorScheme='purple' variant='solid'>
                      <Link target='_blank' href={ele.githubLink} >GitHub</Link>
                    </Button>
                    <Spacer />
                    <Button w={['100%','50%','100%']} my={1} mx={1} className="project-deployed-link" target='_blank' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<RiNavigationLine />} colorScheme='facebook' variant='solid'>
                      <Link target='_blank' href={ele.live} >Live</Link>
                    </Button>
                  </Flex>
                    {
                      ele.api != "" ? (
                        <Box m={'auto'} w={'fit-content'} >
                          < Button my={1} mx={1} className="project-github-link" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', }} _hover={{ cursor: 'pointer' }} leftIcon={<AiOutlineApi />} colorScheme='linkedin' variant='solid'>
                            <Link target='_blank' href={ele.api} >API Link</Link>
                          </Button>
                          <Spacer />
                        </Box>
                      ):""
                    }
                </GridItem>
              )
            })
          }
        </Grid >
      </Box >
    </Box >
  )
}

export default Projects

import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const GitHubSubmission = () => {
    return (
        <>
            <Box w={'fit-content'} m={'auto'} my={10} >
                <Text fontSize={30} fontWeight={600}>Github Submission</Text>
                <Text fontWeight={800} color={'gray'}>Do you have any work</Text>
            </Box>
            <Box className="react-activity-calendar" w={'fit-content'} m={'auto'} my={10}>
                <Image  id="github-stats-card" className="react-activity-calendar" w={'90vh'} my={5} src='https://github-readme-stats.vercel.app/api?username=kratika-98&show_icons=true&locale=en' />
                <Image  id="github-streak-stats" w={'100%'} src='https://github-readme-streak-stats.herokuapp.com/?user=kratika-98&' />
                <Image  id="github-top-langs" w={'90vh'} my={5} src='https://camo.githubusercontent.com/95d4701050c0508ec3c6d852dd1a2b3b79fd75a83aa74fe40e39aaaff74a6dc4/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d73686976617665726d61313131352673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374' />
            </Box>
        </>
    )
}

export default GitHubSubmission

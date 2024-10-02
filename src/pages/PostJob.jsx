import React, { useState } from 'react';
import { Container, Heading, Input, Textarea, Button, VStack, FormControl, FormLabel, useBreakpointValue, Box, useToast } from '@chakra-ui/react';

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    description: '',
    skills: '',
    applyLink: ''
  });
  const toast = useToast();
  const inputSize = useBreakpointValue({ base: 'md', md: 'lg' });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobData),
    });
  
    if (response.ok) {
      toast({
        title: 'Job posted successfully!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      // Clear form after successful submission
      setJobData({
        title: '',
        company: '',
        description: '',
        skills: '',
        applyLink: ''
      });
    } else {
      toast({
        title: 'Error posting the job!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  
  };

  return (
    <Container maxW="container.md" py={10}>
      <Box 
        p={8} 
        boxShadow="lg" 
        borderRadius="md" 
        bg="white" 
        borderWidth="1px"
        borderColor="gray.200"
        _hover={{ borderColor: "teal.300" }}
      >
        <Heading fontSize="3xl" textAlign="center" mb={8} color="teal.500">
          Post a New Job
        </Heading>
        
        <VStack spacing={5} align="stretch">
          <FormControl isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input 
              name="title" 
              size={inputSize} 
              value={jobData.title} 
              onChange={handleChange} 
              placeholder="Enter Job Title" 
              _hover={{ borderColor: "teal.500" }} 
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Company Name</FormLabel>
            <Input 
              name="company" 
              size={inputSize} 
              value={jobData.company} 
              onChange={handleChange} 
              placeholder="Enter Company Name" 
              _hover={{ borderColor: "teal.500" }} 
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Job Description</FormLabel>
            <Textarea 
              name="description" 
              size={inputSize} 
              value={jobData.description} 
              onChange={handleChange} 
              placeholder="Describe the job role" 
              _hover={{ borderColor: "teal.500" }} 
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Required Skills</FormLabel>
            <Input 
              name="skills" 
              size={inputSize} 
              value={jobData.skills} 
              onChange={handleChange} 
              placeholder="Enter required skills (comma separated)" 
              _hover={{ borderColor: "teal.500" }} 
              focusBorderColor="teal.500"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Apply Link</FormLabel>
            <Input 
              name="applyLink" 
              size={inputSize} 
              value={jobData.applyLink} 
              onChange={handleChange} 
              placeholder="Enter the application URL" 
              _hover={{ borderColor: "teal.500" }} 
              focusBorderColor="teal.500"
            />
          </FormControl>

          <Button colorScheme="teal" size={inputSize} w="full" onClick={handleSubmit}>
            Submit Job
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default PostJob;

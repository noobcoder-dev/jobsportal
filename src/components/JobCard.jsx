// src/components/JobCard.jsx
import React from 'react';
import { Box, Heading, Text, Stack, Badge, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <Box
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg="white"
      textAlign="left"
    >
      <Heading fontSize="xl" mb={4}>
        {job.title}
      </Heading>
      <Text mb={4}>{job.description}</Text>
      <Stack direction="row" mb={4}>
        {job.skills.map((skill, index) => (
          <Badge key={index} colorScheme="teal" mr={2}>
            {skill}
          </Badge>
        ))}
      </Stack>
      <Button as={RouterLink} to={`/jobs/${job.id}`} colorScheme="blue" mr={2}>
        Job Description
      </Button>
      <Button as={RouterLink} to={`/apply/${job.id}`} colorScheme="teal">
        Apply Now
      </Button>
    </Box>
  );
};

export default JobCard;

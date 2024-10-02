// src/pages/JobDetails.jsx
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Stack, Badge } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Fetch the job details from the JSON file
    fetch('/src/data/jobs.json')
      .then((response) => response.json())
      .then((data) => {
        // Find the job by ID
        const job = data.find((job) => job.id === parseInt(jobId));
        setJob(job);
      });
  }, [jobId]);

  if (!job) return <Text>Loading...</Text>;

  return (
    <Box maxW="800px" mx="auto" py={10}>
      <Heading mb={4}>{job.title}</Heading>
      <Text mb={4}>{job.description}</Text>
      <Stack direction="row" mb={4}>
        {job.skills.map((skill, index) => (
          <Badge key={index} colorScheme="teal" mr={2}>
            {skill}
          </Badge>
        ))}
      </Stack>
    </Box>
  );
};

export default JobDetails;

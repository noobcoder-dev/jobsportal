import React, { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Spinner, Alert, AlertIcon, Container, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data/jobs.json') // Adjust the path if necessary
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data.slice(0, 8)); // Display only the first 8 jobs
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement search logic if needed
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box maxW="1200px" mx="auto" py={10} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Loading jobs...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box maxW="1200px" mx="auto" py={10}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box maxW="1200px" mx="auto" py={10}>
      <Container maxW="container.xl" py={10} textAlign="center">
        <Heading fontSize="4xl" mb={5}>Find Your Dream Job</Heading>
        <SearchBar
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <Button
          mt={4}
          colorScheme="teal"
          as={RouterLink}
          to="/post-job"
        >
          Post a Job
        </Button>
      </Container>
      <Heading textAlign="center" mb={10}>
        Available Jobs
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <Text textAlign="center">No jobs found.</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Home;

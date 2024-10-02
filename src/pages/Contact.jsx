// src/pages/Contact.jsx
import React from 'react';
import { Container, Heading, Input, Textarea, Button, VStack, Flex } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Flex direction="column" minH="100vh" justify="center" align="center" p={4}>
      <Container maxW="container.md">
        <Heading fontSize="2xl" mb={5}>Contact Us</Heading>
        <VStack spacing={5} align="stretch">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="teal">Send Message</Button>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Contact;

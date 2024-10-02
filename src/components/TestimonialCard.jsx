// src/components/TestimonialCard.jsx
import { VStack, Image, Text } from '@chakra-ui/react';

const TestimonialCard = ({ person }) => {
  return (
    <VStack spacing={4} p={5} shadow="md" borderWidth="1px" rounded="md" bg="white">
      <Image borderRadius="full" boxSize="100px" src={person.image} alt={person.name} />
      <Text fontSize="lg">{person.name}</Text>
      <Text>{person.testimonial}</Text>
    </VStack>
  );
};

export default TestimonialCard;

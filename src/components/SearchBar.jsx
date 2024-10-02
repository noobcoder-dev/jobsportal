// src/components/SearchBar.jsx
import React from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const SearchBar = ({ placeholder, value, onChange, onSearch }) => {
  return (
    <Box mb={10}>
      <Input
        size="lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        w="60%"
        m="auto"
      />
      <Button mt={4} colorScheme="teal" onClick={onSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;

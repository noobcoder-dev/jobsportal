// src/components/Header.jsx
import { Box, Flex, Link, Button, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Box bg="gray.800" p={4} color="white">
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        {/* Logo */}
        <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">
          JobPortal
        </Link>
        
        {/* Desktop Menu */}
        <Flex display={{ base: "none", md: "flex" }} gap={4}>
          <Link as={RouterLink} to="/jobs">Jobs</Link>
          <Link as={RouterLink} to="/contact">Contact Us</Link>
        </Flex>
        
        {/* Post Job Button */}
        <Button display={{ base: "none", md: "block" }} as={RouterLink} to="/post-job" colorScheme="teal" textAlign="center" alignItems="center" justifyContent="center">Post a Job</Button>





        {/* Mobile Menu (Hamburger) */}
        <IconButton
          display={{ base: "block", md: "none" }}
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
          colorScheme="white"
        />

        {/* Drawer for mobile view */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              
              <DrawerBody>
                <Flex direction="column" gap={4}>
                  <Link as={RouterLink} to="/" onClick={onClose}>Home</Link>
                  <Link as={RouterLink} to="/jobs" onClick={onClose}>Jobs</Link>
                  <Link as={RouterLink} to="/contact" onClick={onClose}>Contact Us</Link>
                  <Button as={RouterLink} to="/post-job" colorScheme="teal" onClick={onClose}>
                    Post a Job
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;

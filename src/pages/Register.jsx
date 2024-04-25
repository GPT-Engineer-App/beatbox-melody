import React from "react";
import { Box, Button, Container, Input, VStack, Heading } from "@chakra-ui/react";

const Register = () => {
  return (
    <Container maxW="container.sm">
      <VStack spacing={4} py={12}>
        <Heading as="h1" size="xl">
          Register
        </Heading>
        <Input placeholder="Username" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="blue">Register</Button>
      </VStack>
    </Container>
  );
};

export default Register;

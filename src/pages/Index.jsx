import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaSearch, FaHeart } from "react-icons/fa";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredAlbums = ["Eternal Echoes", "Rhythms of Nature", "Urban Dreams", "Classical Moods", "Jazz in the Park", "Rock Legends", "Electronic Waves", "Pop Hits", "Folk Stories", "Blues Night"].filter((albumName) => albumName.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" py={4}>
        <Heading as="h1" size="xl">
          MyMusic
        </Heading>
        <Input placeholder="Search music..." width="300px" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </Flex>
      <Stack direction="row" spacing={8} overflowX="scroll" p={4}>
        {filteredAlbums.map((_, index) => (
          <Box key={index} bg="gray.700" borderRadius="lg" width="200px" p={4} color="white">
            <Image src={`https://source.unsplash.com/random/200x200?sig=${index}`} borderRadius="md" />
            <Text mt={2} fontSize="lg">
              Album {index + 1}
            </Text>
            <Text fontSize="sm">Artist {index + 1}</Text>
            <Button leftIcon={<FaPlay />} mt={2} colorScheme="pink" mr={2}>
              Play
            </Button>
            <Button leftIcon={<FaHeart />} colorScheme="red" size="sm">
              Favorite
            </Button>
          </Box>
        ))}
      </Stack>
      <VStack spacing={4} align="stretch" mt={8}>
        <Heading as="h2" size="lg">
          Now Playing
        </Heading>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontSize="xl">Song Title</Text>
            <Text fontSize="md">Artist Name</Text>
          </Box>
          <Button leftIcon={<FaPlay />} colorScheme="green">
            Play
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;

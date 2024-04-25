import { Flex, Box, Link, useMediaQuery } from "@chakra-ui/react";
import { FaHome, FaInfo, FaPhone } from "react-icons/fa";

function Header() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex as="nav" bg="blue.500" color="white" p={4} wrap="wrap" justify="space-between">
      <Box>
        <Link href="/" p={2}>
          <FaHome /> Home
        </Link>
        <Link href="/about" p={2}>
          <FaInfo /> About
        </Link>
        <Link href="/contact" p={2}>
          <FaPhone /> Contact
        </Link>
      </Box>
    </Flex>
  );
}

export default Header;

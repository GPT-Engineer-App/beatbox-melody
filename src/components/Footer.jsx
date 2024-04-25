import { Flex, Box, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <Flex as="footer" bg="gray.700" color="white" p={4} justify="center">
      <Box>
        <Link href="https://facebook.com" p={2}>
          <FaFacebook />
        </Link>
        <Link href="https://twitter.com" p={2}>
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com" p={2}>
          <FaInstagram />
        </Link>
      </Box>
    </Flex>
  );
}

export default Footer;

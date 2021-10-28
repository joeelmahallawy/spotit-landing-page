import { Box, Center, Flex, Heading, Text, Button } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import HostForm from "../components/form";

export default function Home() {
  return (
    <Box>
      {/* <HostForm /> */}
      <Flex p={5} justifyContent="space-between">
        <Heading>(SpotIt Logo)</Heading>
        <Flex justifyContent="space-between">
          <Button>About</Button>
          <Button>About</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import IPhone from "../public/IPhone_view.png";
import HostForm from "../components/form";
import { style } from "../themes/configs";

export default function Home() {
  return (
    <Box bg={style.darkgray}>
      <Box id="header" bg="#0b0b0b" color="white">
        {/* <HostForm /> */}
        <Flex p={10} justifyContent="space-between">
          <Heading>(SpotIt Logo)</Heading>
          <Flex justifyContent="space-between">
            <Button>About</Button>
            <Button>About</Button>
          </Flex>
        </Flex>
      </Box>
      <Flex
        id="home-page"
        p={10}
        flexDir="column"
        alignItems="center"
        color="white"
      >
        <Box w="100%" mb={10}>
          <Heading textAlign="center" fontSize="300%" letterSpacing="wide">
            Make passive income for doing nothing!
          </Heading>
          <Text textAlign="center" color="gray.300">
            Introducing P2P parking
            <br />
            Ever used AirBnb? Well, this is the same concept – rent out your
            driveways to other students and effortlessly earn passive income.
          </Text>
        </Box>

        <Flex bg="green" p={10} w="70%" justifyContent="space-between">
          <Flex flexDir="column" bg="blue" p={5}>
            <Heading>Here's how it works:</Heading>
            <Text>hi</Text>
          </Flex>
          <Box bg="red" p={3} h="600px" w="300px">
            <Image src={IPhone.src} w="100%" h="100%" />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

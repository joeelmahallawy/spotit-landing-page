import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  List,
  ListItem,
  OrderedList,
  Link,
} from "@chakra-ui/react";
import Head from "next/head";
import IPhone from "../public/IPhone_view.png";
import HostForm from "../components/form";
import { style } from "../themes/configs";

export default function Home() {
  return (
    <>
      <Box
        bg={style.darkgray}
        bgGradient="linear(to-tr, blue,blue.400,blue.100)"
        // bgGradient="linear(to-tr, purple,purple.400,purple.100)"
      >
        {/* #5e4bc2 */}
        <Flex
          // bg="red"
          // h="15vh"
          id="header"
          p={10}
          justifyContent="space-between"
          // bg="#0b0b0b"

          color="white"
        >
          {/* <HostForm /> */}
          <Heading>(SpotIt Logo)</Heading>
          <Flex>
            <Button {...style.navButton}>
              <Link
                _focus={{ outline: "none" }}
                _hover={{ textStyle: "no-underline" }}
                href="#how-it-works"
              >
                How it works
              </Link>{" "}
            </Button>
            <Button {...style.navButton}>Sign up</Button>
          </Flex>
        </Flex>
        {/* <Center h="80vh">
          <Heading textAlign="center" fontSize="200%" letterSpacing="wide">
            Make passive income for doing nothing!
          </Heading>
        </Center> */}
        {/* TODO: */}

        <Flex id="home-page" p={5} color="white">
          <Box flexDir="column" w="200%" textAlign="center">
            <Heading
              m={5}
              pt={20}
              fontSize="250%"
              color="white"
              letterSpacing="wide"
            >
              Introducing P2P Parking – {/* <br /> */}
              the new way of making passive income for doing nothing!
            </Heading>
            <Text w="60%" m="0 auto" fontSize="md" color="gray.300">
              {/*  */}
              Do you live in student residence and have a driveway? If so, you
              can now effortlessly collect passive income for renting out your
              driveway to other students!
              {/* Introducing P2P Parking – the cheapest way to park at university and
            also easiest way to make passive income as a student resident. */}
              {/*  */}
            </Text>
            <Button
              colorScheme="orange"
              _focus={{ outline: "none" }}
              p={7}
              mt={14}
              onClick={() => {
                console.log("Take me to the f*cking form");
              }}
            >
              Sign up as a host!
            </Button>
          </Box>
          <Box w="100%">
            <Box h="440px" w="220px" mb={5}>
              <Image src={IPhone.src} w="100%" h="100%" />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex
        m="1% auto"
        justify="center"
        justifyContent="space-evenly"
        w="75%"
        id="features"
      >
        <Flex id="easy-usage" {...style.featuresContainers}>
          <Center>(IMAGE HERE)</Center>
          <Heading {...style.featuresHeading}>Easy to use</Heading>
          <br />
          <Text textAlign="center">
            UI designed to fit your every needs. Minimal and simple
            functionality to make parking bookings even quicker!
          </Text>
        </Flex>
        <Flex id="book-in-minute" {...style.featuresContainers} ml={5}>
          <Center>(IMAGE HERE)</Center>
          <Heading {...style.featuresHeading}>Book within a minute</Heading>
          <br />
          <Text textAlign="center">
            Booking a parking spot is as easy as pressing two buttons, press the
            spot you want, then press the book button!{" "}
          </Text>
        </Flex>
        <Flex {...style.featuresContainers} ml={5}>
          <Center>(IMAGE HERE)</Center>
          <Heading {...style.featuresHeading}>Book anytime for cheap</Heading>
          <br />
          <Text textAlign="center">
            As long as people are hostin' you're bookin'. Book a parking spot
            anywhere on campus at any time for cheap prices!{" "}
          </Text>
        </Flex>
      </Flex>
      <Center id="how-it-works" p={10} bg="gray.100" flexDir="column">
        <Heading fontSize="4xl">Here's how it works</Heading>
        <br />
        <Flex w="85%" justify="space-between" textAlign="center">
          <Box>
            <Heading {...style.howItWorksHeading}>As a driver</Heading>
            <Text w="75%" m="0 auto">
              Alike Uber, when you open the homepage you'll see a map of your
              current location. You can then search certain areas, adjust
              prices, and radiuses to fit your needs. On search, you will see
              available driveways to park in as markers on the map. Choose which
              ever spot works best for you and book!
            </Text>
          </Box>
          <Box>
            <Heading {...style.howItWorksHeading}>As a Host</Heading>
            <Text w="75%" m="0 auto">
              Alike AirBnb, simply take pictures of your driveway and upload it
              on SpotIt with your address. Whenever you get a request for
              booking, you can either accept or reject it, unless you keep
              'auto-book' on. You can also set availabilities for when you'd
              like people to park on your driveway!
            </Text>
          </Box>
        </Flex>
        {/* <Box>
          <Text fontSize="2xl">
            The app isn't launched yet, but sign up to receive an email once the
            application has been launched and is ready to use!{" "}
          </Text>
        </Box> */}
      </Center>
      <Flex id="footer" justifyContent="flex-end">
        <Button m={7}>Instagram</Button>
        <Button m={7}>Twitter</Button>
        <Button m={7}>Gmail</Button>
      </Flex>
    </>
  );
}

// Do you drive to university? Aren't you tired of having to pay
//               expensive student parking fees? If so, here's the solution to your
//               problem. Introducing P2P parking – if you've ever used AirBnb
//               before, then you've used a P2P service. SpotIt offers the
//               opportunity to park in someone's driveway for a substantially
//               cheaper price than the university fee.

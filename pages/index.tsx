import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link as LinkChakra,
} from "@chakra-ui/react";
import Link from "next/link";
import EasyUsage from "../images/easyusage-tran.png";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import Clock from "../images/clock.png";
import Hand from "../images/hand.png";
import IPhone from "../images/IPhone_view.jpeg";
import { style } from "../themes/configs";
import parkedCar from "../images/parked_car_unsplash.jpeg";
import shakehands from "../images/shakehands.png";
import audiParked from "../images/audiparked.jpeg";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";

export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <Box
        boxShadow="0px 1px 10px black"
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
              <LinkChakra
                _focus={{ outline: "none" }}
                _hover={{ textStyle: "no-underline" }}
                href="#how-it-works"
              >
                How it works
              </LinkChakra>{" "}
            </Button>
            <Button {...style.navButton}>
              <Link href="/userInputForm">Sign up</Link>
            </Button>
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
            >
              <Link
                // href="https://f1n3e2z1bc4.typeform.com/to/PbGrnsxz"
                href="/userInputForm"
              >
                Sign up as a host!
              </Link>
            </Button>
          </Box>
          <Box w="85%">
            <Box h="440px" w="220px" mb={5}>
              <Image src={IPhone.src} w="100%" h="100%" />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Flex
        p={5}
        m="1% auto"
        justify="center"
        justifyContent="space-evenly"
        w="75%"
        id="features"
      >
        <Flex id="easy-usage" maxW="33%" flexDir="column" p={3} mr={5}>
          <Center p={3} w="100%">
            <Box h="120px" w="120px">
              <Image src={EasyUsage.src} h="100%" w="100%" />
            </Box>
            {/* TODO: */}
          </Center>
          <Heading fontSize="lg" fontWeight="500" textAlign="center">
            Easy to use
          </Heading>
          <br />
          <Text textAlign="center">
            UI designed to fit your every needs. Minimal and simple
            functionality to make parking bookings even quicker!
          </Text>
        </Flex>
        <Flex
          id="book-in-minute"
          maxW="33%"
          flexDir="column"
          p={3}
          mr={5}
          ml={5}
        >
          <Center p={3} w="100%">
            <Box h="120px" w="120px">
              <Image src={Clock.src} h="100%" w="100%" />
            </Box>
          </Center>
          <Heading fontSize="lg" fontWeight="500" textAlign="center">
            Book within a minute
          </Heading>
          <br />
          <Text textAlign="center">
            Booking a parking spot is as easy as pressing two buttons, press the
            spot you want, then press the book button!{" "}
          </Text>
        </Flex>
        <Flex maxW="33%" flexDir="column" p={3} mr={5} ml={5}>
          <Center p={3} w="100%">
            <Box h="120px" w="120px">
              <Image src={Hand.src} h="100%" w="100%" />
            </Box>
          </Center>
          <Heading fontSize="lg" fontWeight="500" textAlign="center">
            Book anytime for cheap
          </Heading>
          <br />
          <Text textAlign="center">
            As long as people are hostin' you're bookin'. Book a parking spot
            anywhere on campus at any time for cheap prices!{" "}
          </Text>
        </Flex>
      </Flex>
      {/* TODO: */}
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

            {/*  */}
          </Box>
        </Flex>
        {/* <Box>
          <Text fontSize="2xl">
          The app isn't launched yet, but sign up to receive an email once the
          application has been launched and is ready to use!{" "}
          </Text>
        </Box> */}
        {/* TODO:TODO:TODO: */}

        <Flex p={20} w="70%" justifyContent="space-between">
          {/* <Box h="220px" w="260px">
            <Image borderRadius="50%" h="100%" w="100%" src={parkedCar.src} />
          </Box>
          <Box h="220px" w="260px">
            <Image borderRadius="50%" h="100%" w="100%" src={parkedCar.src} />
          </Box> */}
          <AutoplaySlider
            play={true}
            interval={3000}
            style={{ width: "30vw", margin: "0 auto", background: "none" }}
            animation="cubeAnimation"
          >
            <Box>
              <Image h="100%" w="100%" src={parkedCar.src} />
            </Box>
            <Center>
              <Image backgroundColor="gray.100" p={20} src={shakehands.src} />
            </Center>
            <Box>
              <Image src={audiParked.src} />
            </Box>
          </AutoplaySlider>
        </Flex>
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

import {
  Box,
  Flex,
  Center,
  FormControl,
  FormLabel,
  Input,
  useColorMode,
  Button,
  useToast,
  Select,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { User } from "../interfaces/types";
import Router from "next/router";

const UserInputForm = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const [userInfo, setUserInfo] = useState<User>({
    FirstName: "",
    LastName: "",
    Email: "",
    Status: "",
    ChargeFee: "",
    WillingPayment: "",
    Address: "",
    University: "",
  });
  const [showResidentQuestion, setShowResidentQuestion] = useState(false);
  const [showDriverQuestion, setShowDriverQuestion] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  return (
    <Center w="100vw" h="100vh">
      {showThankYouMessage ? (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      ) : (
        <Flex
          overflow="scroll"
          maxH="75%"
          flexDir="column"
          w="25%"
          p={3}
          bg="gray.700"
          borderRadius={10}
        >
          {/* <Button onClick={toggleColorMode}>Toggle color</Button> */}
          <form
            onSubmit={(e) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInfo.Email)
              )
                console.log(userInfo.Status);
              fetch("/api/db", {
                method: "POST",
                body: JSON.stringify({ data: userInfo }),
              }).then(async (res) => {
                const resData = await res.json();
                console.log(resData);
                setShowThankYouMessage(true);
              });
              e.preventDefault();
              // return toast({
              //   title: "Submitted!",
              //   description:
              //     "You will receive an email once the application has been launched!",
              //   status: "success",
              //   duration: 3000,
              //   isClosable: true,
              // });
            }}
          >
            <Flex>
              <FormControl isRequired mr={2}>
                <FormLabel htmlFor="firstname-input">First name:</FormLabel>
                <Input
                  id="firstname-input"
                  type="text"
                  bg="gray.600"
                  _focus={{ bg: "gray.500" }}
                  placeholder="Ex) John"
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      FirstName: e.currentTarget.value,
                    });
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="lastname-input">Last name:</FormLabel>
                <Input
                  id="lastname-input"
                  type="text"
                  bg="gray.600"
                  _focus={{ bg: "gray.500" }}
                  placeholder="Ex) Doe"
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      LastName: e.currentTarget.value,
                    });
                  }}
                />
              </FormControl>
            </Flex>
            <FormControl isRequired mt={3}>
              <FormLabel htmlFor="email-input">Enter email:</FormLabel>
              <Input
                id="email-input"
                type="email"
                bg="gray.600"
                _focus={{ bg: "gray.500" }}
                placeholder="Ex) Johndoe123@gmail.com"
                onChange={(e) => {
                  setUserInfo({ ...userInfo, Email: e.currentTarget.value });
                }}
              />
            </FormControl>
            <FormControl mt={3}>
              <FormLabel htmlFor="university-input">
                Enter university name:
              </FormLabel>
              <Input
                id="university-input"
                type="text"
                bg="gray.600"
                _focus={{ bg: "gray.500" }}
                placeholder="Ex) McMaster University"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    University: e.currentTarget.value,
                  });
                }}
              />
            </FormControl>
            <FormControl isRequired mt={3}>
              <FormLabel>Status:</FormLabel>
              <Select
                placeholder="I am a..."
                onChange={(e) => {
                  if (e.currentTarget.value === "host") {
                    setShowResidentQuestion(true);
                    setShowDriverQuestion(false);
                  } else if (e.currentTarget.value === "driver") {
                    setShowDriverQuestion(true);
                    setShowResidentQuestion(false);
                  } else {
                    setShowDriverQuestion(false);
                    setShowResidentQuestion(false);
                  }
                  setUserInfo({ ...userInfo, Status: e.currentTarget.value });
                }}
              >
                <option value="host">Student living on campus</option>
                <option value="driver">Student driving to campus</option>
              </Select>
            </FormControl>
            {/*  */}
            {showResidentQuestion && (
              <>
                <FormControl mt={3}>
                  <FormLabel>
                    How much do you want to charge daily? ($)
                  </FormLabel>
                  <Select
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        ChargeFee: e.currentTarget.value,
                      });
                    }}
                    placeholder="Please select an option"
                  >
                    <option value="5">$5</option>
                    <option value="10">$10</option>
                    <option value="15">$15</option>
                    <option value="20">$20</option>
                    <option value="20+">$20+</option>
                  </Select>
                </FormControl>
                <FormControl isRequired mt={3}>
                  <FormLabel htmlFor="address-input">
                    Residence address:
                  </FormLabel>
                  <Input
                    id="address-input"
                    type="text"
                    bg="gray.600"
                    _focus={{ bg: "gray.500" }}
                    placeholder="Ex) 1234 Bulkman St."
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        Address: e.currentTarget.value,
                      });
                    }}
                  />
                </FormControl>
              </>
            )}
            {showDriverQuestion && (
              <FormControl isRequired mt={3}>
                <FormLabel>
                  How much are you willing to pay daily? ($)
                </FormLabel>
                <Select
                  onChange={(e) => {
                    setUserInfo({
                      ...userInfo,
                      WillingPayment: e.currentTarget.value,
                    });
                  }}
                  placeholder="Please select an option"
                >
                  <option value="5">$5</option>
                  <option value="10">$10</option>
                  <option value="15">$15</option>
                  <option value="20">$20</option>
                  <option value="20+">$20+</option>
                </Select>
              </FormControl>
            )}
            <Button
              type="submit"
              // ml="auto"
              p={5}
              mt={3}
              float="right"
              colorScheme="messenger"
              onSubmit={() => {
                // if (
                //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userInfo.Email)
                // )
                //   return toast({
                //     title: "Please enter valid email.",
                //     // description: "Profile looking good! 😉",
                //     status: "error",
                //     duration: 3000,
                //     isClosable: true,
                //   });
                // else {
                // TODO:TODO:POST TO DBTODO:TODO:
                //

                return toast({
                  title: "Submitted!",
                  description:
                    "You will receive an email once the application has been launched!",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
                // }
              }}
            >
              Submit
            </Button>
          </form>
        </Flex>
      )}
    </Center>
  );
};
export default UserInputForm;

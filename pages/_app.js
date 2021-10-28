import { ChakraProvider, theme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;

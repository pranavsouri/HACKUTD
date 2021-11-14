//Author: Ethan Fischer
//Date: 11/14/21
//this is what allows the next app to access the chakra UI library
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
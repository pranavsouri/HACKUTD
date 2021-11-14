//Author: Ethan Fischer
//Date: 11/14/21
//This is the main home page for the drop web-app
import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import chakra stuff
import { Box } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

export default function Home() {
  return (
    <div className={styles.container}>
      {/*Everything must be contained within this div, react can only return one element*/}
      <Head>
        <title>Drop App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/*This is the box for the navigation bar*/}
        <Box pos="fixed" top="0" w="100%" p={4} color="black" borderBottom="1px" borderBottomColor="black" id="navbar">
          <HStack spacing="25%" color="black">
            {/*Home Button*/}
            <Button colorScheme="teal" variant="ghost">
              <Link href="/" aria-label="Home">Home</Link>
            </Button>
            {/*Revenue Button*/}
            <Button colorScheme="teal" variant="ghost">
              <Link href="/revenue" aria-label="Revenue">Revenue</Link>
            </Button>
            {/*Cost Button*/}
            <Button colorScheme="teal" variant="ghost">
              <Link href="/cost" aria-label="Cost">Cost</Link>
            </Button>
            {/*Water Flow Button*/}
            <Button colorScheme="teal" variant="ghost">
              <Link href="/water-flow" aria-label="Water Flow">Water Flow</Link>
            </Button>
          </HStack>
        </Box>
        {/*"body" starts here*/}
        <h1 className={styles.title}>
          Welcome to Drop!
        </h1>
      </main>
    </div>
  )
}

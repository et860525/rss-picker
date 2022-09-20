import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} - RSS Picker</title>
      </Head>
      <Box>{children}</Box>
    </>
  )
}

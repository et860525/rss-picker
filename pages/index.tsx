import { Box, Container, Heading, Input, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Layout from '../components/layout'
import ThemeButton from '../components/theme-toggle-button'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HomePage() {
  const submitContact = async (event) => {
    event.preventDefault()
    const res = await fetch(`/api/rss?feed=${event.target.feed.value}`)
    const data = await res.json()
  }
  return (
    <Layout title="RSS List">
      <Container>
        <Box
          my="5"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h1">RSS Picker</Heading>
          <ThemeButton />
        </Box>
        <form onSubmit={submitContact}>
          <Box display="flex" justifyContent="space-around" gap="3px">
            <Input type="text" id="feed" name="feed" placeholder="Enter RSS" />
            <IconButton
              type="submit"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Box>
        </form>
        <Box>
          <Heading as="h2">Result</Heading>
          <div></div>
        </Box>
      </Container>
    </Layout>
  )
}

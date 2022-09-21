import { Box, Container, Heading, Input, IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'
import Layout from '../components/layout'
import ThemeButton from '../components/theme-toggle-button'
import { RSS } from '../interfaces'
import RssShow from '../components/rss-show'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HomePage() {
  let [rssData, setRssData] = React.useState<RSS | undefined>(undefined)
  let [feed, setFeed] = React.useState('')

  const submitContact = async (event) => {
    event.preventDefault()
    setFeed((feed = event.target.feed.value))
    // const res = await fetch(`/api/rss?feed=${event.target.feed.value}`)
    // const data = await res.json()
    // setRssData((rssData = data.data))
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
        <Box my="10" textAlign="center">
          <div>{feed ? <RssShow props={feed} /> : <h1>No Data</h1>}</div>
        </Box>
      </Container>
    </Layout>
  )
}

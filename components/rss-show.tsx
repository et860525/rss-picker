import { Box, Divider, Link, Heading, Text } from '@chakra-ui/react'
import useSWR from 'swr'
import { RSS } from '../interfaces'
import { RssItem } from './rss-item'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function RssShow(props: any) {
  const feed = props.props
  const { data, error } = useSWR<RSS>(`/api/rss?feed=${feed}`, fetcher)

  console.log(data)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Link href={data.link}>
        <Heading as="h2" size="md">
          {data.title}
        </Heading>
      </Link>
      <Text size="xs" my="2">
        {data.description}
      </Text>
      <Divider my="5" border="2px" />
      <Box>
        {data.title === undefined ? (
          <h1>No Data</h1>
        ) : (
          data.items.map((item, index) => (
            <RssItem
              key={index}
              title={item.title}
              link={item.link}
              isoDate={item.isoDate}
            />
          ))
        )}
      </Box>
    </>
  )
}

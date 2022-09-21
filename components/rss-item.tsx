import { Box, Link, Heading, Text } from '@chakra-ui/react'

export const RssItem = ({ title, link, isoDate }) => {
  const pub_date = new Date(isoDate)
  return (
    <Box mt="3" px="5">
      <Link href={link} textDecoration="underline">
        <Heading as="h3" size="sm">
          {title}
        </Heading>
      </Link>
      <Text as="span">{pub_date.toDateString()}</Text>
    </Box>
  )
}

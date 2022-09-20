import { Link, Text, Flex } from '@chakra-ui/react'

export default function NavItem({ title }) {
  return (
    <Flex mt={30} flexDir="column" w="100%" alignItems={'flex-start'}>
      <Link p={3}>
        <Text>{title}</Text>
      </Link>
    </Flex>
  )
}

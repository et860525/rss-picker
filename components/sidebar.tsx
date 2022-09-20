import { Avatar, Flex, Divider, Heading, Text } from '@chakra-ui/react'
import ToggleButton from './theme-toggle-button'
import NavItem from './NavItem'

export default function Sidebar() {
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      w="200px"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <ToggleButton />
        <NavItem title="Home" />
        <NavItem title="Home" />
        <NavItem title="Home" />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
        <Divider />
        <Flex mt={4} align="center">
          <Avatar />
          <Flex flexDir="column" ml={4}>
            <Heading as="h2">Mango Fan</Heading>
            <Text>Mango</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Mauricio Aires</Text>
          <Text color="gray.300" fontSize="small">
            mauricioaires015@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Mauricio Aires"
        src="https://github.com/MauricioAires.png"
      />
    </Flex>
  )
}

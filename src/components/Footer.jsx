import { Center, Text } from '@chakra-ui/react'

const Footer = () => {
    const date = new Date()
  return (
    <Center py={8} backgroundColor='orange.500' fontFamily="'poppins', sans-serif" as='footer'>
        <Text>
            {  `nonymousDEv${date.getFullYear()}`}
        </Text>
    </Center>
  )
}

export default Footer
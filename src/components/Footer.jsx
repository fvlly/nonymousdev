import { Center, Text } from '@chakra-ui/react'

const Footer = () => {
    
  return (
    <Center py={8} backgroundColor='orange.500'  as='footer'>
        <Text>
            {  `nonymousDEv${new Date().getFullYear()}`}
        </Text>
    </Center>
  )
}

export default Footer
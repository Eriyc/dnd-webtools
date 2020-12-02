import { Box, Heading } from '@chakra-ui/react'
import NextLink from 'next/link'
import s from './Topnav.module.scss'

export const Topnav = () => {
  return (
    <Box as="header" className={s.rootBox}>
      <Heading as="h1">DND-WEBTOOLS</Heading>
      <nav>
        <NextLink href="/">Home</NextLink>
        <NextLink href="/account">Account</NextLink>
      </nav>
    </Box>
  )
}

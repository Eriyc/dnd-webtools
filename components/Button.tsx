export const ButtonStyle = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '0',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: '12px',
      padding: '16px',
    },
    md: {
      fontSize: '16px',
      padding: '18px 24px',
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
    },
    solid: {
      bg: 'green.500',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}

import { Box, ChakraComponent, useStyleConfig } from '@chakra-ui/react'

export const Button = (props: ChakraComponent<'button', {}> & { size: string; variant: string }) => {
  const { size, variant, ...rest } = props

  // 2. Reference `Button` stored in `theme.components`
  const styles = useStyleConfig('Button', { size, variant })

  // 3. Pass the computed styles into the `sx` prop
  return <Box as="button" sx={styles} {...rest} />
}

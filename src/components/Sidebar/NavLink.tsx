import { ElementType } from 'react'

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text
} from '@chakra-ui/react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType
  /**
   * @description {ElementType} é quando é elemento é passado
   * como referencia, ele não é declarado com as chaves <Element/>
   */
  children: string
  href: string
}

export function NavLink({ children, icon, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}

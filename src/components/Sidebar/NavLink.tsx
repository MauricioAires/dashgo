import {
  Icon,
  Link,
  LinkProps as ChackraLinkProps,
  Text
} from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType
  /**
   * @description {ElementType} é quando é elemento é passado
   * como referencia, ele não é declarado com as chaves <Element/>
   */
  children: string
}

export function NavLink({ children, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}

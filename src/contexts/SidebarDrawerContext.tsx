import React, { createContext, useContext, useEffect } from 'react'

import { useDisclosure, UseDisclosureReturn, useRadio } from '@chakra-ui/react'
import { useRouter } from 'next/router'

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

interface SidebarDrawerProviderProps {
  children: React.ReactNode
}

export function SidebarDrawerProvider({
  children
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()

  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)

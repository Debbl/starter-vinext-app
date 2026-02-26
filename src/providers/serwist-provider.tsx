'use client'

import { useEffect } from 'react'
import { getSerwist } from 'virtual:serwist'

export interface SerwistProviderProps {
  children: React.ReactNode
}

export function SerwistProvider({ children }: SerwistProviderProps) {
  useEffect(() => {
    const loadSerwist = async () => {
      if ('serviceWorker' in navigator) {
        const serwist = await getSerwist()
        void serwist?.register()
      }
    }

    void loadSerwist()
  }, [])

  return <>{children}</>
}

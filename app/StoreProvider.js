'use client'
import { useRef, useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'

export default function StoreProvider({ children }) {
  const storeRef = useRef(null)
  const [isHydrated, setIsHydrated] = useState(false)

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // During SSR, render a minimal version without Redux-dependent components
  if (!isHydrated) {
    return <div>{children}</div>
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
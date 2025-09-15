'use client'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

/**
 * Safe wrapper around useSelector that prevents SSR issues
 * Returns default value during SSR and actual state after hydration
 */
export function useSafeSelector(selector, defaultValue = null) {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const storeValue = useSelector(state => {
    if (!isHydrated) return defaultValue
    try {
      return selector(state) ?? defaultValue
    } catch (error) {
      console.warn('Redux selector failed:', error)
      return defaultValue
    }
  })

  return isHydrated ? storeValue : defaultValue
}
import { useRef, useEffect } from 'react'

export const useOnClickOutside = <T extends HTMLElement>(handler: (event?: Event) => any) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchdown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchdown', listener)

    }
  }, [ref, handler])

  return ref
}

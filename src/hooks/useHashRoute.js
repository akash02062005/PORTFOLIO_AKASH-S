import { useEffect, useState } from 'react'

/** Read the current hash route, e.g. "#/certificates" -> "/certificates". */
function currentRoute() {
  const h = window.location.hash.replace(/^#/, '')
  return h === '' ? '/' : h
}

/** Tiny dependency-free hash router. Returns the active path string. */
export function useHashRoute() {
  const [route, setRoute] = useState(currentRoute())
  useEffect(() => {
    const onChange = () => setRoute(currentRoute())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

/** Programmatic navigation. navigate('/certificates') or navigate('/'). */
export function navigate(path) {
  if (path === '/' || path === '') {
    window.location.hash = '/'
  } else {
    window.location.hash = path
  }
}

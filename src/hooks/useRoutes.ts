import { useState, useEffect } from 'react'

type Route = string
type OptionalRoute = Route | undefined
type Routes = Route[]
type Base = string

type RoutesObject = {
  route: () => OptionalRoute,
  isHome: () => boolean,
  is404: () => boolean,
  isPage: (arg0: Route) => boolean
}
export type SwitchRoute = (arg0: Route) => void

const pathname = document.location.pathname

const path = (base: Base, route: Route) => base + route

const useRoutes = (routes: Routes, base: Base = "") : [RoutesObject, SwitchRoute] => {

  const routesObject: RoutesObject = {
    route:  () => route,
    isHome: () => route === "/",
    is404:  () => route === undefined,
    isPage: (path: Route) => route === path
  }

  const defaultRoute = routes.find(route => path(base, route) === pathname)
  const [route, setRoute] = useState<OptionalRoute>(defaultRoute)
  const switchRoute = (route: Route) => {
    window.history.pushState(null, route, path(base, route))
    setRoute(route)
  }

  useEffect(() => {
    window.onpopstate = () => {
      setRoute(pathname)
    }
  }, [])

  return [routesObject, switchRoute]
}

export default useRoutes

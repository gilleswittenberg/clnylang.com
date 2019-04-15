import { useState, useEffect } from 'react'

type Route = string
type OptionalRoute = Route | undefined
type Routes = Route[]

type RoutesObject = {
  route: () => OptionalRoute,
  isHome: () => boolean,
  is404: () => boolean,
  isPage: (arg0: Route) => boolean
}
export type SwitchRoute = (arg0: Route) => void

const pathname = document.location.pathname

const useRoutes = (routes: Routes) : [RoutesObject, SwitchRoute] => {

  const routesObject: RoutesObject = {
    route:  () => route,
    isHome: () => route === "/",
    is404:  () => route === undefined,
    isPage: (path: Route) => route === path
  }

  const defaultRoute = routes.find(route => route === pathname)
  const [route, setRoute] = useState<OptionalRoute>(defaultRoute)
  const switchRoute = (route: Route) => {
    window.history.pushState(null, route, route)
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

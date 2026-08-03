/* eslint-disable */

// @js-nocheck

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AboutRouteImport } from './routes/about'
import { Route as ContactRouteImport } from './routes/contact'
import { Route as ProjectsRouteImport } from './routes/projects'
import { Route as ServicesRouteImport } from './routes/services'
import { Route as ServicesIndexRouteImport } from './routes/services.index'
import { Route as ServicesSlugRouteImport } from './routes/services.$slug'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
})
const AboutRoute = AboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRouteImport,
})
const ContactRoute = ContactRouteImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRouteImport,
})
const ProjectsRoute = ProjectsRouteImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRouteImport,
})
const ServicesRoute = ServicesRouteImport.update({
  id: '/services',
  path: '/services',
  getParentRoute: () => rootRouteImport,
})
const ServicesIndexRoute = ServicesIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ServicesRoute,
})
const ServicesSlugRoute = ServicesSlugRouteImport.update({
  id: '/$slug',
  path: '/$slug',
  getParentRoute: () => ServicesRoute,
})

const ServicesRouteChildren = {
  ServicesSlugRoute: ServicesSlugRoute,
  ServicesIndexRoute: ServicesIndexRoute,
}

const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren,
)

const rootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ContactRoute: ContactRoute,
  ProjectsRoute: ProjectsRoute,
  ServicesRoute: ServicesRouteWithChildren,
}

export const routeTree = rootRouteImport._addFileChildren(rootRouteChildren);

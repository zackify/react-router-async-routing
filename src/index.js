import loader from './loader'
import LinkBuilder from '../src/link'
import RouteBuilder from '../src/route'
import PreloadBuilder from '../src/preload'

export default (routes, importer) => ({
  Link: LinkBuilder(loader(importer, routes)),
  Route: RouteBuilder(loader(importer, routes)),
  Preload: PreloadBuilder(loader(importer, routes))
})

import loader from './loader'
import LinkBuilder from '../src/link'
import RouteBuilder from '../src/route'
import PreloadBuilder from '../src/preload'

export default (routes, importer) => {
  let Loader = loader(importer, routes)
  
  return {
    Link: LinkBuilder(Loader),
    Route: RouteBuilder(Loader),
    Preload: PreloadBuilder(Loader)
  }
}

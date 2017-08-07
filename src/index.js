import loader from './loader';
import LinkBuilder from './link';
import RouteBuilder from './route';
import PreloadBuilder from './preload';

window.components = {};

export default (routes, importer) => {
  let Loader = loader(importer, routes);

  return {
    Link: LinkBuilder(Loader),
    Route: RouteBuilder(Loader),
    Preload: PreloadBuilder(Loader),
  };
};

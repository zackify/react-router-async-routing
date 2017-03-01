import memoize from './memoize'
import { matchPath } from 'react-router'

const pathFinder = memoize(
  (path, routes) => {
    let route = routes.find(route => matchPath(path, route.path))
    if (route) return route.dataPath
    return path
  }
)


export default (importer, routes) => ({ path, isDataPath }) {
  let dataPath = isDataPath ? path : pathFinder(path, routes)

  //without this hot loading in development wouldn't work
  if (window.components[dataPath] && process.env.NODE_ENV === 'production') return {};

  try {
    const component = await importer(dataPath);

    if (component) {
      window.components[dataPath] = {
        component: component.default,
      };
    }

    return { component };
  } catch (e) {
    console.warn(`async route: ${dataPath} does not exist`);
    return {};
  }
}

import memoize from './memoize';
import { matchPath } from 'react-router';

const pathFinder = memoize((path, routes) => {
  let route = routes.find(route => matchPath(path, route.path));
  if (route) return route.dataPath;
  return path;
});

export default (importer, routes) => async ({ path, dataPath }) => {
  let componentPath = dataPath || pathFinder(path, routes);

  //without this hot loading in development wouldn't work
  if (window.components[componentPath] && process.env.NODE_ENV === 'production') return {};

  try {
    const component = await importer(componentPath);

    if (component) {
      window.components[componentPath] = {
        component: component.default
      };
    }

    return { component };
  } catch (e) {
    console.warn(`async route: ${dataPath || path} does not exist`);
    return {};
  }
};

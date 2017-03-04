import routes from './routes';
import AsyncSetup from '../src';

const { Route, Link, Preload } = AsyncSetup(routes, path => import(`./views/${path}.js`));

export { Link, Route, Preload };

import routes from './routes';
import AsyncSetup from '../dist';

const { Route, Link, Preload } = AsyncSetup(routes, path =>
  import(`./views/${path}.js`)
);

export { Link, Route, Preload };

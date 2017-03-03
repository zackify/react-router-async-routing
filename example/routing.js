import routes from './routes'
import AsyncSetup from '../src'

export AsyncSetup(routes, path => import(`../views/${path}.js`))

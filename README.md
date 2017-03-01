This will be released shortly, please leave me any feedback on twitter!

##Async Routing

React router v4 is awesome, but one thing is missing! Async routes. There's a couple components out there but they all have the same problem, on route change, the component will return null, then load the page. This makes for an annoying user experience. This package will wait for the bundle before a route change, and also allow you to preload pages!

##Install

```
npm install rr-async-routes
```

##Setup

Create a routes file, with the pathname and path to your component files

```js
export default [
  {
    path: '/employers',
    dataPath: 'employers',
  },
  {
    path: '/test/:name',
    dataPath: 'test/index',
  },
]
```

Create a `routing` file that will export `Preload`, `Link`, and `Route` components for you to use in place of the built in components in v4:

```js
import routes from './routes'
import AsyncSetup from 'rr-async-routes'

export AsyncSetup(routes, path => import(`../views/${page}.js`))

```

The first argument is your routes array, the second is a function that takes a path (the dataPath in the routes file) and load the component according to its location.

Now, render your routes using the components from the file you just created!

```
import { Route } from './routing'

....
{routes.map(route => <Route key={route.path} {...route} />)}

```

Now, you can link to any page like you're used to, just `import { Link } from './routing'`!

##Preloading routes

If a user is on the homepage, and you'd like to load the about page ahead of time, just render this inside of your homepage:

```
export const Home = (
  <div>
    <h2>Home</h2>
    <Preload path="/about" />
  </div>  
)
```

The route will be loaded in the background :)


##Custom loading

If you need to do more than just async load a route, you can make your own loader by importing components directly:

```js
import LinkBuilder from 'rr-async-routes/link'

const CustomLink = LinkBuilder(
  async ({ path }) => await somePromise()
)

```

The function passed will be `await`ed on any time a link is clicked. 

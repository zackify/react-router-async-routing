export default [
  {
    path: '/',
    exact: true,
    dataPath: 'index'
  },
  {
    path: '/home',
    dataPath: 'home'
  },
  {
    path: '/about/:name',
    dataPath: 'about'
  },
  {
    path: '/preloaded',
    dataPath: 'preloaded-content'
  }
];

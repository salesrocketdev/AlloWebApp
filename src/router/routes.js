
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'list', name: 'list', component: () => import('pages/ListPage.vue') },
      { path: 'add/:id?', name: 'add', component: () => import('pages/AddPage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

export function initialize(store, router){
    axios.interceptors.response.use(null, (erro) => {
      if (error.response.status == 401) {
        store.commit('logout');
        router.push('/login');
      }
    //   if (error.response.status == 403) {
    //     router.push('/403');
    //   }
    //   if (error.response.status == 404) {
    //     router.push('/404');
    //   }
      return Promise.reject(error);
    })
    
    
    router.beforeEach((to, from, next) => {
      const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      const currentUser = store.state.currentUser;
    
      if (requiresAuth && !currentUser) {
        next('/');
      }else if(to.name == 'firstPage' && currentUser || to.name == 'login' && currentUser){
        next('/home');
      }else{
        next();
      }
    })

}
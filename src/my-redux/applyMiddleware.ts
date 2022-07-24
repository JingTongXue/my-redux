
export default function applyMiddleware(...middlewares: any) {

  return (createStore: any) => (reducer: any) => {
    // 先获取store
    const store = createStore(reducer);
    // 重新定义dispatch
    let dispatch = store.dispatch;

    // 加强dispatch
    const midAPI = {
      getState: store.getState,
      //@ts-ignore
      dispatch: (action,...args) => dispatch(action, ...args)
    }

    // 执行一遍中间件们
    const middlewareChain = middlewares.map((middleware: any) => middleware(midAPI))


    // 加强版的dispatch
    // 把所有的中间件的函数都执行了，同时还执行store.dispatch
    //@ts-ignore
    dispatch = compose(middlewareChain)(store.dispatch);

    return {
      ...store,
      // 加强之后dispatch
      dispatch,
    }
  }
}

function compose(funcs: []) {
  if(funcs.length === 0) {
    return (arg: any) => arg;
  }
  if(funcs.length === 1) {
    //@ts-ignore
    return funcs[0];
  }
  //@ts-ignore
  return funcs.reduce((a,b) => (...args) => a(b(...args)));
}
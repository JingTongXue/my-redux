



export default function createStore(reducer:any, enhancer?: any) {
  // reducer参数: 用来让dispatch来修改状态值  

  // 中间件接入
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }

  // 定义当前状态值
  let currentState: any;
  // 订阅事件
  let currentListeners: any[] = [];

  // 获取状态值
  function getState() {
    return currentState;
  }

  // 修改状态值
  function dispatch(action: { type: string; }) {
    currentState = reducer(currentState, action);
    currentListeners.forEach((listener) => listener());
  }

  // 订阅更新订阅事件
  function subscribe(listener: any) {
    if(typeof listener === 'function') {
      currentListeners.push(listener);
    } 
    
    
    return () => {
      // 卸载订阅事件
      const index = currentListeners.indexOf(listener);
      currentListeners.splice(index, 1);
    };
  }

  // 手动执行一次dispatch事件: 默认执行一次，用来取store的默认值
  dispatch({ type: "ASASASASASA/REDUX" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

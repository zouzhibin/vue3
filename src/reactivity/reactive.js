import {isObject} from '../utils/utils'
import {mutablehandler} from './baseHandlers'
export  function reactive(target){
    // 创建一个响应式的对象 目标对象可能不一定是数组或者对象 可能还有set map
    return createReactiveObject(target,mutablehandler)
}


function createReactiveObject(target,baseHandler){
    if(!isObject(target)){ return target}
    const observed = new Proxy(target,baseHandler)
    return observed
}
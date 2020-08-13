let get = createGetter() 
let set = createSetter() 

import {isObject,hasOwn,hasChanged} from '../utils/utils'
import {reactive} from './reactive'

function createGetter(){
    return function(target,name,receiver){
        let res = Reflect.get(target,name,receiver)
        if(isObject(res)){
            return reactive(res)
        }
        console.log('对这个对象进行了取值',target,name,receiver)
        return res
    }
}

function createSetter(){
    return function(target, key, value, receiver){
        // 需要判断是修改属性  还是增加属性 如果是原来的值 和新设置的值一样 什么都不做
        const hadkey = hasOwn(target,key)
        const oldValue = target[key] // 获取之前的值
        const result = Reflect.set(target, key, value, receiver)
        if(!hadkey){
            console.log('属性的新增操作',target,key)
        }else if(hasChanged(value,oldValue)){
            console.log('修改操作',target,key)
        }
        // 值没有变化什么都不需要做
        // console.log('对这个对象进行了设置值',target, key, value, receiver)
        return result
    }
}


export const mutablehandler= {
    get,
    set
}
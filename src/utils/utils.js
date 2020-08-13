
export function isObject(val){
    return typeof val ==='object'&& val!==null
}

export const hasOwn = (target,key)=>Object.prototype.hasOwnProperty.call(target,key)


export const hasChanged=(value,oldValue)=>value!==oldValue
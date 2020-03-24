# vue-composition-api

[official link](https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md)

install `yarn add @vue/composition-api`

注意事项:

1. 在使用`setup()`函数时要`return {}`， 将变量，方法写道对象里面

```js
setup() {
    let someprop = ref('default')
    
    return {
        someprop
    }
}
```

2. 对象，数组用 `reactive()` 来定义，字符串可以用`ref()`

```js
let someprop = ref('default')
const list = reactive([
      {
        name: "book1",
        price: 20
      }
    ]);
```

3. 在方法中修改属性的值时需要用到 `.value`

```js
const changeValue = ()=> {
    someprop.value = 'changed'
}
```

4. `computed`: 可以直接在 `reactive()` 中使用

```js
import { computed } from '@vue/composition-api'

const state = reactive({
    count:0,
    double: computed(()=> state.count *2)
})
```

5. 不同的数据，接口可以写成模块，按需引入
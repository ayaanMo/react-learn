## HOC遵循原则:
       1. 不要修改原始组件:不要去尝试通过prototype来重写原始组件的生命周期方法,一旦修改了原始组件,就失去了组件复用的意义;
       2. props保持一致:高阶组件再为子组件添加特性的同时,要保持子组件的原油props不受影响。传入的组件和返回的组件props上尽量保持一致;
       3. 保持可组合型;
       4. displayName:为了方便调式最常见的高阶组件命名方式是将子组件名字包裹起来;
       5. 不要在render部分使用高阶组件:render中的高阶组件会再每次render的时候重新mount,之前组件内部的state会丢失;
##  HOC可以用来做什么:
       1. 代码重用;
       2. 渲染劫持(Render Highjacking);
       3. state(状态)抽象和操作;
       4. props(道具)操作
##  HOC工厂实现:(两者都支持不同的方式操作WrappedComponent)
       1. Props Proxy(属性代理):
           例子中的WrappedComponent中实现的,这里的HOC通过render的方式返回一个WrappedComponent类型的React元素,还通过HOC接收到props属性;
           1) 操作props;
                可以读取、添加、编辑、删除传给WrappedComponent的props,但是再删除和编辑的时候要小心，要确保通过命名空间确保高阶组件中的props不会破坏WrappedComponent
           2) 通过Refs访问到组件实例;
                通过HOC中refs转发我们可以拿到整个组件实例
           3) 提取state(状态);
           4) 用其他元素包裹WrappedComponent;
       2. Inheritance Inversion(反向继承):
           1) 渲染劫持(Render Highjacking)
                 可以读取、添加、编辑、删除除渲染输出的任何React元素中的props；
                 读取并修改 render 输出的 React 元素树；
                 有条件地渲染元素树；
                 把样式包裹进元素树(就像在 Props Proxy(属性代理) 中的那样);
           2) 操作状态(state)
       3.命名
           使用HOC包裹组件的时候,会丢失原始WrappedComponent的名称，所以我们通常都会加一个displayName方便开发和调试
export default [
  {
    path: '/test',
    name: 'Test',
    icon: 'el-icon-s-home',
    children: [
      {
        path: '/test/xys',
        name: 'xysTest',
        children: [
          { path: '/test/xys/test1', icon: 'el-icon-s-home', name: 'testXysTest1', component: 'test/xys/test1' },
          { path: '/test/xys/test2', name: 'testXysTest2', component: 'test/xys/test2' },
          { path: '/test/xys/test3', name: 'testXysTest3', component: 'test/xys/test3' }
        ]
      },
      {
        path: '/test/other',
        name: 'otherTest',
        children: [
          { path: '/test/other/test1', name: 'testOtherTest1', component: 'test/other/test1' },
          { path: '/test/other/test2', name: 'testOtherTest2', component: 'test/other/test2' },
          { path: '/test/other/test3', name: 'testOtherTest3', component: 'test/other/test3' }
        ]
      },
    ]
  },
  {
    path: '/example',
    icon: 'el-icon-menu',
    name: '例子',
    children: [
      { path: '/example/sendCode', name: 'exampleSendCode', component: 'example/sendCode/main', meta: { title: '001发送验证码' } },
      { path: '/example/fullScreen', name: 'exampleFullScreen', component: 'example/fullScreen/main', meta: { title: '002全屏' } },
    ]
  },

]
export default {
  pages: [
    'pages/home/index', // 首页
    'pages/user/index', // 个人中心
    'pages/addShop/index', // 添加商品
    'pages/infoList/index',
    'pages/demoComponents/index',
    'pages/cate/index',  // 分类
    'pages/cateSub/index',  // 二级分类
    'pages/detailGoods/index', // 商品详情
    'pages/detail/index', // 商品详情 old
    'pages/index/index', // 首页 old
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '智慧社区',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: '#d81e06',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [{
      pagePath: 'pages/home/index',
      text: '首页',
      iconPath: "./asset/image/home.png",
      selectedIconPath: "./asset/image/home_selected.png",
    },{
      pagePath: 'pages/cate/index',
      text: '分类',
      iconPath: "./asset/image/cate.png",
      selectedIconPath: "./asset/image/cate_selected.png",
    },{
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "./asset/image/user.png",
      selectedIconPath: "./asset/image/user_selected.png",
    },
    {
      pagePath: 'pages/demoComponents/index',
      text: '公共组件',
      iconPath: "./asset/image/component.png",
      selectedIconPath: "./asset/image/component_selected.png",
    }]
  },
}

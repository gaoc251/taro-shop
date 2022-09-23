export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
    'pages/addShop/index',
    'pages/infoList/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: 'rgba(0, 0, 0, 0.6)',
    selectedColor: '#0281ff',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: "./asset/image/home.png",
      selectedIconPath: "./asset/image/home_selected.png",
    },{
      pagePath: 'pages/addShop/index',
      text: '添加商品',
      iconPath: "./asset/image/user.png",
      selectedIconPath: "./asset/image/user_selected.png",
    },{
      pagePath: 'pages/user/index',
      text: '我的',
      iconPath: "./asset/image/user.png",
      selectedIconPath: "./asset/image/user_selected.png",
    }]
  },
}

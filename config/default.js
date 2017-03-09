module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/myblog'
};

/**
 * port:程序启动要监听的端口号
 * session：express-session的配置信息
 * mongodb：mongodb的地址，myblog为db名
 */

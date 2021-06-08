/*
  @dest: 使用配置文件
  @Author: wanxiang
 */
module.exports = {
  npmUrl: 'https://registry.npmjs.org/shc-cli/latest',
  promptTypeList: [{
    type: 'list',
    message: '嘿，你个吊毛，快选择拉取的模版类型:',
    name: 'type',
    choices: [{
      name: 'mobile(移动端模版)',
      value: {
        url: '',
        gitName: 'vue-mobile-template',
        val: '移动端模版'
      }
    }, {
      name: 'web(web端模版)',
      value: {
        url: 'https://github.com/littleTreeme/vue-web-template.git',
        gitName: 'vue-web-template',
        val: 'web端模版'
      }
    }]
  }],
};

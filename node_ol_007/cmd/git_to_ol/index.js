var fn = require('../cmd.js');
var me = new fn();


me._cmd('git add ../')
  .then(function() {
    return me._cmd(`git commit -m "info:${Math.random()}"`)
  })
  .then(function() {
    return me._cmd('git push -u origin master')
  })
  .then(function() {
    console.log('上传git完成');
  });

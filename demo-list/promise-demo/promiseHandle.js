//这是一个Promise的简单例子
function promiseHandle (isSuccessed, timeout) {
  const p1 = new Promise((resolve, reject) => {
    console.log('new Promise执行了');
    setTimeout(() => {
      let condition = isSuccessed;
      if (condition) {
        resolve('resolved:返回数据');
      } else {
        reject('rejected:报错啦');
      }
    }, timeout);
  });

  p1.then(
    //success
    res => {
      console.log('res :>> ', res);
    },
    //failure
    err => {
      console.log('err :>> ', err);
    }
  );

  console.log('最后执行,反而在then方法回调之前执行...');
}

promiseHandle(true, 2000);
promiseHandle(false, 4000);

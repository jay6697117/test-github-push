// async函数 -- 例子
function timeout (ms) {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve('执行完了定时器');
    }, ms);
  });
  return promise;
}

async function asyncPrint (value, ms) {
  console.log('async function asyncPrint');
  const res = await timeout(ms);
  console.log(value);
  return res;
}

asyncPrint('hello world 111', 2000).then(res1 => {
  console.log('res1 :>> ', res1);
});

let obj = {
  foo: async function (value, ms) {
    console.log('obj async function');
    const res = await timeout(ms);
    console.log(value);
    return res;
  }
};

obj.foo('hello, world 222', 4000).then(res2 => {
  console.log('res2 :>> ', res2);
});

// apply_call_bind
const a = {
  name: 'Tom',
  age: 20,
  showInfo (str1, str2) {
    console.log(`name: ${this.name}, age: ${this.age}, str:${str1}, ${str2}`);
  }
};
const b = {
  name: 'B',
  age: 10,
  showInfo: a.showInfo
};
b.showInfo('bbb', 'hhh'); // b调用showInfo方法,故this指向b, name: B, age: 10, str:bbb,hhh
b.showInfo.call(a, 'aaa1', 'ggg1'); // 通过call改变this指向了a, 结果: name: Tom, age: 20, str:aaa, ggg
b.showInfo.apply(a, ['aaa2', 'ggg2']); // 通过call改变this指向了a, 结果: name: Tom, age: 20, str:aaa, ggg
console.log('-------------------------------------');
const fn = b.showInfo.bind(a, 'aaa3', 'ggg3'); // name: B, age: 10
fn();
console.log('-------------------------------------');
const fn1 = b.showInfo.bind(a); // name: B, age: 10
fn1('aaa4', 'ggg4');

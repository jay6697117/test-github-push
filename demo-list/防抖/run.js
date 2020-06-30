// import { debounce } from './debounce';
import debounce from './debounce';

const fn = () => {
  console.log('打印出结果啦!!!');
};
const foo = debounce(fn, 3000, false);
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();
foo();

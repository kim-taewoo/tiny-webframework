import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.set({ name: 'newname', age: 99 });
// interface props 를 ? 를 붙여 선택적으로 넣을 수 있게 할 수 있다.
user.set({});
console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
  console.log('change #1')
});
user.on('change', () => {
  console.log('change #2')
});
user.on('save', () => {
  console.log('Save triggered!')
});

user.trigger('change');

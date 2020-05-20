import { User } from './models/User';

const user = new User({  });

user.set({ name: 'NEW NAME' });
user.set({ age: 99 });

user.events.on('change', () => {
  console.log('changed!')
})

user.events.trigger('change')
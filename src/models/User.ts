interface UserProps {
  name?: string;
  age?: number;
}

// 아무런 인자도 받지 않고, 리턴하는 것도 없는 함수타입 정의
// () => {} 라고 해버리면 object 를 반환하는 게 되어버림에 주의
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // 이미 존재하거나 존재하지 않는 경우의 수에 따른 초기화
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }
}

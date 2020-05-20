import { Eventing } from './Eventing';


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// 아무런 인자도 받지 않고, 리턴하는 것도 없는 함수타입 정의
// () => {} 라고 해버리면 object 를 반환하는 게 되어버림에 주의

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

}

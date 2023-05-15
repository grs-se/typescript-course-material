interface UserProps {
  name: string;
  age: number;
  // Alternatively remove Partial in set() and reactive optional Props
  // name?: string;
  // age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  public get<K extends keyof UserProps>(propName: K): string | number | void {
    return this.data[propName];
  }

  public set(update: Partial<UserProps>): void {
    Object.assign(this.data, update);
  }
}

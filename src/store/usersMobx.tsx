import { makeAutoObservable } from 'mobx';
import { IUser } from '../components/UserList';

export interface IUserStore {
    users:IUser[],
    setUsers: (users: IUser[]) => void
    getUsers: () => IUser[]
}

export default class UsersStore implements IUserStore {

  constructor() {
    makeAutoObservable(this)
  }

  users:IUser[] = []

  setUsers = (users: IUser[]): void => {
    this.users = users
  }
  getUsers = (): IUser[] => {
     return this.users
  }
}
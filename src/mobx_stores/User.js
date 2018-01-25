import { observable, computed } from 'mobx'

class UserStore{
  @observable users = [
    {name: 'John', age: 40}
  ]

  @computed get countUsers(){
    return this.users.length
  }

  addUser(user){
    this.users.push(user)
  }
}

export default new UserStore()

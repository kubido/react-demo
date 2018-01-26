# REACT-DEMO
Sample raeact application for bootcamp students

## HOW TO MOBX
Since mobx using a Decorator, since CRA (`create-react-app`) is using ES6 by default and decorator only available for ES6. wee need to add babel plugin called `babel-plugin-transform-decorators-legacy`

### SETUP
* yarn eject
* yarn add babel-plugin-transform-decorators-legacy
* add in babel plugins in your `package.json` file
```js
  "babel": {
    "plugins": [
      "transform-decorators-legacy"
    ],
    ...
  }
```
* yarn add `mobx` `mobx-react`

### IMPLEMENTATION
* create a store using a class that contain `observable` and `computed` ps: you can do [more](https://mobx.js.org/refguide/api.html)
```js
import { observable, computed } from 'mobx'

class UserStore{
  // value that will be changed from observer
  @observable users = [
    {name: 'John', age: 40}
  ]

  // computed should be a getter and it will be return new value
  @computed get count(){
    return this.users.length
  }

  addUser(user){
    this.users.push(user)
  }
}

export default new UserStore()
```
* Your consumer `Component`
```js
import { observer } from 'mobx-react'
@observer class Mobx extends Component {
  ...
}
```
* import your store and make change from that.. ie: `UserStore.addUser({name: "John"})` it will change the state in user store. and update the value in your component since it's already using @observer decorator


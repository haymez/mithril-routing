import m from 'mithril';

export default class Login {

  constructor() {
    this.testing = m.prop('hey');
  }


  static view() {
    console.log(this.testing())
    return m('h1', 'Login page');
  }

}

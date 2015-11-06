import m from 'mithril';

export default class Layout {

  constructor() {}


  pageHelper(klass) {
    return {
      controller: klass,
      view:       ctrl => Layout.view(this, klass.view.call(ctrl))
    }
  }


  handleRoutes(routes) {
    for(let url in routes) {
      routes[url] = this.pageHelper(routes[url]);
    }
    return routes;
  }


  static view(ctrl, content) {
    return [
    m('h1', 'Layout'),
    content,
    ];
  }

}

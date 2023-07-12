import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HomeRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('question');
  }

  @action
  error() {
    console.log('error');
    this.intermediateTransitionTo('error');
  }
}

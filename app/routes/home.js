import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
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

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.length = model.length;
  }
}

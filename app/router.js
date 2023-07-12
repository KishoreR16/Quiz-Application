import EmberRouter from '@ember/routing/router';
import config from 'quiz/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('home');
  this.route('quiz', { path: '/quiz/:quiz_no' });
  this.route('results');
  this.route('loading');
  this.route('not-found');
  this.route('error');
});

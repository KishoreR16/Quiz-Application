import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class HomeController extends Controller {
  @tracked length;
  @service marks;

  get setLength() {
    this.marks.totalQuestions = this.length;
  }
}

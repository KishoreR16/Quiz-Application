import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class ResultsController extends Controller {
  @service marks;

  get score() {
    return this.marks.score;
  }
  @action
  setAnswer(id) {
    let previous;
    if (this.marks.map.has(id)) {
      previous = this.marks.map.get(id);
    }
    let className = '.' + id;
    $(className).each(function () {
      if ($(this).val() === previous) {
        $(this).prop('checked', true);
      }
    });
  }

  @action
  result(id, answer) {
    let value = this.marks.map.get(id);
    if (value === answer) {
      return 'Correct';
    } else {
      return 'Incorrect';
    }
  }
}

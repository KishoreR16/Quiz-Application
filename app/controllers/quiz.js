import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class QuizController extends Controller {
  @service marks;

  @action
  selected(id, answer) {
    let previous;
    let selected;

    $('.radio').each(function () {
      if ($(this).is(':checked')) {
        selected = $(this).val();
      }
    });

    if (this.marks.map.has(id)) {
      previous = this.marks.map.get(id);
    }
    if (selected != answer) {
      if (previous === answer) {
        this.marks.score -= 1;
      }
    } else {
      if (previous === answer) {
        this.marks.score += 0;
      } else {
        this.marks.score += 1;
      }
    }

    this.marks.map.set(id, selected);
  }

  @action
  show1(id, criteria) {
    if (id == criteria) {
      return true;
    } else {
      return false;
    }
  }

  @action
  show2(id) {
    if (id < this.marks.totalQuestions) {
      return true;
    } else {
      return false;
    }
  }

  @action
  previousQuestion(quiz_no) {
    // console.log('quiz no is ' + quiz_no);
    quiz_no = parseInt(quiz_no);
    return quiz_no - 1;
  }

  @action
  nextQuestion(quiz_no) {
    // console.log('quiz no is ' + quiz_no);
    quiz_no = parseInt(quiz_no);
    return quiz_no + 1;
  }

  @action
  score() {
    return this.marks.score;
  }

  @action
  setAnswer(id) {
    let previous;
    if (this.marks.map.has(id)) {
      previous = this.marks.map.get(id);
    }
    $('.radio').each(function () {
      if ($(this).val() === previous) {
        $(this).prop('checked', true);
      }
    });
  }
}

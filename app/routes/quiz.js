import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
export default class QuizRoute extends Route {
  @service store;
  @service marks;
  @tracked question_no;
  @tracked previous;
  async model(params) {
    const { quiz_no } = params;
    this.question_no = quiz_no;
    const data = await this.store.findAll('question');
    const question = data.find(({ id }) => id === quiz_no);
    return question;
  }
}

import Model, { attr } from '@ember-data/model';

export default class QuestionsModel extends Model {
  @attr question;
  @attr options;
  @attr answer;
}

import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MarksService extends Service {
  @tracked totalQuestions;
  @tracked score = 0;
  @tracked map = new Map();
}

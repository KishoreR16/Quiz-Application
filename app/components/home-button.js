import Component from '@glimmer/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class HomeButtonComponent extends Component {

    @service marks;
    
    @action
    clearService()
    {
        this.marks.totalQuestions=0;
        this.marks.score=0;
        this.marks.map.clear();
    }
}

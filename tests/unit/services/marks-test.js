import { module, test } from 'qunit';
import { setupTest } from 'quiz/tests/helpers';

module('Unit | Service | marks', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:marks');
    assert.ok(service);
  });
});

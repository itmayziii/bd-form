import { Form } from '../../../dist/form';

(() => {
    const testForm = new Form('#test-form', document);

    document.getElementById('disable-button').addEventListener('click', () => {
        testForm.disable();
    });

    document.getElementById('enable-button').addEventListener('click', () => {
        testForm.enable();
    });
})();
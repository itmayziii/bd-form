import { BdFormBuilder, GroupValidators } from '../../../dist/form';

(() => {
    const fb = new BdFormBuilder(document);
    const testForm = fb.group('test-form', {
        "first-name": "",
        "last-name": "",
        "option": fb.group('test-option[]', {
            "option-one": "",
            "option-two": "",
            "option-three": ""
        }, [GroupValidators.atLeastOneSelected]),
        "test-radio": fb.group('test-radio', {
            "test-radio": ""
        })
    });
    console.log(testForm);

    document.getElementById('disable-button').addEventListener('click', () => {
        testForm.disable();
    });
    //
    // document.getElementById('enable-button').addEventListener('click', () => {
    //     testForm.reset();
    // });
})();
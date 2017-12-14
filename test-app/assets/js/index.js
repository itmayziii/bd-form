import { BdFormBuilder, GroupValidators, ControlValidators } from '../../../dist/form';

(() => {
    const fb = new BdFormBuilder(document);
    const testForm = fb.group('test-form', {
        "first-name": {
            value: "",
        },
        "last-name": {
            value: "",
            validators: [ControlValidators.required]
        },
        "email": {
            email: "",
            validators: [ControlValidators.email]
        },
        "option": fb.group('test-option[]', {
            "option-one": "",
            "option-two": "",
            "option-three": ""
        }, [GroupValidators.atLeastOneSelected]),
        "test-radio": {
            validators: [ControlValidators.required]
        }
    });

    document.getElementById('disable-button').addEventListener('click', () => {
        testForm.disable();
    });
    //
    // document.getElementById('enable-button').addEventListener('click', () => {
    //     testForm.reset();
    // });
})();
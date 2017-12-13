import { BdFormControl } from "./form-control";

describe('form-control', () => {
    let formControl: BdFormControl;

    describe('constructor()', () => {
        it('should throw an error if the control can not be found in the DOM', () => {
            expect(() => new BdFormControl('throw-error-input', [], document)).toThrowError('BdFormControl: One or more form controls should be found with name throw-error-input');
        });

        it('should attach to the DOM on initialization', () => {
            const fakeInputTexts = createInputTextNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputTexts);
            formControl = new BdFormControl('test-input-text', [], document);
            expect(document.querySelectorAll).toHaveBeenCalled();
            expect(document.querySelectorAll).toHaveBeenCalledWith('[data-bd-form-control="test-input-text"]');
        });
    });

    describe('getValue()', () => {

        it('text inputs should return text values', () => {
            const fakeInputTexts = createInputTextNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputTexts);

            formControl = new BdFormControl('test-input-text', [], document);
            const actualValue = formControl.getValue();
            const expectedValue = 'Just some text';
            expect(actualValue).toBe(expectedValue);
        });

        it('checkbox inputs should return booleans', () => {
            const fakeInputCheckboxes = createInputCheckboxNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputCheckboxes);

            formControl = new BdFormControl('test-input-checkbox', [], document);
            const actualValue = formControl.getValue();
            const expectedValue = true;
            expect(actualValue).toBe(expectedValue);
        });

        it('radio inputs should return the selected radio value', () => {
            const fakeInputRadios = createInputRadioNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputRadios);

            formControl = new BdFormControl('test-input-radio', [], document);
            const actualValue = formControl.getValue();
            const expectedValue = 'radio-two';
            expect(actualValue).toBe(expectedValue);
        });

        it('select elements should return the selected value', () => {
            const fakeSelects = createSelectNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeSelects);

            formControl = new BdFormControl('test-select', [], document);
            const actualValue = formControl.getValue();
            const expectedValue = 'option-two';
            expect(actualValue).toBe(expectedValue);
        });

    });

    describe('setValue()', () => {

        it('text inputs should set the value property', () => {
            const fakeInputTexts = createInputTextNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputTexts);

            formControl = new BdFormControl('test-input-text', [], document);
            formControl.setValue('Spiderman Text Test');
            const actualValue = fakeInputTexts[0].value;
            const expectedValue = 'Spiderman Text Test';
            expect(actualValue).toBe(expectedValue);
        });

        it('checkbox inputs should set the checked property', () => {
            const fakeInputCheckboxes = createInputCheckboxNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputCheckboxes);

            formControl = new BdFormControl('test-input-checkbox', [], document);
            formControl.setValue(false);
            const actualValue = fakeInputCheckboxes[0].checked;
            const expectedValue = false;
            expect(actualValue).toBe(expectedValue);
        });

        it('radio inputs should set the checked property', () => {
            const fakeInputRadios = createInputRadioNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputRadios);

            formControl = new BdFormControl('test-input-radio', [], document);
            formControl.setValue('radio-one');
            const actualValue = fakeInputRadios[0].checked;
            const expectedValue = true;
            expect(actualValue).toBe(expectedValue);
        });

        it('select should set the correct option', () => {
            const fakeSelects = createSelectNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeSelects);

            formControl = new BdFormControl('test-select', [], document);
            formControl.setValue('option-three');
            const actualValue = fakeSelects[0].value;
            const expectedValue = 'option-three';
            expect(actualValue).toBe(expectedValue);
        });

    });

    describe('reset()', () => {

        it('should attach the correct classes', () => {
            const fakeTexts = createInputTextNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeTexts);

            formControl = new BdFormControl('test-input-text', [], document);
            formControl.reset();
            let actualValue = fakeTexts[0].classList.contains('bd-valid');
            let expectedValue = true;
            expect(actualValue).toBe(expectedValue);
            actualValue = fakeTexts[0].classList.contains('bd-pristine');
            expect(actualValue).toBe(expectedValue);
            actualValue = fakeTexts[0].classList.contains('bd-untouched');
            expect(actualValue).toBe(expectedValue);
        });

        it('should reset the original value', () => {
            const fakeInputRadios = createInputRadioNodeList();
            spyOn(document, 'querySelectorAll').and.returnValue(fakeInputRadios);

            formControl = new BdFormControl('test-input-radio', [], document);
            fakeInputRadios[0].checked = true;
            formControl.reset();

            // The value that we explicitly set to true
            let actualValue = fakeInputRadios[0].checked;
            let expectedValue = false;
            expect(actualValue).toBe(expectedValue);

            // The original value
            actualValue = fakeInputRadios[1].checked;
            expectedValue = true;
            expect(actualValue).toBe(expectedValue);
        });

    });

    function createInputTextNodeList() {
        const fakeInputText: HTMLInputElement = document.createElement('input');
        fakeInputText.type = 'text';
        fakeInputText.value = 'Just some text';
        fakeInputText.setAttribute('data-bd-form-control', 'test-input-text');

        return [fakeInputText];
    }

    function createInputCheckboxNodeList() {
        const fakeInputText: HTMLInputElement = document.createElement('input');
        fakeInputText.type = 'checkbox';
        fakeInputText.checked = true;
        fakeInputText.setAttribute('data-bd-form-control', 'test-input-checkbox');

        return [fakeInputText];
    }

    function createInputRadioNodeList() {
        const fakeInputRadioOne: HTMLInputElement = document.createElement('input');
        fakeInputRadioOne.type = 'radio';
        fakeInputRadioOne.value = 'radio-one';
        fakeInputRadioOne.checked = false;
        fakeInputRadioOne.setAttribute('data-bd-form-control', 'test-input-radio');
        const fakeInputRadioTwo: HTMLInputElement = document.createElement('input');
        fakeInputRadioTwo.type = 'radio';
        fakeInputRadioTwo.value = 'radio-two';
        fakeInputRadioTwo.checked = true;
        fakeInputRadioTwo.setAttribute('data-bd-form-control', 'test-input-radio');

        return [fakeInputRadioOne, fakeInputRadioTwo];
    }

    function createSelectNodeList() {
        const fakeOptionOne: HTMLOptionElement = document.createElement('option');
        fakeOptionOne.value = 'option-one';
        const fakeOptionTwo: HTMLOptionElement = document.createElement('option');
        fakeOptionTwo.value = 'option-two';
        const fakeOptionThree: HTMLOptionElement = document.createElement('option');
        fakeOptionThree.value = 'option-three';

        const fakeSelect: HTMLSelectElement = document.createElement('select');
        fakeSelect.setAttribute('data-bd-form-control', 'test-select');
        fakeSelect.appendChild(fakeOptionOne);
        fakeSelect.appendChild(fakeOptionTwo);
        fakeSelect.appendChild(fakeOptionThree);

        fakeSelect.value = 'option-two';

        return [fakeSelect];
    }
});
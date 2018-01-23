# BD-Form

## Overview
Inspired by the way Angular handles forms with the valid, pristine, and untouched classes and their counterparts. This library also aims to smooth out the inconsistencies in the HTML 
form APIs. This library does NOT use the native HTML validation so putting a `required` attribute in your HTML will not effect how this works. 

This library has concept of form groups and form controls. A control is an individual input/select/textarea field while a group is a group of controls. One important thing to know
is both form groups and form controls implement the same interface, so you can rely on some methods always being there. Here is the interface, it can also be found in */src/control-interface.ts*
```
    getValue(): any,

    getName(): string,

    disable(): void,

    enable(): void,

    reset(): void,

    isValid(): boolean,

    isPristine(): boolean,

    isUntouched(): boolean,

    isValid(): boolean,

    registerPristineListener?(callback: any): void,

    registerUntouchedListener?(callback: any): void,

    registerValidListener?(callback: any): void
```

Groups implement and additional interface to allow manipulation of the groups controls. Here is the interface, it cal also be found in */src/group-interface.ts*
```
    getControl(controlName: string): ControlInterface;

    addControl(control: ControlInterface): void;

    removeControl(controlName: string): void;
```

## Importing the library

### If you are using typescript
You can simply import from the source using the native *import* `import { BdFormBuilder } from 'bd-form/src';`

### If you are using ES6
You can import from the distribution code `import { BdFormBuilder } from 'bd-form/dist/form';`

### If you are manually putting this script on your pages
You can use the globally available object on the window `window['BD-Form'].BdFormBuilder`

## Using the library
The following code is assuming you are using typescript, but should be general enough to be applied to other uses.

1. Apply a data attribute in your HTML so that the library can hook into the DOM. The form element itself should get the group attribute while each input inside should get the control attribute.
You may also nest groups if that is what makes sense in your data model.
 * data-bd-form-group="*unique group name*"
 * data-bd-form-control="*field name*"
 
 i.e.
```html
    <form data-bd-form-group="contact-form">
        <label>First Name</label>
        <input type="text" data-bd-form-control="first-name">
        <label>Last Name</label>
        <input type="text" data-bd-form-control="last-name">
    </form>
```

2. Use the library to create the javascript side of the form, notice how the library needs `document` passed in.
i.e. 
```javascript
import { BdFormBuilder } from 'bd-form/src';
import { ControlValidators } from 'bd-form/src/validators/control-validators';

const formBuilder = new BdFormBuilder(document);

const contactForm = formBuilder.group('contact-form', {
    "first-name": {
        validators: [ControlValidators.required]
    },
    "last-name": {}
});
```

You may be asking what exactly did all of this do. To list off what you get out of this 
 1. Classes in you DOM to tell you the valid, touched, and pristine state of your fields.
 2. Control in your javascript using the methods like `contactForm.getControl('first-name').disable()`
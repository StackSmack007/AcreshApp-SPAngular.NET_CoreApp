import { ValidatorFn, AbstractControl } from '@angular/forms';

export function sameFieldsValidator(valueFunc: ()=>any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        return control.value !== valueFunc() ? { 'mismatch': true } : null;
    };
}
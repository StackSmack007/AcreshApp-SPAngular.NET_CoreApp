import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export let takenNames = [];
export function takenNameValidatorAsync(isNameTakenMethod: (str: string) => Observable<boolean>, allowedNonChecked: string[] = [], caseInsensitive = true): ValidatorFn {
    return (control: AbstractControl): null | { [key: string]: any; } => {
        const { value } = control;
        const res_val = null;
        const res_inv = { 'valueTaken': control.value };
        const res_nocheck = { 'valueTakenNoCheck': false };
        console.log(allowedNonChecked);
        if (control.invalid || value === "") { return res_nocheck }
        if ((!caseInsensitive && allowedNonChecked.includes(value)) ||
            (caseInsensitive && allowedNonChecked.some(x => x.toLowerCase() === value.toLowerCase()))) {
            return res_val
        }
        if ((!caseInsensitive && takenNames.includes(value)) ||
            (caseInsensitive && takenNames.some(x => x.toLowerCase() === value.toLowerCase()))) {
            return res_inv
        }
        isNameTakenMethod(value).subscribe(answ => {
            if (!answ) {
                return res_val;
            }
            takenNames.push(value);
            control.updateValueAndValidity();
            console.log("tested but taken", takenNames);
        });
    };
}
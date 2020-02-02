import { ValidatorFn, AbstractControl } from '@angular/forms';

export function takenValueValidator<T>(takenValues: T[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: T } | null => {
        return takenValues.includes(control.value) ? { 'valueTaken': control.value } : null;
    };
}
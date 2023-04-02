import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

export const wordLengthValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const minWordLength = control.get('minWordLength');
  const maxWordLength = control.get('maxWordLength');

  if(!minWordLength || !maxWordLength || !minWordLength.value || !maxWordLength.value) {
    return null;
  }

  if(minWordLength.value > maxWordLength.value) {
    return {minWordLengthGreaterThanMaxWordLength: true}
  }
  
  return null;
};

@Directive({
  selector: '[wordLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: WordLengthValidatorDirective, multi: true }]
})
export class WordLengthValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    return wordLengthValidator(control);
  }
}

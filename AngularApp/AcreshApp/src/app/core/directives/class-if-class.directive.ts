import { Directive, ElementRef, Input, DoCheck, HostListener } from '@angular/core';

const splitArrToClasses = (str: string) => str.split(' ').filter(x => !x.includes(' '));

@Directive({
  selector: '[nshClassIfClass]'
})
export class ClassIfClassDirective implements DoCheck {
  //Has two checks one imediate after input is given and one randomly done on some time intervals that will catch async delayed validations...
  //If applied on non input it will work but only with longer pool check./DoCheckx
  private currentClassState: string;
  /*
    [0,1][]
    [0] are all classes that will be attached or removed if [0] is present or not!
    [1] are all classes that need to be present!
    every rule will either attach or remove all classes of [1]
    order matters last one wins
  */
  @Input('nshClassIfClass')
  rules: [string, string][] = null

  test;
  constructor(private el: ElementRef) {
    this.test = el.nativeElement.classList;
  }

  private get elmntClassList() {
    return this.el.nativeElement.classList;
  }

  private get getClassyRules(): { provided: string[], required: string[] }[] {
    return this.rules.map(x => (
      {
        provided: splitArrToClasses(x[0]),
        required: splitArrToClasses(x[1]),
      }
    ))
  }

  ngDoCheck() {
    {
      this.updateClasses()
    }
  }

  @HostListener("change")
  imediateCheck() {
    setTimeout(() => this.updateClasses(), 1000);
  }

  updateClasses() {
    if (this.rules === null || this.elmntClassList.value === this.currentClassState) return;

    this.getClassyRules.forEach(({ required, provided }) => {
      if (required.some(x => !this.elmntClassList.contains(x))) {
        const classesToRemove = provided.filter(x => this.elmntClassList.contains(x));
        return this.elmntClassList.remove(...classesToRemove)
      }
      const classesToAdd = provided.filter(x => !this.elmntClassList.contains(x));
      this.elmntClassList.add(...provided.filter(x => classesToAdd))
    });
    this.currentClassState = this.elmntClassList.value;
  }
}
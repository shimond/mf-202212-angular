import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[appShowIfAuth]',
  standalone: true
})
export class ShowIfAuthDirective implements OnInit, OnDestroy {

  private sub = new Subscription();
  constructor(
    private cd: ChangeDetectorRef,
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

  }

  ngOnInit(): void {
    const s = this.authService.isAuth$.pipe(
      distinctUntilChanged()).subscribe(x => {
        if (x) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
        this.cd.detectChanges();
      });

    this.sub.add(s);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}


// @Input() otherColor = 'blue';
//   @HostBinding('style.color') color = 'red';

//   @HostListener('click') onClick() {
//     this.color = this.otherColor;
//   }

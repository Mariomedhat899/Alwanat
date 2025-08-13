import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
 
  constructor(private translate: TranslateService) {}
  toEmail = 'alwanatgroup@gmail.com';
 facebookHref ='https://www.facebook.com/AlwanatAcademy'
  whatsappNumber = '+201033100598';
  whatsappMessage = 'Hello, I would like to know more about your services.';

get whatsappHref(): string {
  const number = this.whatsappNumber.replace(/\+/g, ''); // remove +
  return `https://wa.me/${number}?text=${encodeURIComponent(this.whatsappMessage)}`;
}



 get mailtoHref(): string {
    const subject = this.translate.instant('contact.mailtoSubject');
    const body = this.translate.instant('contact.mailtoBody');
    return `mailto:${this.toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  get gmailHref(): string {
    const subject = this.translate.instant('contact.mailtoSubject');
    const body = this.translate.instant('contact.mailtoBody');
    // Gmail compose fallback
    return `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(this.toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  openMailto(): void {
    window.location.href = this.mailtoHref;
  }
}

import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { siteContact } from '../../site-contact';

@Component({ selector: 'app-contact', standalone: true, imports: [ReactiveFormsModule], templateUrl: './contact.component.html', styleUrl: './contact.component.scss' })
export class ContactComponent {
  sent = signal(false);
  form;
  info = [
    { label: 'Call Us', value: siteContact.phone, href: `tel:${siteContact.phoneLink}`, d: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z' },
    { label: 'Email Now', value: siteContact.email, href: `mailto:${siteContact.email}`, d: 'M3 6h18v12H3zM3 7l9 7 9-7' },
    { label: 'Address', value: '7510, Brand Tower, New York, USA', href: 'https://www.openstreetmap.org/?mlat=40.715&mlon=-74.0#map=14/40.715/-74.0', d: 'M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' }
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  invalid(c: 'name' | 'email' | 'message'): boolean { const f = this.form.controls[c]; return f.invalid && (f.touched || f.dirty); }
  submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.sent.set(true); this.form.reset();
  }
}

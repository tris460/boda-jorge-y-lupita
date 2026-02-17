import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  imports: [FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit, OnDestroy {
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private interval: any;

  formData = {
    name: '',
    attending: null as string | null,
    guests: '',
    message: ''
  };
  showErrors = false;
  showConfirmation = false;
  isLoading = false;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startCountdown() {
    const weddingDate = new Date('2026-06-06T19:30:00').getTime();
    
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance > 0) {
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      } else {
        this.days = this.hours = this.minutes = this.seconds = 0;
      }
    }, 1000);
  }

  onSubmit() {
    this.showErrors = true;
    const isNameValid = this.formData.name && this.formData.name.trim() !== '';
    const isAttendingValid = this.formData.attending !== null;
    
    if (isNameValid && isAttendingValid) {
      this.sendToGoogleSheets();
    }
  }

  isNameInvalid(): boolean {
    return this.showErrors && (!this.formData.name || this.formData.name.trim() === '');
  }

  isAttendingInvalid(): boolean {
    return this.showErrors && this.formData.attending === null;
  }

  resetForm(): void {
    this.formData = {
      name: '',
      attending: null,
      guests: '',
      message: ''
    };
    this.showErrors = false;
    this.showConfirmation = false;
  }

  isFormValid(): boolean {
    const isNameValid = !!(this.formData.name && this.formData.name.trim() !== '');
    const isAttendingValid = this.formData.attending !== null;
    return isNameValid && isAttendingValid;
  }

  sendToGoogleSheets(): void {
    this.isLoading = true;
    const baseUrl = 'https://script.google.com/macros/s/AKfycbyPQdcxtxvLRVFbW0a4btvZU1RyNrS9zlYfKk0H8mI2a7UYULjk3Ciz0yixjX48XCxq/exec';
    const params = new URLSearchParams({
      nombre: this.formData.name,
      asistencia: this.formData.attending === 'true' ? 'Sí' : 'No',
      invitados: this.formData.guests || '1',
      mensaje: this.formData.message || 'Sin mensaje',
      fecha: new Date().toLocaleString('es-MX')
    });
    const webhookUrl = `${baseUrl}?${params.toString()}`;

    fetch(webhookUrl, {
      method: 'GET',
      mode: 'no-cors'
    }).then(() => {
      setTimeout(() => {
        this.isLoading = false;
        this.showConfirmation = true;
      }, 1500);
    }).catch(error => {
      console.error('Error:', error);
      setTimeout(() => {
        this.isLoading = false;
        this.showConfirmation = true;
      }, 1500);
    });
  }
}
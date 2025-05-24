import { Component, Input } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'lda-spinner',
  template: `
    <div class="spinner-overlay" *ngIf="isLoading">
      <div class="spinner-container">
        <div class="loader"></div>
        <p>{{ message }}</p>
      </div>
    </div>

  `,
  imports: [
    NgIf
  ],
  styles: `
    .spinner-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }

    .spinner-container {
      text-align: center;
    }

    .loader {
      border: 8px solid #f3f3f3;
      border-top: 8px solid #3498db;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
})
export class SpinnerComponent {
  @Input() isLoading = false;
  @Input() message = 'Loading...';
}

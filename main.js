'use strict';

var inputs = [
  '.mat-input input[type="text"]',
  '.mat-input input[type="email"]',
  '.mat-input input[type="password"]',
  '.mat-input input[type="number"]',
]

var inputElements = document.querySelectorAll(inputs.join(', '));

for (var index = 0; index < inputElements.length; index++) {
  inputElements[index].addEventListener('focus', function() {
    this.parentElement.classList.add('active')
    this.parentElement.classList.add('focus')
  })
  
  inputElements[index].addEventListener('blur', function() {
    this.parentElement.classList.remove('focus')
    if (this.value == '') {
      this.parentElement.classList.remove('active')
    }
  })
}

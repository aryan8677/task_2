function justOne(check) {
    const checkboxes = document.getElementsByName('check') 
    checkboxes.forEach((el) => el !== check ? el.checked = false : null);
  }
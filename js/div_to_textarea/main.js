document.onkeydown = function(e) {
  if (e.keyCode == 27) { 
    cancel();
    return false;
  }

  if (e.ctrlKey && e.keyCode == 69) { // или можно использовать 'E'.charCodeAt(0) с заглавной буквой латинского алфавита
    edit();
    return false;
  }

  if (e.ctrlKey && e.keyCode == 83) {
    save();
    return false;
  }
}

function edit() {
  div.style.display = 'none';
  textarea.value = div.innerHTML;
  textarea.style.display = 'block';
  textarea.focus();
}

function save() {
  textarea.style.display = 'none';
  div.innerHTML = textarea.value;
  div.style.display = 'block';
}

function cancel() {
  textarea.style.display = 'none';
  div.style.display = 'block';
}
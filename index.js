function addingEventListener() {
  const input = document.getElementById('button');

  function clickAlert() {
    alert('I was clicked!');
  }

  input.addEventListener('click', clickAlert);
}

addingEventListener(); // ← Make sure to call the function

let btn1 = document.querySelector('button');
    btn1.addEventListener('click', mydemo);

    function mydemo() {
      let val = document.getElementById('name').value;
      alert(val + ', you are registered.');
    }
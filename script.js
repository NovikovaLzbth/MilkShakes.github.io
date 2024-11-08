var modal = document.getElementById("myModal");
var btn = document.getElementById("OrderNow");
var span = document.getElementsByClassName("close")[0];
var deliverySelect = document.getElementById('delivery');
var addressField = document.getElementById('address');
var addressLabel = document.getElementById('address-label');
var orderForm = document.getElementById('orderForm');
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab');


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

deliverySelect.addEventListener('change', () => {
  if (deliverySelect.value === 'delivery') {
    addressField.style.display = 'block';
    addressLabel.style.display = 'block';
  } else {
    addressField.style.display = 'none';
    addressLabel.style.display = 'none';
  }
});

orderForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let email = document.getElementById('email').value;
  let address = document.getElementById('address').value;


  if (name === "" || phone === "" || email === "") {
    alert("Пожалуйста, заполните все поля.");
    return; // Прерываем выполнение, если поля не заполнены
  }

  if (deliverySelect.value === 'delivery' && address === "") {
    alert("Пожалуйста, укажите адрес доставки.");
    return;
  }

  alert('Заказ оформлен! Менеджер свяжется с Вами для уточнения деталей.');
  modal.style.display = "none"; // Закрываем модальное окно после отправки
});


tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    tabButtons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    tabContents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
  });
});

// Activate the first tab by default
tabButtons[0].click();

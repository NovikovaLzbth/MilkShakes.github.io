var modal = document.getElementById("myModal");
var btn = document.getElementById("OrderNow");
var span = document.getElementsByClassName("close")[0];
var deliverySelect = document.getElementById('delivery');
var addressField = document.getElementById('address');
var addressLabel = document.getElementById('address-label');
var orderForm = document.getElementById('orderForm');


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
  // Здесь можно добавить код для обработки данных формы
  alert('Заказ оформлен!');
  modal.style.display = "none"; // Закрываем модальное окно после отправки
});



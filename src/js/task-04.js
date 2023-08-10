// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = 0;
const valueSpan = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

valueSpan.textContent = counterValue;

incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = parseInt(valueSpan.textContent) + 1;
});

decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = parseInt(valueSpan.textContent) - 1;
});

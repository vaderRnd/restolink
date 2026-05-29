// Год основания (не меняется)
const startYear = 2025;
// Текущий год
const currentYear = new Date().getFullYear();
// Элемент для вставки
const yearElement = document.getElementById("copyright");

// Если текущий год больше стартового, показываем диапазон
if (currentYear > startYear) {
  yearElement.textContent = `${startYear}–${currentYear}`;
} else {
  yearElement.textContent = startYear; // Если ещё 2025 год
}

function getEstimate() {
  const item = document.getElementById('item').value;
  const result = document.getElementById('result');

  if (!item) {
    result.textContent = "Please enter an item.";
    return;
  }

  const fakeValue = Math.floor(Math.random() * 1000) + 50;
  result.textContent = `Estimated value of ${item}: $${fakeValue}`;
}

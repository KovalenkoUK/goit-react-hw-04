export function setupCounter(button) {
  let count = 0;
  button.innerHTML = `Count: ${count}`;
  button.addEventListener('click', () => {
    count += 1;
    button.innerHTML = `Count: ${count}`;
  });
}
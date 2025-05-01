function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    const display = document.getElementById('display');
    try {
      const expression = display.value;
      const result = eval(expression);
      display.value = result;
      addToHistory(`${expression} = ${result}`);
    } 
    catch (e) {
      alert('Invalid expression');
    }
  }
  
  function addToHistory(entry) {
    const historyList = document.getElementById('historyList');
    const li = document.createElement('li');
    li.textContent = entry;
    historyList.prepend(li);
  }
  
  function toggleHistory() {
    const historyList = document.getElementById('historyList');
    const toggleBtn = document.getElementById('toggleHistoryBtn');
  
    historyList.classList.toggle('collapsed');
    toggleBtn.textContent = historyList.classList.contains('collapsed') ? 'Read More' : 'Show Less';
  }
  
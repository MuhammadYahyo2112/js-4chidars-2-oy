

    let count = 0;

    const numberInput = document.getElementById("numberInput");
    const countDisplay = document.getElementById("countDisplay");
    const sendBtn = document.getElementById("sendBtn");
    const decreaseBtn = document.getElementById("decreaseBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const colorPicker = document.getElementById("colorPicker");

    sendBtn.addEventListener("click", () => {
      let inputValue = parseInt(numberInput.value);
      if (!isNaN(inputValue)) {
        count = inputValue;
        countDisplay.innerText = count;
      }
    });

    increaseBtn.addEventListener("click", () => {
      count++;
      countDisplay.innerText = count;
    });

    decreaseBtn.addEventListener("click", () => {
      count--;
      countDisplay.innerText = count;
    });

    colorPicker.addEventListener("input", () => {
      let selectedColor = colorPicker.value;
      document.body.style.backgroundColor = selectedColor;
    });

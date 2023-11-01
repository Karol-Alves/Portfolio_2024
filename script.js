function typeWriter(text, elementId, speed) {
    const textElement = document.getElementById(elementId);
    let textIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentText = text.substring(0, textIndex);
      textElement.textContent = currentText;
      textIndex++;
  
      if (currentText === text) {
        isDeleting = true;
        setTimeout(erase, 1000); 
      }
    }
  
    function erase() {
      const currentText = text.substring(0, textIndex);
      textElement.textContent = currentText;
      textIndex--;
  
      if (currentText === '') {
        isDeleting = false;
        textIndex = 0;
      }
  
      if (!isDeleting) {
        setTimeout(type, speed);
      } else {
        setTimeout(erase, speed);
      }
    }
  
    setInterval(function() {
      if (!isDeleting && textIndex <= text.length) {
        type();
      } else if (isDeleting && textIndex >= 0) {
        erase();
      }
    }, speed);
  }
  
  typeWriter('Bem-vindo ao meu portfólio__', 'log', 300);
  
document.addEventListener('DOMContentLoaded', () => {
  let screen = document.querySelector('#screen');

  //Array de elementos que recebe uma listener
  let listenerBtn = [];

  //teclas adicionais do teclado
  let btnResult = document.querySelector('#result');
  let btnclearInput = document.querySelector('#clearInput');
  let btnBackSpace = document.querySelector('#backspace');

  listenerBtn.push(document.querySelector('#point'));

  //teclas dos operadores
  listenerBtn.push(document.querySelector('#sum'));
  listenerBtn.push(document.querySelector('#subtraction'));
  listenerBtn.push(document.querySelector('#division'));
  listenerBtn.push(document.querySelector('#multiplication'));

  //teclas númericas da calculadora
  listenerBtn.push(document.querySelector('#num0'));
  listenerBtn.push(document.querySelector('#num1'));
  listenerBtn.push(document.querySelector('#num2'));
  listenerBtn.push(document.querySelector('#num3'));
  listenerBtn.push(document.querySelector('#num4'));
  listenerBtn.push(document.querySelector('#num5'));
  listenerBtn.push(document.querySelector('#num6'));
  listenerBtn.push(document.querySelector('#num7'));
  listenerBtn.push(document.querySelector('#num8'));
  listenerBtn.push(document.querySelector('#num9'));

  //Adicionando evento de click
  for (let i = 0; i < listenerBtn.length; i++) {
    listenerBtn[i].addEventListener('click', showScreenValue);
  }

  btnResult.onclick = () => {
    checkResult();
  };

  const checkResult = () => {
    try {
      let aux = screen.value.substring(
        screen.value.length - 1,
        screen.value.length
      );
      if (checkOperator(aux)) {
        backspace();
      }

      let calculateValue = eval(screen.value); //calcular o conteúdo da string
      if (calculateValue || calculateValue == '0') {
        screen.value = calculateValue;
      } else {
        throw 'erro';
      }
    } catch (e) {
      console.error(e);
    }
  };

  function showScreenValue() {
    if (checkOperator(this.value)) {
      let aux = screen.value.substring(
        screen.value.length - 1,
        screen.value.length
      );
      //subtituir o valor do operador pelo atual
      if (checkOperator(aux)) {
        backspace();
      }
    }
    if (this.value) {
      screen.value += this.value;
    }
  }

  btnBackSpace.onclick = ()=> {
    backspace();
  };

  const backspace = () => {
    if (screen.value.length > 0) {
      let aux = screen.value.substring(0, screen.value.length - 1);
      screen.value = aux;
    }
  };

  btnclearInput.onclick =()=> {
    screen.value = '';
  };

  const checkOperator=(value)=> {
    switch (value) {
      case '+':
        return true;
      case '-':
        return true;
      case '*':
        return true;
      case '/':
        return true;

      default:
        return false;
    }
  }
});

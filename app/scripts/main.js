let lhr = 0;
let rhr = 0;
let operation = 0;


function runEquals() {
  evaluate();

}

function valueButton(val) {
  if(!lhr) {
    lhr = val;
  } else if (!operation) {
    lhr *= 10;
    lhr += val;
  } else if (!rhr) {
    rhr = val;
  } else if (rhr) {
    rhr *= 10;
    rhr += val;
  }
    
  render();

}

function actionButton(val) {
  if(operation) {
    evaluate();
  }
  operation = val;
      

}

function reset() {
  lhr = 0;
  rhr = 0;
  operation = 0;
  render();

}

function evaluate() {
  switch (operation) {
    // 0 is add
    case 'a':
      lhr += rhr;
      rhr = 0;
      break;
    // 1 is subtract
    case 's':
      lhr -= rhr;
      rhr = 0;
      break;
    // 2 is multiply
    case 'm':
      lhr *= rhr;
      rhr = 0;
      break;
    // 3 is divide
    case 'd':
      lhr /= rhr;
      rhr = 0;
      break;
    defualt:
      break;
      
  }
    render();

}



function render() {
  if(!rhr) {
    $('#display').html(lhr);
  } else {
    $('#display').html(rhr);
  }

}

reset();

var grad = new Date("08/02/2019"), // in mm/dd/yyyy
  digit0 = $('#digit-0');
  digit1 = $('#digit-1'),
  digit2 = $('#digit-2'),
  digit3 = $('#digit-3'),
  digit4 = $('#digit-4'),
  digit5 = $('#digit-5'),
  digit6 = $('#digit-6'),
  digit7 = $('#digit-7'),
  digit8 = $('#digit-8'),
  digit9 = $('#digit-9'),
  digit10 = $('#digit-10');

function renderDigit(container, number) {
  var matrix;
  switch(number) {
    case 0:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 1:
      matrix = [
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 2:
      matrix = [
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true
      ];
      break;
    case 3:
      matrix = [
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true
      ];
      break;
    case 4:
      matrix = [
        true, false, false, false,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 5:
      matrix = [
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true
      ];
      break;
    case 6:
      matrix = [
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 7:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 8:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 9:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
  }
  var children = container.children();
  var len = matrix.length;
  for (var i = 0; i < len; i++) {
    children.eq(i).toggleClass('on', matrix[i]);
  }
}

function render() {
  var now = new Date(),
    diff = String(grad.getTime() - now.getTime()),
    len = diff.length;


    diff = (grad.getTime() - now.getTime())/1000;
    let days = parseInt(diff/86400);
    let rem = diff % 86400;
    let hours = parseInt(rem/3600);
    rem = rem % 3600;
    let minutes = parseInt(rem / 60);
    rem = parseInt(rem % 60);

    console.log(days, hours, minutes, rem);
    // console.log(grad.getTime() - now.getTime())


  // renderDigit(digit0, Number(diff.charAt(len-1)));
  // renderDigit(digit1, Number(diff.charAt(len-2)));
  // renderDigit(digit2, Number(diff.charAt(len-3)));

  // seconds
  renderDigit(digit3, parseInt(rem%10));
  renderDigit(digit4, parseInt(rem/10));

  // minutes
  renderDigit(digit5, parseInt(minutes%10));
  renderDigit(digit6, parseInt(minutes/10));
  
  // hours
  renderDigit(digit7, parseInt(hours%10));
  renderDigit(digit8, parseInt(hours/10));
  
  // days
  renderDigit(digit9, parseInt(days%10));
  renderDigit(digit10, parseInt(days/10));
  
  requestAnimationFrame(render);
}

requestAnimationFrame(render);
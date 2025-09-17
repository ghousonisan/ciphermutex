// function showAnswer(num) {
//     let answers = document.querySelectorAll('.answer' + num);
//     answers.forEach(el => {
//         el.style.display = (el.style.display === 'block') ? 'none' : 'block';
//     });
// }
// function showAnswer(num) {
//     let answers = document.querySelectorAll('.answer' + num);
//     answers.forEach(el => {
//         el.style.display = (el.style.display === 'block') ? 'none' : 'block';
//     });
//   document.querySelectorAll('.answer' + num).forEach(el => {
//     if (el.classList.contains('show')) {
//       el.classList.remove('show');
//       el.classList.add('hide');
//     } else {
//       el.classList.remove('hide');
//       el.classList.add('show');
//     }
//   });
// }
function showAnswer(num) {
  let answers = document.querySelectorAll('.answer' + num);
  let arrow = document.querySelector('.arrow' + num);

  answers.forEach(el => {
    el.classList.toggle('show');
  });

  if (arrow) {
    arrow.classList.toggle('rotate');
  }
}


const $questionList = document.querySelectorAll('li'); //catch all question from question-list
// console.log(questionList);
const $input = document.getElementsByClassName('search') //catch input
console.log($input.value);

// const findAvailableAnswer = () => {

//     $questionList.forEach(li => {
//         if ($input.value.toLowerCase() !== -1) {
//             li.style.display = 'block';
//         } else {
//             li.style.display = 'none';
//         }
//     });
// };


$input.addEventListener('keyup', findAvailableAnswer);
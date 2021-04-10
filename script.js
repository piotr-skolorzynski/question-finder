const $questionList = document.querySelectorAll('.question-list li'); //catch all question from question-list
// console.log(questionList);
const $input = document.getElementById('search') //catch input

const findAvailableAnswer = (e) => {
    $questionList.forEach(li => {
        if (li.textContent.toLowerCase().indexOf(e.target.value.toLowerCase())!== -1) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }
    });
};

$input.addEventListener('keyup', findAvailableAnswer);
const $questionList = document.querySelectorAll('.question-list li'); //catch all questions from question-list
// console.log(questionList);
const $input = document.getElementById('search'); //catch input
const $popup = document.querySelector('.popup'); //catch popup
const $showBtns = document.querySelectorAll('.showBtn'); //catch all buttons with class showBtn

const findAvailableAnswer = (e) => {
    $questionList.forEach(li => {
        if (li.textContent.toLowerCase().indexOf(e.target.value.toLowerCase())!== -1) {
            li.style.display = 'flex';
        } else {
            li.style.display = 'none';
        }
    });
};

const closePopup = () => {
    $popup.style.display = 'none';
    $popup.innerHTML = '';
};

const showAnswer = (e) => {
    $popup.style.display = 'flex';
    const liDataSet =  e.target.closest('li').getAttribute('data-num');
    const answerContent = document.getElementById(liDataSet).innerHTML;
    console.log(answerContent);
    $popup.innerHTML = answerContent;
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('closeBtn');
    closeBtn.textContent = 'Zamknij';
    $popup.appendChild(closeBtn);
    closeBtn.addEventListener('click', closePopup);
};

const listenShowBtns = () => {
    $showBtns.forEach(btn => {
        btn.addEventListener('click', showAnswer);
    });
};

document.addEventListener('DOMContentLoaded', listenShowBtns);
$input.addEventListener('keyup', findAvailableAnswer);
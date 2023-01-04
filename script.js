const applicantForm = document.getElementById('travelData')
const inputText = document.getElementById('output');

// Проверяем, заполнено ли поле - НЕ РАБОТАЕТ!!
function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('button').disabled = !isValid
}
applicantForm.addEventListener('input', checkValidity)


function handleFormSubmit(event) {
    event.preventDefault(); //Просим форму не отправлять данные самостоятельно
    serializeForm(applicantForm);// Собираем данные из формы

}
applicantForm.addEventListener('submit', handleFormSubmit, )


// collect names and values from form
let data = [];
function serializeForm(formNode) {
    const { elements } = formNode
    data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const {name, value} = element

            return {name, value}
        })
// function printTravelHistory
    function printTravelHistory() {
        let outputCity;
        let outputCountry;
        let outputBudget;
        let outputDateStart;
        let outputDateEnd;
        let outputPerson;
        let outputTransfer;

        data.forEach(function (value, index, array) {
            if(value.name === 'city')outputCity = value.value;
            if(value.name === 'country') outputCountry = value.value;
            if(value.name === 'budget') outputBudget = value.value;
            if(value.name === 'date_start') outputDateStart = value.value;
            if(value.name === 'date_end') outputDateEnd = value.value;
            if(value.name === 'person') outputPerson = value.value;
            if(value.name === 'transfer') outputTransfer = value.value;
        }
        )
        inputText.innerHTML = `<b>From Haifa to ${outputCity} , ${outputCountry}</b><br>
        Expected budget: ${outputBudget} ILS <br>
        ${outputDateStart} - ${outputDateEnd} | ${outputPerson} persons | ${outputTransfer}`;
    }
    localStorage.setItem('travelData', JSON.stringify(data));
    printTravelHistory();

    }



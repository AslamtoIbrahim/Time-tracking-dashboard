const times = document.querySelectorAll('.times');
const hobyNames = document.querySelectorAll('.hoby-name');
const periods = document.querySelectorAll('.period');
const previouses = document.querySelectorAll('.previous');
const regularls = ['day', 'month', 'year'];

times[1].style.color = 'white';
showDeails();
function showDeails(type = "week") {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                hobyNames[index].textContent = item.title;
                if (type == 'day') {
                    periods[index].textContent = `${item.timeframes.daily.current}hrs`;
                    previouses[index].textContent = `Last ${type} - ${item.timeframes.daily.previous}hrs`;
                } else if (type == 'week') {
                    periods[index].textContent = `${item.timeframes.weekly.current}hrs`;
                    previouses[index].textContent = `Last ${type} - ${item.timeframes.weekly.previous}hrs`;
                } else {
                    periods[index].textContent = `${item.timeframes.monthly.current}hrs`;
                    previouses[index].textContent = `Last ${type} - ${item.timeframes.monthly.previous}hrs`;
                }
            });

        })
        .catch(error => console.error('Error:', error));
}


// fetch data after clicking on the text field
times.forEach((element , index) => {
    element.addEventListener('click', function () {
        resetColors();
        this.style.color = 'white';
        showDeails(regularls[index]);
    });
});

// rest the colors of the side text buttons
function resetColors() {
    times.forEach(time => {
        time.style.color = '';
    });
}
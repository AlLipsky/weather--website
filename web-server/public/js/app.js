

fetch('http://puzzle.mead.io/puzzle').then(res => {
    res.json().then(
        data => {
            console.log(data);

        }
    )

})


const search = document.querySelector('input')
const weatherForm = document.querySelector('form');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;
    message1.textContent = 'Loading'
    fetch(`/weather?location=${location}`).then(
    response => {
        response.json().then(
            data => {
              message1.textContent = data.location  
              message2.textContent = data.forecast
                console.log(data);
                
            }
        )
    }
).catch(error => {
    message2.textContent = data.error}
)
})
 


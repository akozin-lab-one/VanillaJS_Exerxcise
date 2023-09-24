let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        // console.log(styles);
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++
        } else {
            count = 0;
        }

        // if (count < 0) {
        //     value.style.color = 'green'
        // } else if (count > 0) {
        //     value.style.color = 'blue'
        // } else {
        //     value.style.color = '#222'
        // }
        value.style.color =
            count === 0 ?
            '#222' :
            count < 0 ?
            'red' :
            count > 0 ?
            'green' :
            '#222';

        // count === 0 ? value.style.color = '#222' : count < 0 ? value.style.color = 'red' : count > 0 ? value.style.color = 'green'
        value.textContent = count;
    })
})
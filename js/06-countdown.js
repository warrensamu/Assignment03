let countDown = prompt('Count down from')

do {
    document.write(`${countDown}<br>`)
    countDown--
} while (countDown > -1)
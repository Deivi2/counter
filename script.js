

function fizzBuzz(from, to, display) {
    var fizz = 0, buzz = 0, fizzbuzz = 0;
    for (var i = from; i < to; i++) {
        if (i % 3 === 0) {
            fizz++;
        } else if (i % 5 === 0) {
            buzz++;
        } else {
            fizzbuzz++;
        }
    }
    display(fizz, buzz, fizzbuzz, from, to);
}


(function controller() {
    var UIfrom, UIto, button, fromVal;
    button = document.querySelector('.button');
    button.addEventListener('click', function () {
        UIfrom = parseInt(document.querySelector('.from').value);
        UIto = parseInt(document.querySelector('.to').value);

        fizzBuzz(UIfrom, UIto, function display(fizz, buzz, fizzbuzz, from, to) {
            var UIFromCount, UIToCount;
            var display = 'There\'s <br/>' + fizz + ' Fizz, ' +
                '<br/>' + buzz + ' Buzz, ' +
                '<br/>' + 'and,' + '<br/>' + fizzbuzz + ' FizzBuzz <br/> between' +
                '<br/>' + from + ' and ' + to;

            document.querySelector('.display').innerHTML = display;
        });
    });
})();















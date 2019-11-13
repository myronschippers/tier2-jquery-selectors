console.log('Hello Tyto!!!');

$(document).ready(onReady);

function onReady() {
    const $heading = $('#firstHello');
    const $noHeading = $('.noHello').text('NO HELLO!!!');
    let text = 'RUN';
    const $ul = $('ul');


    $('#firstHello, .noHello').attr('style', 'background: blue;');
    $('h2').removeClass('noHello');

   $ul.find('.orange').addClass('red-border');
   $ul.parent().addClass('red-border');

    $ul.empty()
    $ul.append(`<li>
            ${text}
        </li>`)
        .append(`<li>
            ${text}
        </li>`).append(`<li>
        ${text}
    </li>`);

    $heading.text(text = 'not run');

    console.log(heading);
}
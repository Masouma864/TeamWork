$(document).ready(function () {
    $(window).scroll(function () {
        var startPx = $(window).scrollTop();
        startPx >= 50 ? $(".normal-nav").addClass("sticky-nav") : $(".normal-nav").removeClass("sticky-nav");
    });
    // SCROLL TO DIV
    $('.nav-item a, .mouse-down a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1700, 'easeInOutQuint');
        event.preventDefault();
    });

    // SCROLLSPY
    $(".navbar-nav").scrollspy({
        offset: 90
    });
    // COUNTER
    var initial = 0;

    $(window).scroll(function () {
        var msTop = $('#accomplished-counter').offset().top - window.innerHeight;
        if (initial == 0 && $(window).scrollTop() > msTop) {
            $('.accomplished-counter-value').each(function () {
                var $this = $(this),
                    countData = $this.attr('counter');
                $({
                    countNo: $this.text()
                }).animate({
                    countNo: countData
                },

                    {
                        easing: 'linear',
                        duration: 2300,
                        step: function () {
                            $this.text(Math.floor(this.countNo));
                        },
                        complete: function () {
                            $this.text(this.countNo);
                        }

                    });
            });
            initial = 1;
        }
    });
});

//validate form

const form = document.getElementById('form');
const message = document.querySelector('.error-mesg');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const textMessage = document.getElementById('message');

function saveData() {
  const obj = {
    subject: subject.value,
    email: email.value,
    message: textMessage.value,
  };
  localStorage.setItem('data', JSON.stringify(obj));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (/^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email.value) && subject.value !== "" && textMessage.value !== "") {
    form.submit();
    form.reset();
    saveData();
  } else {
    message.innerText = 'Please enter valid input in all fields';
    message.style.display = "block";
  }
});
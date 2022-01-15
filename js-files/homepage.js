/* body confetti animation */

var end = Date.now() + (15 * 1000);


var colors = ['#9C53A6', '#76BF2C', '#F2B705'];

(function frame() {
  confetti({
    particleCount: 3,
    angle: 60,
    spread: 55,
    origin: {
      x: 0
    },
    colors: colors
  });
  confetti({
    particleCount: 3,
    angle: 120,
    spread: 55,
    origin: {
      x: 1
    },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());

/* sticky nav */
let navbar = $('.navbar');
$(window).scroll(function () {
  // console.log(window.innerHeight);
  let oTop = $('.section-1').offset().top - window.innerHeight;
  // console.log(oTop)
  if ($(window).scrollTop() > oTop) {
    navbar.addClass('sticky')
  } else {
    navbar.removeClass('sticky')
  }
});


/* <!-- scroll smooth--> */

// inspired by https://css-tricks.com/snippets/jquery/smooth-scrolling/

var TopOffset = 55;

$('a[data-smooth]').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - TopOffset
      }, 1000);
      return false;
    }
  }
});

/* baguetteBox.run('.tz-gallery');
$("#Gallery img").click(function () {
  const imgS = $(this).attr("src");
  // console.log(imgS);
  const popUp = $(".popup");
  popUp.css("display", "block");
  popUp.find("img").attr("src", imgS);
});
$(".popup").click(function () {
  $(this).css("display", "none");
}) */

/* contact us section */


/* const formSec = document.querySelectorAll(".form-horizontal");
const clickedbtn = document.getElementById("submit").addEventListener("click",function(){
  
    alert("thank you, we will contact with you soon");
}); */

/* formSec.addEventListener("submit", (e) => {
  e.preventDefault()

  ;


}); */

/* $("#submit").click('click', function () {
  return ("we will contact you soon")
})



document.getElementById("submit").addEventListener('click', check);
document.getElementById('uname').focus();

function check() {
  let nameu = document.getElementById('uname'),
    lastu = document.getElementById('ulast'),
    error1 = document.getElementById('err1'),
    error2 = document.getElementById('err2'),
    error3 = document.getElementById('err3'),
    error4 = document.getElementById('err4'),
    emailu = document.getElementById('email'),
    texta = document.getElementById('textA');
    

  if (nameu.value == "") {
    // alert("Please Enter your First Name")
    error1.innerHTML = "* Please Enter your First Name";
    error1.style.color = "red";
    nameu.focus();
  } else {
    error1.innerHTML = "";
  }
  if (lastu.value == "") {
    //alert("Please Enter your Last Name");
    error2.innerHTML = "* Please Enter your Last Name";
    error2.style.color = "red";
    lastu.focus();
  } else {
    error2.innerHTML = "";
  }
  if (emailu.value == "" || emailu.value.indexOf("@") == -1 || emailu.value.indexOf(".") == -1) {
    //alert("Please Enter your Last Name");
    error3.innerHTML = "* Please Enter your Email";
    error3.style.color = "red";
    emailu.focus();
  } else {
    error3.innerHTML = "";
  }
  if (textA.value == "") {
    //alert("Please Enter your Last Name");
    error2.innerHTML = "* Please Enter your Massage here";
    error2.style.color = "red";
    texta.focus();
  } else {
    error2.innerHTML = "";
  }


} */

/* counter animation */

let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: "swing",
      step: function (value) {
        $(this).text(Math.ceil(value));
      }
    });
  });
};

let a = 0;
$(window).scroll(function () {
  let oTop = $('.numbers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
})

//footer 

//Click the send button
$('#Fbtn').on('click', () => {
  const footerF = $("#inputF").val();
  console.log(footerF);
  alert("thank you, see you soon! " + footerF);
});

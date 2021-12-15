  var landFun = function (txt, obj,quantity = 50,speed = 5) {
  let i = 0;

  var time = setInterval(() => {

    if (i <= quantity) {
      var land = $('<span>mua</span>')
        .addClass('land')
        .text(txt)
        .css({
          left: Math.random() * $('body').innerWidth() + 'px',
          transition: `${speed}s linear`,
          ...obj
        })
        .appendTo('body')
        .css({
          top: $('body').innerHeight() + 'px'
        })

      setTimeout(() => {
        land.remove()
      }, 5000)
      i++;


    } else {
      clearInterval(time)
    }
  }, 200)

}
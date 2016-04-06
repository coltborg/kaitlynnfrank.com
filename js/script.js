DomReady.ready(function () {
  /* How do I use this effectively? I need to toggle the nav menu on and off
     on and off with a click. But I also need to toggle it base on viewport size.
     Should I handle it with adding/removing classes? Becuase if I add (inline)
     styles, then they mess with the cascade of my classes. Which leads to having
     clicked the nav open then closed on mobile, but then dragging it out to desktop
     and the nav doesn't pop out becuase there is an inline style preventing it.
  */
  document.getElementById('js-header-toggle').addEventListener('click', function () {
    var headerEl = document.getElementById('js-header');
    if (headerEl.classList.contains('right--20r')) {
      //  this.classList.remove('bad');
      //  this.classList.add('good');
      alert('Yep, does contain class');
    } else {
      alert('Nope, does NOT contain class');
    }
  }); // end click event
});

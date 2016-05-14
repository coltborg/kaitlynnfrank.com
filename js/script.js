window.onload = function () {
  document.getElementById('js-header-toggle').addEventListener('click', toggleNav);
};

function toggleNav(e) {
  e.preventDefault();
  var headerToggleEl = document.getElementById('js-header-toggle');
  var headerEl = document.getElementById('js-header');

  if ( headerEl.classList.contains('right--20') ) {
    headerToggleEl.classList.remove('right-0');
    headerToggleEl.classList.add('right-20');

    headerEl.classList.remove('right--20');
    headerEl.classList.add('right-0');
    return;
  }
  if ( headerEl.classList.contains('right-0') ) {
    headerToggleEl.classList.remove('right-20');
    headerToggleEl.classList.add('right-0');

    headerEl.classList.remove('right-0');
    headerEl.classList.add('right--20');
    return;
  }
}

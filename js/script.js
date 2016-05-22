window.onload = function () {
  document.getElementById('js-header-toggle').addEventListener('click', toggleNav);
};

function toggleNav(e) {
  e.preventDefault();
  var headerToggleEl = document.getElementById('js-header-toggle');
  var headerEl = document.getElementById('js-header');
  var bodyEl = document.body;
  var mainEl = document.getElementById('main');

  if ( headerEl.classList.contains('right--20') ) {
    headerToggleEl.classList.remove('right-0');
    headerToggleEl.classList.add('right-20');
    headerToggleEl.classList.remove('bg-primary-scheme');
    headerToggleEl.classList.add('bg-alternate-scheme');

    headerEl.classList.remove('right--20');
    headerEl.classList.add('right-0');

    bodyEl.classList.toggle('no-scroll');
    mainEl.classList.toggle('no-scroll');
    mainEl.classList.toggle('opacity-50');

    return;
  }
  if ( headerEl.classList.contains('right-0') ) {
    headerToggleEl.classList.remove('right-20');
    headerToggleEl.classList.add('right-0');
    headerToggleEl.classList.remove('bg-alternate-scheme');
    headerToggleEl.classList.add('bg-primary-scheme');

    headerEl.classList.remove('right-0');
    headerEl.classList.add('right--20');

    bodyEl.classList.toggle('no-scroll');
    mainEl.classList.toggle('no-scroll');
    mainEl.classList.toggle('opacity-50');

    return;
  }
}

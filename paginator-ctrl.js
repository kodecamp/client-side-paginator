function paginationCtrl(paginator,viewDetails){
	const nextBtnId = viewDetails.nextBtnId;
  const prevBtnId = viewDetails.prevBtnId;
  const pageContainerId = viewDetails.recordContainerId;
  const disabledStyleClass = viewDetails.disabledStyleClass;
  const templateGenerator = viewDetails.templateGeneratorFn;

  const nextBtn = document.querySelector('#'+nextBtnId);
  const prevBtn = document.querySelector('#'+prevBtnId);

  const pageContainer = document.querySelector('#'+pageContainerId);

  // initial load of data

  

  let firstPage = paginator.next();
  updatePage(firstPage);
  toggleButtons();

  nextBtn.addEventListener('click', function() {
    let page = paginator.next();
    updatePage(page);
    toggleButtons(paginator);
  });

  prevBtn.addEventListener('click', function() {
    let page = paginator.previous();
    updatePage(page);
    toggleButtons(paginator);
  });

  function updatePage(page) {
    let compiledTemplate = page ? templateGenerator(page._items) : 'No more records buddy ;)';
    pageContainer.innerHTML = compiledTemplate;

  }

  function toggleButtons() {
    
    if (paginator.hasNext()) {
      nextBtn.classList.remove(disabledStyleClass);
    } else {
      nextBtn.classList.add(disabledStyleClass);
    }

    if (paginator.hasPrevious()) {
      prevBtn.classList.remove(disabledStyleClass);
    } else {
      prevBtn.classList.add(disabledStyleClass);
    }

  }
}
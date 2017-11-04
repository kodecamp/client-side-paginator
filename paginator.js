'use strict';

function Paginator(items, pageSize) {

  const completePages = Number.parseInt(items.length / pageSize);
  const recordsOnLastPage = items.length % pageSize;

  const pages = [];
  let lastPage = 0;

  for (let pageNo = 0; pageNo < completePages; pageNo++) {
    let page = new Page(items.slice(pageNo * pageSize, pageSize * (pageNo + 1)), (pageNo + 1));
    pages.push(page);
    lastPage += 1;
  }

  console.log('records on last page : ', recordsOnLastPage);
  if (recordsOnLastPage > 0) {
    let page = new Page(items.slice(items.length - recordsOnLastPage), (lastPage + 1));
    pages.push(page);
  }

  console.log(pages);
  let currentPageIndex = -1;

  this.next = function() {
    let currentPage = pages[currentPageIndex+1];
    currentPageIndex += 1;
    return currentPage;
  };

  this.previous = function() {
    currentPageIndex -= 1;
    return pages[currentPageIndex];
  }

  this.hasNext = function() {
    console.log('currentIndex : ');
    console.log('currentPageIndex : ',currentPageIndex);
    console.log('(pages.length : )',pages.length);
    return currentPageIndex < (pages.length - 1);
  };

  this.hasPrevious = function() {
    return currentPageIndex > 0;
  }
}

function Page(items, pageNo) {
  this._items = items;
  this._pageNo = pageNo;
}


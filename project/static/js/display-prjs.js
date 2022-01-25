const projects = document.getElementsByClassName('prj-card-wrapper')
const lastItem = document.getElementById('last-pg-item')
const firstItem = document.getElementById('first-pg-item')
const ulPagination = document.getElementById('list-pagination')

// pagesElement.getElementsByClassName(
const cardNumber = 3

const pageChangeHandler = (data, pageNum) => {
  const page = data.getAttribute("data-option")
  displayPrjPage(page)

  firstItem.querySelector('.page-link').setAttribute('data-option', `${Number(page) - 1}`)
  lastItem.querySelector('.page-link').setAttribute('data-option', `${Number(page) + 1}`)
  // Enabe/Disable previous and next buttons when they dont apply anymore
  if (page > 1) {
    firstItem.classList.remove('disabled')
  }
  else {
    firstItem.classList.add('disabled')
    firstItem.querySelector('.page-link').setAttribute('data-option', '-1')
  }

  if (Number(page) === Number(pageNum)) {
    lastItem.classList.add('disabled')
    lastItem.querySelector('.page-link').setAttribute('data-option', '-1')
  }
  else {
    lastItem.classList.remove('disabled')
  }

  // Clear active states
  Array.from(ulPagination.getElementsByClassName('page-item')).forEach(li => li.classList.remove('active'))

  // Set current page as active
  const currentPg = ulPagination.getElementsByClassName('page-item')[page]
  currentPg.classList.add('active')


}

const displayPrjPage = (page) => {
  let pgStart = ((page - 1) * cardNumber)
  pgStart = page <= 1 ? 0 : pgStart
  let pgEnd = page * cardNumber
  pgEnd = (pgEnd > (projects.length)) ? projects.length : pgEnd

  console.log(`start:${pgStart}  end:${pgEnd}`)
  Array.from(projects).forEach(prj => {
    prj.style.display = 'none'
  })
  Array.from(projects).slice(pgStart, pgEnd).forEach(prj => {
    prj.style.display = 'block'
  })
}

if (projects) {

  if (projects.length > cardNumber) {
    // Display only first page
    displayPrjPage(1)

    // Number of pages
    const pageNum = Math.ceil(projects.length / cardNumber)

    // Create page items
    for (let i = 1; i <= pageNum; i++) {
      let pgItem = document.createElement('li')
      pgItem.classList.add('page-item')
      i === 1 && pgItem.classList.add('active')
      pgItem.innerHTML = `
      <button 
        class="page-link" 
        data-option="${i}"
        onclick="pageChangeHandler(this, ${pageNum})" >
          ${i}
      </button> `
      ulPagination.insertBefore(pgItem, lastItem)
    }
    lastItem.querySelector('.page-link').setAttribute('onclick', `pageChangeHandler(this, ${pageNum})`)
    firstItem.querySelector('.page-link').setAttribute('onclick', `pageChangeHandler(this, ${pageNum})`)
  }
  else {
    const pagesElement = document.getElementById('projects-pagination')
    pagesElement.style.display = 'none'
  }

}
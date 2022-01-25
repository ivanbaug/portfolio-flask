const projects = document.getElementsByClassName('prj-card-wrapper')
const lastItem = document.getElementById('last-pg-item')
const firstItem = document.getElementById('first-pg-item')
const ulPagination = document.getElementById('list-pagination')

// pagesElement.getElementsByClassName(
const cardNumber = 5

const pageChangeHandler = (data, pageNum) => {
  const page = data.getAttribute("data-option")
  displayPrjPage(page)

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
      // pgItem.classList.remove('page-item')

      pgItem.innerHTML = `
      <button 
        class="page-link" 
        data-option="${i}"
        onclick="pageChangeHandler(this, pageNum)"
        >${i}</button>
      `
      ulPagination.insertBefore(pgItem, lastItem)
      // console.log('appended')
    }

  }
  else {
    const pagesElement = document.getElementById('projects-pagination')
    pagesElement.style.display = 'none'
    // pagesElement.style.display = 'block'
  }

}
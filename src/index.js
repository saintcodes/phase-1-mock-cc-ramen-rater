// write your code here

let ramenImages = document.getElementById('ramen-menu')

// console.log(ramenImages)

fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(data => {
    for (obj in data) {
      let img = document.createElement('img')
      img.src = data[obj]["image"]
      img.id = data[obj]["id"]
      // console.log(data[obj].image)
      ramenImages.append(img)
    }

    let one = document.getElementById('1')
console.log(one)
    one.addEventListener('click', function() {
      
      let name = document.querySelector('.name')
      let restaurant = document.querySelector('.restaurant')
      let detailImage = document.querySelector('.detail-image')
      let comment = document.getElementById('comment-display')
      let rating = document.querySelector('#rating-display')
// console.log(name.innerText)
// console.log(restaurant.innerText)
// console.log(detailImage.innerText)
// console.log(comment.innerText)
// console.log(rating.innerText)
      name.innerHTML = data[obj]["name"]
      restaurant.innerHTML = data[obj]["restaurant"]
      detailImage.src = data[obj]["image"]
      rating.innerHTML = data[obj]["rating"]
      comment.innerHTML = data[obj]["comment"]
    })

  })
  
  


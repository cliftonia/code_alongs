var likeNumber = document.querySelector(".like-number")

likeNumber.textContent = Number(likeNumber.textContent) + 1

likeNumber.addEventListener('click', function () {
  likeNumber.textContent = Number(likeNumber.textContent) + 1
})
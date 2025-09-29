// const editButtons = document.getElementsByClassName("editButton")

export function editIngredients() {
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('editButton')) {
      console.log('hola');

    }
  })
}

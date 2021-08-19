const modal = document.querySelector('.modal');
const btn = document.querySelector('.btn');
const close = document.querySelector('.close')


const openModal = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    
}

const closeModal = (e) => {
    e.preventDefault();
    modal.style.display = 'none';

}


btn.addEventListener('click',openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click',closeModal);
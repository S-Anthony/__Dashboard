export default function likeButton () {
    document.querySelectorAll('.slide__title-like').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('slide__title-like_active');
        });    
    });
}
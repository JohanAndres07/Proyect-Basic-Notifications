const markAll = document.querySelector('#mark-all');
const clickPost = document.querySelectorAll('.post');
const number = document.querySelector('.number')

const updateNotification = ()=>{
    const notReadElementCurrent = document.querySelectorAll('.not-read');
    number.textContent = notReadElementCurrent.length;
}

markAll.addEventListener('click',()=>{
    const notReadElement = document.querySelectorAll('.not-read');
    notReadElement.forEach(notReadElements =>{
        notReadElements.classList.remove('not-read')
        updateNotification()
    })
    
})


clickPost.forEach(post =>{
    post.addEventListener('click',()=>{
        post.querySelector('.not-read').classList.remove('not-read')
        updateNotification()
    })
})


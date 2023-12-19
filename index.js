const backBtn = document.getElementById('back')
const nextBtn = document.getElementById('next')
const imgCon = document.getElementById('img_con')

imgCon.addEventListener('wheel', (e)=>{
    e.preventDefault()
    imgCon.scrollLeft += e.deltaY

})

nextBtn.addEventListener('click', ()=>{
    imgCon.scrollLeft += 350
})
backBtn.addEventListener('click', ()=>{
    imgCon.scrollLeft -= 350
})
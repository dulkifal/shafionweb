$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwq7k6pI-cbXoQTRwEJZs52xboFDP7D-EPwhCGt0HLgWmQDAblnvFdAf83Mb_sj60ar/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})

window.addEventListener('scroll', function(){
const header = this.document.querySelector("header");
header.classList.toggle('sticky', window.scrollY >0);
});

const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navigationItems = document.querySelectorAll('.navigation a');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');

});

navigationItems.forEach((navigationItem) =>{
    navigationItems.addEventListener('click', ()=>{
        menuBtn.classList.remove('active');
        navigation.classList.remove('active');
    })
});

const scrollBtn = document.querySelector('scrollToTop-btn'); 
window.addEventListener('scroll', function(){
    scrollBtn.classList.toggle('active', this.window.screenY > 500)
});

scrollBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop =0;
});


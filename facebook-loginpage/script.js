///^[^\s@]+@[^\s@]+\.[^\s@]+$/;



document.addEventListener('DOMContentLoaded',()=>{
    var facebook_text = document.querySelector('.facebook-text');
    var box = document.querySelector('.box');
    var email= document.getElementById('email');
    var password = document.getElementById('password');
    var message = document.getElementById('one');
    var username=document.getElementById('username');
    var userDetails= document.getElementById('user-details');
    var homepage= document.querySelector('.homepage');

    var emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    document.getElementById('btn').addEventListener('click',(e)=>{
         e.preventDefault();

         facebook_text.style.display='none';
         box.style.width='40%';

         if(email.value === '' || password.value === '' || !emailRegex.test(email.value) || password.value.length <=5){
            message.textContent = 'Please Provide Valid information..'
            facebook_text.style.display='none';
            box.style.width='40%';
            message.style.color='red';
         }else{
            facebook_text.style.display='none';
            homepage.style.display='block';
            var name= email.value.substring(0,email.value.indexOf('@'));
            username.textContent = name;
            userDetails.textContent=name;

         }
        email.value='';
        password.value=''
    })
    document.getElementById('logout').addEventListener('click',(e)=>{
     e.preventDefault();
     homepage.style.display='none';
    })
})


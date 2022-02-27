document.querySelector('.name1').addEventListener('keydown',valid)
document.querySelector('.email1').addEventListener('keydown',e_valid)
document.querySelector('.pass1').addEventListener('keydown',p_valid)
document.querySelector('.num1').addEventListener('keydown',num_valid)
document.querySelector('.submit_btn').addEventListener('click',submit11)



let name_valid =/^[a-zA-Z ]{2,30}$/;
let email_valid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let pass_valid=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
let number_valid= /[!^0-9]/

function valid(){
    if(document.querySelector('.name1').value.match(name_valid))
    {
            document.querySelector('.name1').style.border="2px solid green"
    }       
    else
    {
        document.querySelector('.name1').style.border="2px solid red"

    }
}

function e_valid(){
    if(document.querySelector('.email1').value.match(email_valid))
    {
            document.querySelector('.email1').style.border="2px solid green"
    }       
    else
    {
        document.querySelector('.email1').style.border="2px solid red"

    }
}
function p_valid(){
    if(document.querySelector('.pass1').value.match(pass_valid))
    {
        document.querySelector('.pass1').style.border="2px solid green"
    }       
    else
    {
        document.querySelector('.pass1').style.border="2px solid red"
        

    }
}

function num_valid(){
    if(document.querySelector('.num1').value.match(number_valid))
    {
            document.querySelector('.num1').style.border="2px solid green"
    }       
    else
    {
        document.querySelector('.num1').style.border="2px solid red"

    }
}

function submit11()
{
    // alert("welcome")
    if(
        document.querySelector('.num1').value.match(number_valid) &&
        document.querySelector('.pass1').value.match(pass_valid) &&
        document.querySelector('.email1').value.match(email_valid) &&
        document.querySelector('.name1').value.match(name_valid)
    )
    {
        alert("welcome")
    }
    else
    {
        alert("fill the form")
    }
}

    
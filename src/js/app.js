

function register(){
    const firstname = document.getElementById('firstName');
    const lastname = document.getElementById('lastName');
    const username = document.getElementById('username');
    const emailaddress = document.getElementById('email-address');
    const password = document.getElementById('create-password');
    const confirmpassword = document.getElementById('password-confirm');

    if (password.value === confirmpassword.value){
        axios.post('http://127.0.0.1:4000/users/register',{
            "firstName": firstname.value,
            "lastName": lastname.value,
            "username": username.value,
            "emailAddress": emailaddress.value,
            "password": password.value
        },{
            "Content-Type": "application/json"},)
                .then(response => {
                    firstname.value ='';
                    lastname.value = '';
                    username.value = '';
                    emailaddress.value = '';
                    password.value = '';
                    confirmpassword.value = '';    
                    console.log(response);
                }, (error) => {
                        console.log(error.response);
                });    
    }
}


function logIn(){
    const emailAddress = document.getElementById('email-address');
    const password = document.getElementById('password');
    
    axios.post('http://127.0.0.1:4000/users/authenticate', { 
                                                                "username": emailAddress.value,
                                                                "password": password.value})
        .then( response => {
                emailAddress.value = "";
                password.value = "";
                console.log(response);
        },
            (error) => {
                console.log(error.response);
        });
}





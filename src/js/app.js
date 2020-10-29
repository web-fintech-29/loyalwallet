


/*const User =  {
    "firstName": "Jason",
    "lastName": "Watmore",
    "username": "jason",
    "password": "my-super-secret-password"
}

const options = {
    method: 'post',
    url: 'http://127.0.0.1:4000/users/register',
    data: {
        "firstName": "Jason",
        "lastName": "Watmore",
        "username": "jason",
        "password": "my-super-secret-password"
    },
} */
export function register(){
    axios.post('http://127.0.0.1:4000/users/register')
            .then(response => {
                    console.log(response);
            }, (error) => {
                    console.log(error)
            });    
}

/*document.getElementById('create_account')
                .onclick = axios
                            .post('http://localhost:4000/users/register', 
                            {   "firstName": "Jason",
                                "lastName": "Watmore",
                                "username": "jason",
                                "password": "my-super-secret-password"
                            })
                            .then(response => {
                                console.log(response);
                            }, (error) => {
                                console.log(error)
                            }); 
*/
//async function signIn(){
    
//}
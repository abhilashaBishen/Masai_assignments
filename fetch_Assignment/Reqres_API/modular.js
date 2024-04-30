
const ReqresApi = 'https://reqres.in/api/users';
const userbox = document.getElementById('userbox');

let buton = document.getElementById("fetchuserbutton");

buton.addEventListener('click', fetchuserdata);

// function to get data form fetchapi 
function fetchuserdata() {
    try {
        fetch(ReqresApi)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.data);
                create_html(data.data);
            })

    } catch (error) {
        console.error(error)
    }
}

//To create html Element for every data we get from fetchapi

function create_html(userdata) {
    userbox.innerHTML = '';
    // console.log(userdata);
    userdata.forEach((el, index) => {
        let usercard = document.createElement('div');
        usercard.classList.add('user-card');
        let cardhtml = ` 
     <img src = ${el.avatar}> 
    <p><b> First Name: </b>${el.first_name}</p>
    <p><b>Last Name: </b>${el.last_name}</p>
    <p><b>Email_id : </b>${el.email}</p> `

        usercard.innerHTML = cardhtml;
        appenddata(usercard);
    })

}
 //adding html Elemnet in body and userbox;
function appenddata(usercard) {
    
    userbox.append(usercard);
}


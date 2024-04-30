
const ReqresApi = 'https://reqres.in/api/users';
const userbox = document.getElementById('userbox');

let buton = document.getElementById("fetchuserbutton");

buton.addEventListener('click',function displayuserdata(){
   
    fetch(ReqresApi)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        // console.log(data);
        // console.log(data.data)
        create_html(data.data);
    })
    .catch(error =>{
        console.log(error);
    })
     
    function create_html(userdata){
     userbox.innerHTML = '';
    console.log(userdata);
    userdata.forEach((el,index)=>{
        console.log(el.first_name,index);
        let usercard = document.createElement('div');
        usercard.classList.add('user-card'); 
    let cardhtml = ` 
     <img src = ${el.avatar}> 
    <p><b> First Name: </b>${el.first_name}</p>
    <p><b>Last Name: </b>${el.last_name}</p>
    <p><b>Email_id : </b>${el.email}</p> `
    
    usercard.innerHTML = cardhtml;
    
    userbox.append(usercard);
    })
    
    }
    
});




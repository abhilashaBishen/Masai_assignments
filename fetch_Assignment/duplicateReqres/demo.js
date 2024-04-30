
const ReqresApi = 'https://reqres.in/api/users';
const userbox = document.getElementById('userbox');

let buton = document.getElementById("fetchuserbutton");



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
    });
     
    function create_html(userdata){
        console.log(userdata);

        let duplicateuserdata = userdata;
        console.log(duplicateuserdata);
        
    duplicateuserdata.map((el,index)=>{
        console.log(el.first_name,index);
       
    let cardhtml = ` 
     <img src = ${el.avatar}> 
    <p><b> First Name: </b>${el.first_name}</p>
    <p><b>Last Name: </b>${el.last_name}</p>
    <p><b>Email_id : </b>${el.email}</p> `

   displayuserdata(cardhtml);
   });
    
    }

    function displayuserdata(cardhtml){

        let usercard = document.createElement('div');
        usercard.classList.add('user-card');  

        usercard.innerHTML = cardhtml;
        let a = create_html();
        console.log("heeeeeeeeeeee",a);
         
        userbox.append(usercard);
    }
  
// buton.addEventListener('click',displayuserdata)
displayuserdata();
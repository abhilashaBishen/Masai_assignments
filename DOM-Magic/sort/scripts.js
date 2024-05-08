



const api_link = "https://jsonplaceholder.typicode.com/users";


async function getData(url){
    try {
        let res = await fetch(url);
    
        let data = await res.json();
    
        console.log(data);
        
        displayData(data);
    
        totaldata =res.headers.get("x-Total-Count");
        pagination(totaldata,6);
        
    } catch (error) {
        console.error("Not able to fetch data",error)
    }
   
 
   
}

getData(`${api_link}?_page=1&_limit=6`);

let task_box =document.getElementById('task-box');

function displayData(data){
task_box.innerHTML = " ";
data.forEach((ele,i)=>{
    
    let box1 = document.createElement('div');
    box1.setAttribute("id",'task-content');

    let box2 = document.createElement('div');
    box2.setAttribute("id",'aboutuser');

    let userid= document.createElement('p');
    userid.textContent = `UserId : ${ele.id}`;
    userid.style.color = 'gray';
   
    let para1= document.createElement('p');
    para1.textContent = `Name: ${ele.name}`;
    para1.setAttribute("id",'name-text');

    let para2 = document.createElement('p');

    let{address:{street:street,suite:suite,city:city,zipcode:zipcode}} = ele;

    para2.textContent = `Address : street - ${street}, suite - ${suite}, city - ${city} ,zipcode - ${zipcode}`;

    let para = document.createElement('p');
    para.textContent = `Email: ${ele.email}`;

    let para3= document.createElement('p');
    para3.textContent = `username: ${ele.username}`;
  para3.style.color = 'rgb(206, 158, 56)';
    let phone = document.createElement('p');
    phone.textContent = `Phone: ${ele.phone}`;

    let website = document.createElement('p');
    website.textContent = `Website: ${ele.website}`;
let {company:{name:name,catchPhrase:phrase,bs:bs}} = ele;

    let company = document.createElement('p');
    company.textContent = `company => name - ${name}, catchPhrase - ${phrase} , bs - ${bs}`;
    company.style.backgroundColor = ''

 box2.append(para2,para,para3,phone,website,company);
   
    box1.append(userid,para1,box2);
    

    task_box.appendChild(box1)
    
})

}

   

function pagination(totaldata,limit){
   
    
    let noOfButtons =Math.ceil( totaldata/limit);
    let paginationBox = document.getElementById("pagination-box");
    for(let i=1;i<=noOfButtons;i++){
        let btn = document.createElement('button');
        btn.textContent = i;
        btn.addEventListener('click',function(){
            paginationBox.innerHTML = ' '
            getData(`${api_link}?_page=${i}&_limit=6`)
        })

        paginationBox.append(btn);
    }
}

document.getElementById("sortdata").addEventListener("change",()=>{
    
    let sortvalue = document.getElementById('sortdata').value;

    console.log(sortvalue)

     getData(`${api_link}?id=${sortvalue}`);

     if(sortvalue === 'sort'){
        window.location.reload()
     }
    
     
})
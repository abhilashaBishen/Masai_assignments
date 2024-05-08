

const api_link = "https://jsonplaceholder.typicode.com/todos";


async function getData(url){
    let res = await fetch(url);
    
    let data = await res.json();

    // console.log(data);
    
    displayData(data);

    totaldata =res.headers.get("x-Total-Count");
    pagination(totaldata,10);
 
   
}

getData(`${api_link}?_page=1&_limit=10`);

let task_box =document.getElementById('task-box');

function displayData(data){
task_box.innerHTML = " ";
data.forEach((ele,i)=>{
    
    let box1 = document.createElement('div');
    box1.setAttribute("id",'task-content');
   
    let para = document.createElement('p');
    para.textContent = `Task: ${ele.title}`;

    let status = document.createElement('p');
    status.setAttribute("id",'status')
    status.textContent = `Completed:${ele.completed}`   
   
    if(ele.completed ===true){
        status.style.backgroundColor = 'green';
        
    }else{
        status.style.backgroundColor = 'red';
    }
   
    box1.append(para,status);
    

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
            getData(`${api_link}?_page=${i}&_limit=10`)
        })

        paginationBox.append(btn);
    }
}

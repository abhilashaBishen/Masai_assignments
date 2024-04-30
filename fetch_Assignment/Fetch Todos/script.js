let divbody = document.getElementById("todotaskcontainer");
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) =>{
    return response.json();
})
.then(data =>{
    console.log(data);
   appendToDom(data);
  
})
.catch(error =>{
    console.error('Error in fetching data:',error);
})

function appendToDom(res){
    res.map((el,index)=>{
       let checkbox = document.createElement('input');

        checkbox.type = 'checkbox';

        checkbox.id = `${index}`;

        let ptag = document.createElement('p');
        ptag.innerText = el.title;
        ptag.append(checkbox);
        divbody.append(ptag);

    })

   
}


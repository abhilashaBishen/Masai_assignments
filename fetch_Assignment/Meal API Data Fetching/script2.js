const baseURL = `https://www.themealdb.com/api.php?ref=apilist.fun`;


//accesing the get catergory data button
let btn1 = document.getElementById("get-category-data");

// applying click event listner on button 
btn1.addEventListener('click', specificCategoryData);

// function to get the data
function specificCategoryData(){
    try{
    let fetchpromise= fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    fetchpromise.then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
        for(el of data.meals){
            console.log(el.strMeal);
        }
    })
}
    catch(error){
        console.error("someting wend wrong",error);
    }
}
//accesing the get ingredient data button
let btn2 = document.getElementById("get-ingredient-data");

// applying click event listner on button 
btn2.addEventListener('click', getIngrdientData);

// function to get the data
function getIngrdientData(){
    try{
    let ingredientfetchPromise = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    ingredientfetchPromise.then(response =>{
        return response.json();
    })
    .then(data2 =>{
        console.log(data2);
        for(ele of data2.meals){
            console.log(ele.strMeal);
        }
    })
}
    catch(error)
    {
        console.error("someting wend wrong",error);
    }
}
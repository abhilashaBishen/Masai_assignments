 //simulating an asynchronous operation

function getUserData(id, callback) {
   

    setTimeout(() => {
        const dummyObj = {
            Id: id,
            name: 'anny',
            email: 'abc@gmail.com'

        }
        //calling the callback function with the fetched data i.e. an obj;
        callback(dummyObj);
    }, 2000)//here simulating a delay of 2 seconds
}

function displayUser(obj) {
    console.log(obj.Id, obj.name, obj.email);
}
//passing the id and displayUser function as a callback to getUserData function.
getUserData('23Qw', displayUser);
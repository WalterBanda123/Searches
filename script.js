

const names = ['Bob', 'John', 'Richard', 'Emmanuel', 'Las'];

const enteredName = prompt('Enter your name');


const search = (value) => {

    const searchedName = value; 
   const theNames =  names.filter(name => name === searchedName)


   if(theNames.length> 0 ){
    console.log(true)
   }
   else{
    console.log(false)
   }


}

search(enteredName);



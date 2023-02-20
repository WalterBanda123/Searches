const namesList = [
    ['Alex', 'Ben', 'dogs', 'dog', 'puppy'],
    ['Jill', 'Jack', 'cat', 'cats'],
    ['Pam', 'Matt', 'Seth', 'horse', 'horses', 'ride']
]

const enteredValue = prompt("Enter your name");

const search = (value) => {

    const searchedName = value;

    if (!searchedName) {
        console.log("Enter a valid string")
    }


    for (let i = 0; i < namesList.length; i++) {
        for (let j = 0; j < namesList[i].length; j++) {

            if (namesList[i][j].toLowerCase()
                .includes(searchedName.toLowerCase().toString()) &&
                searchedName.length < 3) {
                console.log(namesList[i][j])
            }
            
            if ((namesList[i][j].toLowerCase().toString() === searchedName.toLowerCase()) === true) {
                const displayedContent = namesList[i].filter(item =>
                    item.toLowerCase().toString() != searchedName.toLowerCase().toString())
                return displayedContent
            }

        }

    }

}
// search(enteredValue)

const myResultList = search(enteredValue);
if (myResultList) {
    for (let i = 0; i < myResultList.length; i++) {
        console.log(myResultList[i])
    }
}




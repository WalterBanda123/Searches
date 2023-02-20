const names = ['Alex', 'Ben', 'jill', 'Jack', 'Pam', 'Matt', 'Seth']

const enteredValue = prompt("Enter your name")

const search = (value) => {

    const searchedName = value;
    if (searchedName) {
        const resultList = names.filter(name => name.toLowerCase().toString().includes(searchedName.toLowerCase().toString()))

        console.log(resultList)
    }

}

search(enteredValue)

//null doc

function longer(nickname, fullName) {
    if (fullName.length > nickname.length){
        return true;
    } else {
        return false;
    }
} // Returns true if 


function matching_letters(nickname, fullName) {
    let letters = nickname.split('');
    console.log(letters);
    console.log(fullName.includes(letters));
    letters.filter()
}


// console.log(matching_letters('Mac', 'Mac Taylor'));
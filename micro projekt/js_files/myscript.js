let sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", checkUser);


function checkUser() {
    let name = document.querySelector("#name");
    let phone = document.querySelector("#phone");

    if (!checkName(name.value)){
        alert("Proszę wprowadzić poprawne imię i nazwisko.");
        return false;
    }
    if (!checkPhone(phone.value)){
        alert("Proszę wprowadzić poprawny numer telefonu");
        return false;
    }
}




function checkName(name){
    if (name.length < 3)
        return false;
    const arr = name.split(' ');
    if (arr.length != 2)
        return false;
    let firstname = arr[0];
    let lastname = arr[1];
    
    if (firstname.charAt(0)!=firstname.charAt(0).toUpperCase() || lastname.charAt(0)!=lastname.charAt(0).toUpperCase())
        return false;
    if (!(/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/.test(firstname)) || (/\d/.test(firstname)))
        return false;
    if (!(/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]+$/.test(lastname))){
        if (/\d/.test(lastname))
            return false;
        let count=0;
        for (let i=0; i<lastname.length; i++) {
            if (lastname.charAt(i) == '-') {
                count+=1;
                if (count>1)
                    return false;
                if (i + 1 >= str.length) 
                    return false;
                if (lastname.charAt(i+1).toUpperCase() != lastname.charAt(i+1))
                    return false;
            }
        }
    }
    return true;
}



function checkPhone(phone){
    let phoneCopy = "";
    for (let i=0;i<phone.length;i++){
        if (phone.charAt(i)!=" " && phone.charAt(i)!="-")
            phoneCopy += phone.charAt(i);
    }
    if (phoneCopy.length!=9){
        if(!(phoneCopy.length==12 && phoneCopy.charAt(0)=="+"))
            return false;
    }
    
    if (phoneCopy.length==9){
        if (!(/^[0-9]+$/.test(phoneCopy)))
            return false;
        }
    else if (phoneCopy.length==12){
        if (!(/^[0-9]+$/.test(phoneCopy.substring(1))))
            return false;
        }
    return true;
}

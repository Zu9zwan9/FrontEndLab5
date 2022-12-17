let selectedColor = false;

function validate() {
    const name = document.forms["person"]["name"].value;
    const variant = document.forms["person"]["variant"].value;
    const phone = document.forms["person"]["phoneNumber"].value;
    const faculty = document.forms["person"]["faculty"].value;
    const address = document.forms["person"]["address"].value;

    let Error = "false";

    if (!/^[a-zA-Z]+$/.test(name)) {
        document.getElementById("nameLabel").innerHTML = "Name must contain only letters";
        Error = "true";
    } else {
        document.getElementById("nameLabel").classList.remove("Error");
    }
    if (!/^[0-10]+$/.test(variant)) {
        document.getElementById("variantLabel").innerHTML = "Variant must be a number between 0 and 10";
        Error = "true";
    } else {
        document.getElementById("variantLabel").classList.remove("Error");
    }
    if (!/^[0-9]+$/.test(phone)) {
        document.getElementById("phoneNumberLabel").innerHTML = "Phone must be a number";
        Error = "true";
    } else {
        document.getElementById("phoneLabel").classList.remove("Error");
    }
    if (!/^[a-zA-Z]+$/.test(faculty)) {
        document.getElementById("facultyLabel").innerHTML = "Faculty must contain only letters and a number";
        Error = "true";
    } else {
        document.getElementById("facultyLabel").classList.remove("Error");
    }
    if (!/^[a-zA-Z]+$/.test(address)) {
        document.getElementById("addressLabel").innerHTML = "Address must contain only letters and a number";
        Error = "true";
    } else {
        document.getElementById("addressLabel").classList.remove("Error");
    }

    if (Error === "false") {
            alert("Form submitted successfully");
    } else {
        alert("Please fill in the form correctly");
    }
    return false;
}
function onHover(element) {
    element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function onOut(element) {
    if (selectedColor) {
        usePickedColor(element);
        return;
    }
    element.style.backgroundColor = "";
    element.style.color = "";
}

function usePickedColor(element) {
    element.style.backgroundColor = document.getElementById("colorpicker").value;
    element.style.color = "black";
    selectedColor = true;
}

function changeRowColor(element) {
    document.getElementById("row2").style.backgroundColor = document.getElementById("colorpicker").value;
    document.getElementById("row3").style.color = "black";
    selectedColor = true;
}
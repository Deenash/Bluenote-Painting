'use strict';

let projectAddress = '';
let altAddr = document.getElementById('alternate-address');
let exterior = document.getElementById('exterior');
let interior = document.getElementById('interior');
let exteriorList = document.getElementById('exterior-spec');
let interiorList = document.getElementById('interior-spec');

window.onload = (event) => {
    console.log('page is fully loaded');
};


function getProjectAddress() {
    if (document.getElementById('proj-address-yes').checked) {
        projectAddress = document.getElementById('street-address').value + ' APT#: '
            + document.getElementById('apt-number').value + ', '
            + document.getElementById('city').value + ', '
            + document.getElementById('state').value + ', ' + document.getElementById('zip').value;
    } else {
        projectAddress = document.getElementById('alt-street-address').value
            + 'APT#: '
            + document.getElementById('alt-apt-number').value + ', '
            + document.getElementById('alt-city').value + ', '
            + document.getElementById('alt-state').value + ', ' + document.getElementById('alt-zip').value;
    }
    console.info(projectAddress);
}

function showAltAddress() {
    altAddr.style.display = 'block';
}

function hideAltAddress() {
    altAddr.style.display = 'none';
}

function showHideExteriorList() {
    let checkedValue = exterior.checked ? false : true;
    if (checkedValue == true) {
        exteriorList.style.display = "block";
    } else {
        exteriorList.style.display = "none";
    }
}

function showHideInteriorList() {
    let checkedValue = interior.checked ? false : true;
    if (checkedValue == true) {
        interiorList.style.display = "block";
    } else {
        interiorList.style.display = "none";
    }
}

function submitPage() {
    getProjectAddress();
    window.print();
}

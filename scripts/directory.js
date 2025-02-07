const url = 'data/members.json';
const main = document.querySelector('.grid');

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();

    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logoBox = document.createElement('div');
        let logo = document.createElement('img');
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        
        logoBox.setAttribute('class','logo-box');
        logo.setAttribute('src',business.image);
        logo.setAttribute('alt', `${business.name} logo`)
        url.setAttribute('href',`${business.website}`);

        name.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phoneNum}`;
        url.textContent = `${business.website}`;
        name.setAttribute('id','name');
        card.appendChild(logoBox);
        logoBox.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        main.appendChild(card);
    });
}

getDirectoryData();


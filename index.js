const drop = async () => {
    const url = 'http://api.alquran.cloud/v1/surah'
    const res = await fetch(url);
    const data = await res.json();
    menu(data.data);
};

const menu = a => {
    const dropdownMenu = document.getElementById('dropdown-menu')
    a.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = ` 
        <a class="dropdown-item" href="#">${element.number}.  ${element.englishName}</a>`
        dropdownMenu.appendChild(li);
    });

    const dropdown = document.querySelectorAll(".dropdown-item")
    dropdown.forEach(b => {
        b.addEventListener('click', function (even) {
            const li = even.target.innerText;
            document.getElementById('select').innerText = li;
            sura(parseInt(li))

        })
    })
}

const sura = async (a) => {
    const url2 = `https://api.alquran.cloud/v1/surah/${a}/ar`
    const res = await fetch(url2);
    const data = await res.json();
    console.log(data)
    displaySura(data);

}


const displaySura = a => {
    document.getElementById('num').innerText = a.data.numberOfAyahs;
    const ayat = a.data.ayahs;
    const mainSura = document.getElementById('sura');
    mainSura.innerHTML = '';
    ayat.forEach(aya => {
        mainSura.innerHTML += `
        <h4 class="mb-2">${aya.numberInSurah}</h4>
        <h3 class="mb-4 lh-lg">${aya.text}</h3>`

    })
    console.log(a)

}
sura(1);
drop();
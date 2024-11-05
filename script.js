const citySelector = document.getElementById('city-selector');
const clockDisplay = document.getElementById('clock');

const cityImages = {
    'Pacific/Midway': 'Cidades/Midway.png',
    'America/Adak': 'Cidades/Adak.png',
    'America/Los_Angeles': 'Cidades/Los-Angeles.png',
    'America/Denver': 'Cidades/Denver.png',
    'America/Chicago': 'Cidades/Chicago.png',
    'America/New_York': 'Cidades/New-York.png',
    'America/Caracas': 'Cidades/Caracas.png',
    'America/Sao_Paulo': 'Cidades/São-Paulo.png',
    'Atlantic/Bermuda': 'Cidades/Bermudas.png',
    'Atlantic/Azores': 'Cidades/Açores.png',
    'Europe/London': 'Cidades/Londres.png',
    'Europe/Berlin': 'Cidades/Berlim.png',
    'Europe/Paris': 'Cidades/Paris.png',
    'Africa/Cairo': 'Cidades/Cairo.png',
    'Europe/Helsinki': 'Cidades/Helsinque.png',
    'Asia/Jerusalem': 'Cidades/Jerusalem.png',
    'Africa/Nairobi': 'Cidades/Nairobi.png',
    'Europe/Moscow': 'Cidades/Moscou.png',
    'Asia/Dubai': 'Cidades/Dubai.png',
    'Asia/Baku': 'Cidades/Baku.png',
    'Asia/Tokyo': 'Cidades/Tokyo.png',
    'Australia/Sydney': 'Cidades/Sidney.png',
    'Pacific/Auckland': 'Cidades/Auckland.png',
    'Pacific/Fiji': 'Cidades/Fiji.png'
};


function updateClock() {
    const city = citySelector.value; // Obtém a cidade selecionada
    const options = { timeZone: city, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
    clockDisplay.innerText = timeString; // Atualiza a exibição da hora
    
    // Muda a imagem de fundo
    document.body.style.backgroundImage = `url(${cityImages[city]})`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza o relógio na seleção inicial
updateClock();

// Atualiza o relógio ao mudar a cidade
citySelector.addEventListener('change', updateClock);

// Array de carros de exemplo para a seção de destaque
const featuredCars = [
    {
        id: 1,
        name: 'Toyota Corolla',
        year: 2023,
        price: 'R$ 149.900',
        km: '0',
        image: 'img/car-1.jpg',
        isNew: true
    },
    {
        id: 2,
        name: 'Honda Civic',
        year: 2022,
        price: 'R$ 139.900',
        km: '15.000',
        image: 'img/car-2.jpg',
        isNew: false
    },
    {
        id: 3,
        name: 'Volkswagen Golf',
        year: 2023,
        price: 'R$ 159.900',
        km: '0',
        image: 'img/car-3.jpg',
        isNew: true
    },
    {
        id: 4,
        name: 'Fiat Pulse',
        year: 2021,
        price: 'R$ 89.900',
        km: '32.000',
        image: 'img/car-4.jpg',
        isNew: false
    },
    {
        id: 5,
        name: 'Jeep Compass',
        year: 2022,
        price: 'R$ 169.900',
        km: '18.500',
        image: 'img/car-5.jpg',
        isNew: false
    },
    {
        id: 6,
        name: 'Hyundai HB20',
        year: 2023,
        price: 'R$ 79.900',
        km: '0',
        image: 'img/car-6.jpg',
        isNew: true
    }
];

// Função para renderizar os carros na seção de destaque
function renderFeaturedCars() {
    const carsGrid = document.querySelector('.cars-grid');
    
    if (!carsGrid) return;
    
    featuredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='img/car-placeholder.jpg'">
                ${car.isNew ? '<span class="car-tag new">Novo</span>' : '<span class="car-tag used">Usado</span>'}
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.name}</h3>
                <p class="car-details">${car.year} • ${car.km} km</p>
                <p class="car-price">${car.price}</p>
                <a href="#" class="car-btn">Ver detalhes</a>
            </div>
        `;
        
        carsGrid.appendChild(carCard);
    });
}

// Função para fixar o header quando rolar a página
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Função para tratar o clique no botão de busca
function handleSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (!searchBtn || !searchInput) return;
    
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Aqui você implementaria a lógica de busca real
            console.log(`Buscando por: ${searchTerm}`);
            // Redirecionaria para página de resultados, por exemplo:
            // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            alert(`Buscando por: ${searchTerm}`);
        }
    });
    
    // Permitir busca ao pressionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Função para inicializar todas as funcionalidades quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedCars();
    handleHeaderScroll();
    handleSearch();
    
    // Adicionar classes CSS para elementos específicos da logo
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.classList.add('logo-animation');
    }
});

// Animação suave para links de navegação
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Se for um link de âncora na mesma página
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});// Array de carros de exemplo para a seção de destaque
const featuredCars = [
    {
        id: 1,
        name: 'Toyota Corolla',
        year: 2023,
        price: 'R$ 149.900',
        km: '0',
        image: 'img/car-1.jpg',
        isNew: true
    },
    {
        id: 2,
        name: 'Honda Civic',
        year: 2022,
        price: 'R$ 139.900',
        km: '15.000',
        image: 'img/car-2.jpg',
        isNew: false
    },
    {
        id: 3,
        name: 'Volkswagen Golf',
        year: 2023,
        price: 'R$ 159.900',
        km: '0',
        image: 'img/car-3.jpg',
        isNew: true
    },
    {
        id: 4,
        name: 'Fiat Pulse',
        year: 2021,
        price: 'R$ 89.900',
        km: '32.000',
        image: 'img/car-4.jpg',
        isNew: false
    },
    {
        id: 5,
        name: 'Jeep Compass',
        year: 2022,
        price: 'R$ 169.900',
        km: '18.500',
        image: 'img/car-5.jpg',
        isNew: false
    },
    {
        id: 6,
        name: 'Hyundai HB20',
        year: 2023,
        price: 'R$ 79.900',
        km: '0',
        image: 'img/car-6.jpg',
        isNew: true
    }
];

// Função para renderizar os carros na seção de destaque
function renderFeaturedCars() {
    const carsGrid = document.querySelector('.cars-grid');
    
    if (!carsGrid) return;
    
    featuredCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        
        carCard.innerHTML = `
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" onerror="this.src='img/car-placeholder.jpg'">
                ${car.isNew ? '<span class="car-tag new">Novo</span>' : '<span class="car-tag used">Usado</span>'}
            </div>
            <div class="car-info">
                <h3 class="car-title">${car.name}</h3>
                <p class="car-details">${car.year} • ${car.km} km</p>
                <p class="car-price">${car.price}</p>
                <a href="#" class="car-btn">Ver detalhes</a>
            </div>
        `;
        
        carsGrid.appendChild(carCard);
    });
}

// Função para fixar o header quando rolar a página
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });
}

// Função para tratar o clique no botão de busca
function handleSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');
    
    if (!searchBtn || !searchInput) return;
    
    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Aqui você implementaria a lógica de busca real
            console.log(`Buscando por: ${searchTerm}`);
            // Redirecionaria para página de resultados, por exemplo:
            // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            alert(`Buscando por: ${searchTerm}`);
        }
    });
    
    // Permitir busca ao pressionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Função para inicializar todas as funcionalidades quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedCars();
    handleHeaderScroll();
    handleSearch();
    
    // Adicionar classes CSS para elementos específicos da logo
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.classList.add('logo-animation');
    }
});

// Animação suave para links de navegação
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Se for um link de âncora na mesma página
        if (href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});
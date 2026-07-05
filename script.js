// ===== DATA PRODUK (pake image URL real) =====
const products = [
    {
        id: 1,
        name: 'Jasa Bikin Website',
        price: 50000,
        discount: null,
        category: 'Website',
        rating: 4.8,
        stock: 'Tersedia',
        description: 'Enak buat anak IT,kalo ada tugas langsung order aja bre',
        image: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/fapclvt9.jpg',
        badge: 'Promo'
    },
    {
        id: 2,
        name: 'Jasa Bikin Aplikasi',
        price: 35000,
        discount: 5000,
        category: 'Aplikasi',
        rating: 4.6,
        stock: 'Tersedia',
        description: 'Buat jasa bikin aplilasi bug juga bisa kok',
        image: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/dxz8lz60.jpg',
        badge: 'Best Seller'
    },
    {
        id: 3,
        name: 'Website Penyimpanan',
        price: 5000,
        discount: null,
        category: 'Jual Website',
        rating: 4.9,
        stock: 'Tersedia',
        description: 'Bisa upload data data lu ke Website itu.Gimana kalo ilang bang? gak bisa ilang kalo data data lu ada orang yang masuk jangan dikasih username nya.',
        image: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/a35dnxoh.jpg',
        badge: null
    },
    {
        id: 4,
        name: 'Website suntik+nokos',
        price: 6000,
        discount: 10000,
        category: 'Jual Website',
        rating: 4.7,
        stock: 'Tersedia',
        description: 'lumayan buat suntik sosmed(all sosmed)',
        image: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/yceueqii.jpg',
        badge: 'Promo'
    },
    {
        id: 5,
        name: 'Website Lagu Premium',
        price: 7000,
        discount: null,
        category: 'Jual Website',
        rating: 4.5,
        stock: 'Tersedia',
        description: 'Websitenya tidak ada iklan 100% dan mirip seperti spotify',
        image: 'https://files.catbox.moe/67m8qp.jpg',
        badge: 'Best Seller'
    },
    {
        id: 6,
        name: 'Website Pelacak Lokasi ',
        price: 10000,
        discount: 20000,
        category: 'Jual Website',
        rating: 4.4,
        stock: 'Tersedia',
        description: 'Ngelacak dengan menggunakan nomor WhatsApp.',
        image: 'https://files.catbox.moe/93meqy.jpg',
        badge: null
    }
];

// ===== TESTIMONI =====
const testimonials = [
    {
        name: 'Mas Amba',
        rating: 5,
        comment: 'Barang nya bagus bagus wok,dan Websitenya kece kece',
        avatar: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/i42c2x90.jpg'
    },
    {
        name: 'Wowo',
        rating: 4,
        comment: 'Lahhhh bagusan Website ini dari pada lahan sawit gua.',
        avatar: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/d690wndj.jpg'
    },
    {
        name: 'Buahlil',
        rating: 5,
        comment: 'Mantap pokonya mah,gak bisa berkata kata',
        avatar: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/56m92cz2.jpg'
    },
    {
        name: 'Pria solo',
        rating: 5,
        comment: 'Website opoo ikiii,kokkk bisaaa kece gini',
        avatar: 'https://ganga--link--ghhzdp9sv8hk.code.run/i/c20khb3j.jpg'
    }
];

// ===== FAQ =====
const faqs = [
    {
        q: 'Bagaimana cara memesan produk?',
        a: 'Klik tombol "Pesan Sekarang" pada produk yang Anda inginkan, lalu Anda akan diarahkan ke WhatsApp Admin.'
    },
    {
        q: 'Apakah produk yang dijual original?',
        a: 'Ya, semua produk kami 100% original dan bergaransi resmi.'
    },
    {
        q: 'Berapa lama admin on?',
        a: 'Admin Selalu on karena senang kalo ada pelanggan'
    },
    {
        q: 'Bagaimana cara pembayaran?',
        a: 'Kami menerima transfer e-wallet ( Gopay, DANA)'
    }
];

// ===== RENDER PRODUK =====
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortSelect = document.getElementById('sortSelect');

function renderProducts() {
    const search = searchInput.value.toLowerCase().trim();
    const category = categoryFilter.value;
    let filtered = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(search);
        const matchCategory = category === 'all' || p.category === category;
        return matchName && matchCategory;
    });

    const sort = sortSelect.value;
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);

    productGrid.innerHTML = filtered.map(p => {
        const ratingStars = '★'.repeat(Math.floor(p.rating)) + '☆'.repeat(5 - Math.floor(p.rating));
        const discountHtml = p.discount ? `<span class="discount">Rp${p.discount.toLocaleString()}</span>` : '';
        const badgeHtml = p.badge ? `<span class="badge ${p.badge === 'Promo' ? 'promo' : ''}">${p.badge}</span>` : '';
        const stockColor = p.stock === 'Tersedia' ? '#4ade80' : '#f87171';

        return `
            <div class="product-card" data-id="${p.id}">
                ${badgeHtml}
                <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy" onclick="openLightbox('${p.image}')" />
                <div class="product-name">${p.name}</div>
                <div class="product-price">
                    Rp${p.price.toLocaleString()} ${discountHtml}
                </div>
                <div class="product-rating">${ratingStars} (${p.rating})</div>
                <div class="product-stock" style="color:${stockColor};">${p.stock}</div>
                <div class="product-desc">${p.description}</div>
                <button class="btn-order" onclick="orderProduct(${p.id})">
                    <i class="fas fa-shopping-cart"></i> Pesan
                </button>
            </div>
        `;
    }).join('');
}

// ===== ORDER =====
function orderProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const pesan = `Halo Admin, saya ingin membeli produk berikut:%0A%0A` +
        `Nama Produk: ${product.name}%0A` +
        `Harga: Rp${product.price.toLocaleString()}%0A` +
        `Jumlah: 1%0A%0A` +
        `Mohon diproses ya.`;

    window.open(`https://wa.me/628567220710?text=${pesan}`, '_blank');
}

// ===== LIGHTBOX =====
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    img.src = src;
    lb.classList.add('active');
}

document.getElementById('lightboxClose').onclick = () => {
    document.getElementById('lightbox').classList.remove('active');
};

document.getElementById('lightbox').onclick = (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('lightbox').classList.remove('active');
    }
};

// ===== RENDER TESTIMONI =====
function renderTestimonials() {
    const grid = document.getElementById('testimonialGrid');
    grid.innerHTML = testimonials.map(t => {
        const stars = '★'.repeat(t.rating) + '☆'.repeat(5 - t.rating);
        return `
            <div class="testimonial-card">
                <img src="${t.avatar}" alt="${t.name}" class="testi-avatar" loading="lazy" />
                <div class="testi-name">${t.name}</div>
                <div class="testi-rating">${stars}</div>
                <div class="testi-comment">"${t.comment}"</div>
            </div>
        `;
    }).join('');
}

// ===== RENDER FAQ =====
function renderFaq() {
    const list = document.getElementById('faqList');
    list.innerHTML = faqs.map((f, i) => `
        <div class="faq-item" onclick="toggleFaq(${i})">
            <div class="faq-question">
                <span>${f.q}</span>
                <span class="faq-icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="faq-answer">${f.a}</div>
        </div>
    `).join('');
}

function toggleFaq(index) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
        if (i === index) {
            item.classList.toggle('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ===== NAVBAR TOGGLE =====
document.getElementById('navToggle').onclick = () => {
    document.getElementById('navMenu').classList.toggle('active');
};

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navMenu').classList.remove('active');
        }
    };
});

// ===== INIT =====
renderProducts();
renderTestimonials();
renderFaq();

// ===== EVENT LISTENER =====
searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);
sortSelect.addEventListener('change', renderProducts);
// TITAN HOBBY STORE - Main Application Logic

// --- Mock Data: High Quality Models & Collectibles ---
const PRODUCTS = [
  {
    id: 'prod-001',
    title: 'PG 1/60 Unicorn Gundam Perfectibility Divine',
    series: 'Mobile Suit Gundam UC',
    category: 'gunpla',
    scale: '1/60',
    dimensions: 'สูง 45 cm (กว้างปีก 50 cm)',
    scaleBarPercent: 90, // visual ratio on 50cm scale
    manufacturer: 'Bandai Spirits Japan',
    status: 'preorder', // preorder, instock, limited
    statusText: 'PRE-ORDER',
    statusBadgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    fullPrice: 12500,
    depositPrice: 2500,
    releaseDate: 'ธันวาคม 2026',
    quotaLeft: 4,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'สุดยอดผลงาน Masterpiece สเกล 1/60 พร้อมชุดอาวุธ Divine Expansion Pack ครบชุด ระบบไฟ LED ไซโคเฟรมเรืองแสงสีฟ้า ปีกหาง Armed Armor DE สองข้าง และชิ้นส่วนแปลงร่าง Destroy Mode สมบูรณ์แบบ ล็อตตัวแทนแท้ 100%'
  },
  {
    id: 'prod-002',
    title: 'RG 1/144 Hi-Nu Gundam Titanium Finish',
    series: 'Mobile Suit Gundam: Hathaway / Beltorchika\'s Children',
    category: 'gunpla',
    scale: '1/144',
    dimensions: 'สูง 16 cm',
    scaleBarPercent: 32,
    manufacturer: 'Bandai Spirits',
    status: 'instock',
    statusText: 'พร้อมส่งทันที',
    statusBadgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    fullPrice: 2450,
    depositPrice: 0,
    releaseDate: 'พร้อมส่ง',
    quotaLeft: 12,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'ไฮ-นิว กันดั้ม สเกล RG เคลือบผิวพิเศษ Titanium Finish เงางามหรูหรา ข้อต่อ Advanced MS Joint รุ่นพัฒนาใหม่ ขยับโพสท่าปล่อย Fin Funnel ได้อย่างสมจริง'
  },
  {
    id: 'prod-003',
    title: 'Scale 1/7 Asuka Langley Shikinami - Radio EVA Ver. Part 2',
    series: 'Evangelion 3.0+1.0',
    category: 'scale',
    scale: '1/7',
    dimensions: 'สูง 25 cm',
    scaleBarPercent: 50,
    manufacturer: 'Hobby Max Japan',
    status: 'preorder',
    statusText: 'PRE-ORDER',
    statusBadgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    fullPrice: 5200,
    depositPrice: 1200,
    releaseDate: 'ตุลาคม 2026',
    quotaLeft: 6,
    rating: 4.9,
    images: [
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'ผลงานจากคอลเลกชันภาพวาด Radio EVA สุดคลาสสิก เสื้อแจ็กเก็ตสีแดงเงา ตัดกับกางเกงสไตล์สตรีทแฟชั่น ดีเทลรองเท้าผ้าใบและทรงผมสะบัดอย่างประณีต ล็อตญี่ปุ่นแท้'
  },
  {
    id: 'prod-004',
    title: 'MG 1/100 Barbatos Lupus Rex Full Mechanics',
    series: 'Mobile Suit Gundam: Iron-Blooded Orphans',
    category: 'gunpla',
    scale: '1/100',
    dimensions: 'สูง 22 cm',
    scaleBarPercent: 44,
    manufacturer: 'Bandai Spirits',
    status: 'instock',
    statusText: 'พร้อมส่งทันที',
    statusBadgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    fullPrice: 1890,
    depositPrice: 0,
    releaseDate: 'พร้อมส่ง',
    quotaLeft: 8,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'บาร์บาทอส รูพัส เร็กซ์ พร้อมหาง Blade Tail พร้อมลวดทองแดงจัดท่าแอ็กชัน กรงเล็บสีทองชุบพิเศษ โครงใน Gundam Frame ละเอียดทนทาน'
  },
  {
    id: 'prod-005',
    title: 'Skullpanda City of Night Series (ยก Box 12 สุ่ม)',
    series: 'Pop Mart Designer Toys',
    category: 'arttoy',
    scale: 'Non-scale',
    dimensions: 'สูงตัวละ 8 - 10 cm',
    scaleBarPercent: 20,
    manufacturer: 'POP MART Official',
    status: 'instock',
    statusText: 'พร้อมส่งทันที',
    statusBadgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    fullPrice: 4560,
    depositPrice: 0,
    releaseDate: 'พร้อมส่ง',
    quotaLeft: 5,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1581557991964-125469da3b8a?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'ซีรีส์ City of Night สุดฮิต บรรจุกล่องซีลพลาสติก 12 ตัว ลุ้นซีเคร็ท (Secret Rare) แท้ 100% สแกน QR โค้ดตรวจสอบความแท้บนบรรจุภัณฑ์ได้'
  },
  {
    id: 'prod-006',
    title: 'Scale 1/7 Saber Alter: Kimono Dress Ver.',
    series: 'Fate/stay night [Heaven\'s Feel]',
    category: 'scale',
    scale: '1/7',
    dimensions: 'สูง 27.5 cm',
    scaleBarPercent: 55,
    manufacturer: 'Aniplex+ Japan',
    status: 'preorder',
    statusText: 'PRE-ORDER',
    statusBadgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/40',
    fullPrice: 7900,
    depositPrice: 1800,
    releaseDate: 'กันยายน 2026',
    quotaLeft: 3,
    rating: 4.95,
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'ชุดกิโมโนลวดลายโบราณสีดำตัดทอง พร้อมร่มกระดาษญี่ปุ่นและเอฟเฟกต์พลังเวท Excalibur Morgan สีแดงสด ฐานฉากไดโอรามาสไตล์ญี่ปุ่นพรีเมียม'
  },
  {
    id: 'prod-007',
    title: 'METAL BUILD Evangelion Type-01 Test Type 2026 Edition',
    series: 'Neon Genesis Evangelion',
    category: 'gunpla',
    scale: 'Non-scale',
    dimensions: 'สูง 22 cm (Diecast โลหะหนัก)',
    scaleBarPercent: 44,
    manufacturer: 'Bandai Spirits (Tamashii Nations)',
    status: 'preorder',
    statusText: 'LIMITED EDITION',
    statusBadgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    fullPrice: 11900,
    depositPrice: 3000,
    releaseDate: 'พฤศจิกายน 2026',
    quotaLeft: 2,
    rating: 5.0,
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'ไลน์ไฮเอนด์ Metal Build ชิ้นส่วน Die-cast โลหะหนักสะใจ ออกแบบโดย Ikuto Yamashita ผู้ออกแบบเครื่องจักรเอวาตัวจริง อาวุธดาบมีด Progressive Knife และปืน Pallet Rifle'
  },
  {
    id: 'prod-008',
    title: 'Hirono Little Mischief Series (Single Blind Box)',
    series: 'Pop Mart Designer Toys',
    category: 'arttoy',
    scale: 'Non-scale',
    dimensions: 'สูง 8 cm',
    scaleBarPercent: 16,
    manufacturer: 'POP MART Official',
    status: 'instock',
    statusText: 'พร้อมส่งทันที',
    statusBadgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    fullPrice: 380,
    depositPrice: 0,
    releaseDate: 'พร้อมส่ง',
    quotaLeft: 24,
    rating: 4.8,
    images: [
      'https://images.unsplash.com/photo-1581557991964-125469da3b8a?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=700&q=80'
    ],
    description: 'กล่องสุ่มเดี่ยว Hirono สุดคลาสสิก บอกเล่าเรื่องราวความรู้สึกและจินตนาการวัยเด็ก งานเพนต์ฟินิชสไตล์วินเทจ ผิวด้านละเอียด'
  }
];

// Hero product reference
const heroProductData = PRODUCTS[0];

// --- State Management ---
let state = {
  products: [...PRODUCTS],
  selectedCategory: 'all',
  selectedStatus: 'all',
  selectedScale: 'all',
  searchQuery: '',
  sortBy: 'popular',
  cart: [],
  wishlist: new Set(),
  activeModalProduct: null,
  turntableAngle: 0,
  isDraggingTurntable: false,
  dragStartX: 0,
  dragStartAngle: 0,
};

// --- DOM Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  initCategoryPills();
  initSearch();
  initFilters();
  initTurntable();
  initCountdown();
  initCartDrawer();
  lucide.createIcons();
});

// --- Render Product Grid ---
function renderProductGrid() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyState');
  const countEl = document.getElementById('productTotalCount');

  // Filter products
  let filtered = state.products.filter(item => {
    // Category filter
    if (state.selectedCategory !== 'all') {
      if (state.selectedCategory === 'preorder' && item.status !== 'preorder') return false;
      if (state.selectedCategory === 'instock' && item.status !== 'instock') return false;
      if (['gunpla', 'scale', 'arttoy'].includes(state.selectedCategory) && item.category !== state.selectedCategory) return false;
    }

    // Status dropdown filter
    if (state.selectedStatus !== 'all') {
      if (state.selectedStatus === 'limited' && item.statusText !== 'LIMITED EDITION') return false;
      if (state.selectedStatus === 'preorder' && item.status !== 'preorder') return false;
      if (state.selectedStatus === 'instock' && item.status !== 'instock') return false;
    }

    // Scale dropdown filter
    if (state.selectedScale !== 'all') {
      if (item.scale !== state.selectedScale) return false;
    }

    // Search query filter
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSeries = item.series.toLowerCase().includes(q);
      const matchScale = item.scale.toLowerCase().includes(q);
      const matchMaker = item.manufacturer.toLowerCase().includes(q);
      if (!matchTitle && !matchSeries && !matchScale && !matchMaker) return false;
    }

    return true;
  });

  // Sort
  if (state.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.fullPrice - b.fullPrice);
  } else if (state.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.fullPrice - a.fullPrice);
  } else if (state.sortBy === 'newest') {
    filtered.reverse();
  }

  // Update total counter
  countEl.innerText = `${filtered.length} รายการ`;

  // Render cards or empty state
  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(item => {
    const isWishlisted = state.wishlist.has(item.id);
    const hasDeposit = item.depositPrice > 0;

    return `
      <div class="product-card bg-cyber-card border border-cyber-cardBorder rounded-2xl overflow-hidden flex flex-col justify-between group">
        
        <!-- Image & Tags Area -->
        <div class="relative aspect-square bg-slate-950 p-4 overflow-hidden flex items-center justify-center cursor-pointer" onclick="openProductModal('${item.id}')">
          <!-- Main Image with Hover Image Swap -->
          <img 
            src="${item.images[0]}" 
            alt="${item.title}" 
            class="max-h-56 object-contain transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Status Tag -->
          <span class="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold border backdrop-blur-md ${item.statusBadgeColor}">
            ${item.statusText}
          </span>

          <!-- Scale Tag -->
          <span class="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-cyan-300 border border-slate-700">
            ${item.scale}
          </span>

          <!-- Quick View Hover Button -->
          <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button onclick="event.stopPropagation(); openProductModal('${item.id}')" class="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-chakra text-xs flex items-center gap-1 shadow-lg">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> ดูรายละเอียด & สเกล
            </button>
          </div>
        </div>

        <!-- Info Area -->
        <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
              <span>${item.series}</span>
              <span class="flex items-center gap-1 text-amber-400">
                <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i> ${item.rating}
              </span>
            </div>

            <h3 class="font-chakra font-bold text-sm text-white group-hover:text-cyan-400 transition-colors line-clamp-2" title="${item.title}">
              ${item.title}
            </h3>

            <div class="text-[11px] text-slate-400 mt-1">
              ค่าย: <span class="text-slate-300">${item.manufacturer}</span>
            </div>
          </div>

          <!-- Price & Order Action -->
          <div class="pt-2 border-t border-slate-800/80 space-y-2">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-[10px] text-slate-400 block">${item.status === 'preorder' ? 'ราคาจองเต็ม:' : 'ราคา:'}</span>
                <span class="text-base font-extrabold text-white font-chakra">฿${item.fullPrice.toLocaleString()}</span>
              </div>
              ${hasDeposit ? `
                <div class="text-right">
                  <span class="text-[10px] text-cyan-400 block">มัดจำ:</span>
                  <span class="text-sm font-bold text-cyan-300 font-chakra">฿${item.depositPrice.toLocaleString()}</span>
                </div>
              ` : `
                <span class="text-[11px] text-emerald-400 font-chakra">ส่งด่วน 1-2 วัน</span>
              `}
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-2">
              <button 
                onclick="addToCart('${item.id}', '${hasDeposit ? 'deposit' : 'full'}')" 
                class="flex-1 py-2 px-3 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-chakra font-bold text-xs transition border border-slate-700 hover:border-cyan-400 flex items-center justify-center gap-1.5"
              >
                <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                <span>${item.status === 'preorder' ? 'จองมัดจำ' : 'ใส่ตระกร้า'}</span>
              </button>
              
              <button 
                onclick="toggleWishlist('${item.id}')" 
                class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 border border-slate-800 transition ${isWishlisted ? 'text-rose-500' : ''}"
                title="บันทึกรายการโปรด"
              >
                <i data-lucide="heart" class="w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}"></i>
              </button>
            </div>
          </div>

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// --- Category Navigation Strip ---
function initCategoryPills() {
  const pills = document.querySelectorAll('.cat-pill');
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      state.selectedCategory = btn.dataset.category;
      renderProductGrid();
      updateActiveFilterTags();
    });
  });
}

// --- Search Filter Logic ---
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const mobileInput = document.getElementById('mobileSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const mobileToggle = document.getElementById('mobileSearchToggle');
  const mobileBar = document.getElementById('mobileSearchBar');

  const handleSearch = (val) => {
    state.searchQuery = val;
    if (val.trim()) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
    renderProductGrid();
    updateActiveFilterTags();
  };

  searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  mobileInput.addEventListener('input', (e) => handleSearch(e.target.value));

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    mobileInput.value = '';
    handleSearch('');
  });

  mobileToggle.addEventListener('click', () => {
    mobileBar.classList.toggle('hidden');
    if (!mobileBar.classList.contains('hidden')) {
      mobileInput.focus();
    }
  });
}

// --- Status & Scale Dropdown Filters ---
function initFilters() {
  const statusFilter = document.getElementById('statusFilter');
  const scaleFilter = document.getElementById('scaleFilter');
  const sortOrder = document.getElementById('sortOrder');
  const resetBtn = document.getElementById('resetFiltersBtn');

  statusFilter.addEventListener('change', (e) => {
    state.selectedStatus = e.target.value;
    renderProductGrid();
    updateActiveFilterTags();
  });

  scaleFilter.addEventListener('change', (e) => {
    state.selectedScale = e.target.value;
    renderProductGrid();
    updateActiveFilterTags();
  });

  sortOrder.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProductGrid();
  });

  resetBtn.addEventListener('click', resetAllFilters);
}

function resetAllFilters() {
  state.selectedCategory = 'all';
  state.selectedStatus = 'all';
  state.selectedScale = 'all';
  state.searchQuery = '';
  state.sortBy = 'popular';

  document.getElementById('searchInput').value = '';
  document.getElementById('mobileSearchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('statusFilter').value = 'all';
  document.getElementById('scaleFilter').value = 'all';
  document.getElementById('sortOrder').value = 'popular';

  document.querySelectorAll('.cat-pill').forEach((pill, idx) => {
    if (idx === 0) pill.classList.add('active');
    else pill.classList.remove('active');
  });

  renderProductGrid();
  updateActiveFilterTags();
  showToast('รีเซ็ตตัวกรองเรียบร้อยแล้ว', 'info');
}

function updateActiveFilterTags() {
  const container = document.getElementById('activeFiltersContainer');
  const tagsList = document.getElementById('activeTagsList');
  const tags = [];

  if (state.selectedCategory !== 'all') tags.push(`หมวดหมู่: ${state.selectedCategory}`);
  if (state.selectedStatus !== 'all') tags.push(`สถานะ: ${state.selectedStatus}`);
  if (state.selectedScale !== 'all') tags.push(`สเกล: ${state.selectedScale}`);
  if (state.searchQuery) tags.push(`ค้นหา: "${state.searchQuery}"`);

  if (tags.length === 0) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');
  tagsList.innerHTML = tags.map(t => `
    <span class="inline-flex items-center gap-1 text-[11px] bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-slate-700 font-chakra">
      ${t}
    </span>
  `).join('');
}

// --- Interactive 360 Turntable ---
function initTurntable() {
  const container = document.getElementById('turntableContainer');
  const model = document.getElementById('turntableModel');
  const degreeText = document.getElementById('turntableDegree');

  container.addEventListener('mousedown', (e) => {
    state.isDraggingTurntable = true;
    state.dragStartX = e.clientX;
    state.dragStartAngle = state.turntableAngle;
    container.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDraggingTurntable) return;
    const deltaX = e.clientX - state.dragStartX;
    let newAngle = (state.dragStartAngle + Math.floor(deltaX * 0.75)) % 360;
    if (newAngle < 0) newAngle += 360;
    updateTurntableAngle(newAngle);
  });

  window.addEventListener('mouseup', () => {
    if (state.isDraggingTurntable) {
      state.isDraggingTurntable = false;
      container.style.cursor = 'grab';
    }
  });

  // Touch Support for mobile
  container.addEventListener('touchstart', (e) => {
    state.isDraggingTurntable = true;
    state.dragStartX = e.touches[0].clientX;
    state.dragStartAngle = state.turntableAngle;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!state.isDraggingTurntable) return;
    const deltaX = e.touches[0].clientX - state.dragStartX;
    let newAngle = (state.dragStartAngle + Math.floor(deltaX * 0.75)) % 360;
    if (newAngle < 0) newAngle += 360;
    updateTurntableAngle(newAngle);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    state.isDraggingTurntable = false;
  });
}

function updateTurntableAngle(angle) {
  state.turntableAngle = angle;
  const model = document.getElementById('turntableModel');
  const degreeText = document.getElementById('turntableDegree');
  
  // 3D rotation transform with slight tilt
  model.style.transform = `rotateY(${angle}deg) rotateZ(${Math.sin(angle * Math.PI / 180) * 2}deg)`;
  degreeText.innerText = Math.round(angle);

  // Update preset buttons active state
  document.querySelectorAll('.preset-angle-btn').forEach(btn => btn.classList.remove('active'));
}

function rotateTurntableTo(deg) {
  updateTurntableAngle(deg);
  const btns = document.querySelectorAll('.preset-angle-btn');
  btns.forEach(b => {
    if (b.innerText.includes(`${deg}°`)) b.classList.add('active');
  });
}

// --- Pre-order Countdown Timer ---
function initCountdown() {
  // Target date: 4 days from now
  const targetDate = new Date().getTime() + (4 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000);

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
    document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// --- Product Detail Modal ---
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  const modal = document.getElementById('productModal');

  // Populate data
  document.getElementById('modalTitle').innerText = product.title;
  document.getElementById('modalManufacturer').innerText = product.manufacturer.toUpperCase();
  document.getElementById('modalSeries').innerText = product.series;
  document.getElementById('modalMaterial').innerText = `${product.scale} • วัสดุคุณภาพสูง (PVC, ABS)`;
  document.getElementById('modalReleaseDate').innerText = product.releaseDate;
  document.getElementById('modalDescription').innerText = product.description;
  document.getElementById('modalDimensionsText').innerText = product.dimensions;
  document.getElementById('modalScaleRatioBar').style.width = `${product.scaleBarPercent}%`;

  document.getElementById('modalFullPrice').innerText = `฿${product.fullPrice.toLocaleString()}`;
  document.getElementById('modalDepositPrice').innerText = product.depositPrice > 0 ? `฿${product.depositPrice.toLocaleString()}` : 'ชำระเต็มจำนวน';

  // Status badge
  const statusBadge = document.getElementById('modalStatusBadge');
  statusBadge.className = `absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded font-bold border backdrop-blur-md ${product.statusBadgeColor}`;
  statusBadge.innerText = product.statusText;

  // Main Image & Thumbnails
  const mainImg = document.getElementById('modalMainImg');
  mainImg.src = product.images[0];

  const thumbsContainer = document.getElementById('modalThumbnails');
  thumbsContainer.innerHTML = product.images.map((img, i) => `
    <button onclick="setModalMainImg('${img}')" class="aspect-square rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 overflow-hidden p-1 transition">
      <img src="${img}" alt="Angle ${i+1}" class="w-full h-full object-contain"/>
    </button>
  `).join('');

  // Wishlist button state
  const wishBtn = document.getElementById('modalWishlistBtn');
  const isWish = state.wishlist.has(product.id);
  wishBtn.innerHTML = `<i data-lucide="heart" class="w-5 h-5 ${isWish ? 'text-rose-500 fill-rose-500' : 'text-slate-300'}"></i>`;

  // Add to cart button action
  const addBtn = document.getElementById('modalAddToCartBtn');
  addBtn.onclick = () => {
    const selectedPayOption = document.querySelector('input[name="paymentOption"]:checked').value;
    addToCart(product.id, selectedPayOption);
    closeProductModal();
  };

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function setModalMainImg(url) {
  document.getElementById('modalMainImg').src = url;
}

function closeProductModal() {
  document.getElementById('productModal').classList.add('hidden');
}

// --- Cart System ---
function initCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const cartBtn = document.getElementById('cartDrawerBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartBackdrop');
  const checkoutBtn = document.getElementById('checkoutBtn');

  cartBtn.addEventListener('click', () => {
    drawer.classList.remove('hidden');
    renderCart();
  });

  const closeDrawer = () => drawer.classList.add('hidden');
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('กรุณาเลือกโมเดลลงตระกร้าก่อนทำรายการ', 'warning');
      return;
    }
    closeDrawer();
    openCheckoutModal();
  });
}

function addToCart(productId, paymentType = 'deposit') {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId && item.paymentType === paymentType);

  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      ...product,
      paymentType: paymentType, // 'deposit' or 'full'
      quantity: 1
    });
  }

  updateCartBadges();
  showToast(`เพิ่ม "${product.title}" ลงตระกร้าแล้ว`, 'success');
}

function updateCartQuantity(productId, paymentType, delta) {
  const item = state.cart.find(i => i.id === productId && i.paymentType === paymentType);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => !(i.id === productId && i.paymentType === paymentType));
  }

  updateCartBadges();
  renderCart();
}

function removeCartItem(productId, paymentType) {
  state.cart = state.cart.filter(i => !(i.id === productId && i.paymentType === paymentType));
  updateCartBadges();
  renderCart();
  showToast('ลบรายการออกจากตระกร้าแล้ว', 'info');
}

function updateCartBadges() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cartCountBadge').innerText = totalCount;
  document.getElementById('cartDrawerCount').innerText = `${totalCount} รายการ`;
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalText');
  const depositDueEl = document.getElementById('cartDepositDueText');

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-500">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
        <p class="font-chakra text-sm">ยังไม่มีสินค้าในตระกร้าของคุณ</p>
        <p class="text-xs text-slate-600 mt-1">เลือกโมเดลสุดเท่ด้านบนลงตระกร้าได้เลย!</p>
      </div>
    `;
    subtotalEl.innerText = '฿0';
    depositDueEl.innerText = '฿0';
    lucide.createIcons();
    return;
  }

  let totalFull = 0;
  let totalDueNow = 0;

  container.innerHTML = state.cart.map(item => {
    const isDeposit = item.paymentType === 'deposit' && item.depositPrice > 0;
    const pricePerUnit = isDeposit ? item.depositPrice : item.fullPrice;
    const itemFullTotal = item.fullPrice * item.quantity;
    const itemDueTotal = pricePerUnit * item.quantity;

    totalFull += itemFullTotal;
    totalDueNow += itemDueTotal;

    return `
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-3 flex gap-3 items-center">
        <img src="${item.images[0]}" alt="${item.title}" class="w-16 h-16 object-contain bg-slate-950 rounded-lg p-1 border border-slate-800"/>
        
        <div class="flex-1 min-w-0">
          <h4 class="font-chakra font-bold text-xs text-white truncate">${item.title}</h4>
          <div class="text-[10px] text-cyan-400 mt-0.5">
            ${isDeposit ? 'รูปแบบ: ชำระมัดจำ' : 'รูปแบบ: ชำระเต็มจำนวน'}
          </div>
          <div class="text-xs font-mono font-bold text-slate-200 mt-1">
            ฿${pricePerUnit.toLocaleString()} <span class="text-[10px] text-slate-500 font-normal">x ${item.quantity}</span>
          </div>
        </div>

        <div class="flex flex-col items-end gap-1.5">
          <button onclick="removeCartItem('${item.id}', '${item.paymentType}')" class="text-slate-500 hover:text-rose-400 transition p-1">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
          <div class="flex items-center gap-1 bg-slate-950 rounded border border-slate-800 px-1 py-0.5 text-xs font-mono">
            <button onclick="updateCartQuantity('${item.id}', '${item.paymentType}', -1)" class="text-slate-400 hover:text-white px-1">-</button>
            <span class="px-1 text-cyan-300">${item.quantity}</span>
            <button onclick="updateCartQuantity('${item.id}', '${item.paymentType}', 1)" class="text-slate-400 hover:text-white px-1">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  subtotalEl.innerText = `฿${totalFull.toLocaleString()}`;
  depositDueEl.innerText = `฿${totalDueNow.toLocaleString()}`;
  lucide.createIcons();
}

function clearCart() {
  state.cart = [];
  updateCartBadges();
  renderCart();
}

// --- Quick Pre-order Hero Action ---
function quickPreOrderHero() {
  addToCart(heroProductData.id, 'deposit');
  document.getElementById('cartDrawer').classList.remove('hidden');
  renderCart();
}

// --- Wishlist Management ---
function toggleWishlist(productId) {
  if (state.wishlist.has(productId)) {
    state.wishlist.delete(productId);
    showToast('นำออกจากรายการโปรดแล้ว', 'info');
  } else {
    state.wishlist.add(productId);
    showToast('เพิ่มในรายการโปรดเรียบร้อย', 'success');
  }
  document.getElementById('wishlistBadge').innerText = state.wishlist.size;
  renderProductGrid();
}

// --- Checkout Modal Flow ---
function openCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  const formStep = document.getElementById('checkoutFormStep');
  const payStep = document.getElementById('checkoutPaymentStep');
  const succStep = document.getElementById('checkoutSuccessStep');

  formStep.classList.remove('hidden');
  payStep.classList.add('hidden');
  succStep.classList.add('hidden');

  // Calculate due amount
  let totalDueNow = 0;
  state.cart.forEach(item => {
    const isDeposit = item.paymentType === 'deposit' && item.depositPrice > 0;
    const price = isDeposit ? item.depositPrice : item.fullPrice;
    totalDueNow += price * item.quantity;
  });

  document.getElementById('checkoutAmountText').innerText = `฿${totalDueNow.toLocaleString()}`;
  document.getElementById('paymentQrAmount').innerText = `฿${totalDueNow.toLocaleString()}`;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.add('hidden');
}

function goToPaymentStep() {
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const addr = document.getElementById('orderAddress').value.trim();

  if (!name || !phone || !addr) {
    showToast('กรุณากรอกชื่อ, เบอร์โทรศัพท์ และที่อยู่จัดส่งให้ครบถ้วน', 'warning');
    return;
  }

  document.getElementById('checkoutFormStep').classList.add('hidden');
  document.getElementById('checkoutPaymentStep').classList.remove('hidden');
  lucide.createIcons();
}

function completePaymentSimulation() {
  document.getElementById('checkoutPaymentStep').classList.add('hidden');
  document.getElementById('checkoutSuccessStep').classList.remove('hidden');
  
  // Generate random order ID
  const randomId = `#TH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById('confirmedOrderId').innerText = randomId;
  lucide.createIcons();
}

// --- Toast Notifications ---
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');

  const bgColors = {
    success: 'bg-emerald-950 border-emerald-500/50 text-emerald-300',
    warning: 'bg-amber-950 border-amber-500/50 text-amber-300',
    info: 'bg-slate-900 border-cyan-500/50 text-cyan-300',
  };

  const icons = {
    success: 'check-circle-2',
    warning: 'alert-triangle',
    info: 'info',
  };

  toast.className = `toast-enter flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-2xl backdrop-blur-md text-xs font-chakra pointer-events-auto ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    <i data-lucide="${icons[type] || 'info'}" class="w-4 h-4"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

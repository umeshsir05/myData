// Authentication Config
const VALID_USER = { username: 'admin', password: 'elina89' };

// Categorized Personal Data (100% Verified)
const VAULT_DATA = [
    // 1. BANKING & UPI
    {
        category: "Banking & UPI",
        icon: "🏦",
        title: "HDFC Bank & NetBanking",
        fields: [
            { label: "Customer ID", value: "184576100" },
            { label: "Login PIN", value: "7586" },
            { label: "NetBanking Pwd", value: "Umesh8924@" },
            { label: "App Password", value: "Umesh7589@" },
            { label: "UPI PIN", value: "7520" },
            { label: "CKYC Number", value: "60085311089196" }
        ]
    },
    {
        category: "Banking & UPI",
        icon: "🏦",
        title: "SBI NetBanking & YONO",
        fields: [
            { label: "Username", value: "BANJARE1989" },
            { label: "Login Password", value: "Umesh8998@" },
            { label: "Profile Password", value: "Umesh8989@" },
            { label: "YONO MPIN", value: "758948" },
            { label: "Reward User ID", value: "7509873448" },
            { label: "Reward Pwd", value: "Ukb8919@20" },
            { label: "Reward Member ID", value: "21081240" }
        ]
    },
    {
        category: "Banking & UPI",
        icon: "🏦",
        title: "PNB One & BHIM",
        fields: [
            { label: "UPI PIN", value: "759922" },
            { label: "TPIN", value: "7898" },
            { label: "PNB BHIM Pin", value: "759921" },
            { label: "MPIN", value: "4587" },
            { label: "Nisha PNB A/C No", value: "2082001700108252" }
        ]
    },
    {
        category: "Banking & UPI",
        icon: "🏦",
        title: "IPPB & Other UPI Codes",
        fields: [
            { label: "IPPB Bank MPIN", value: "7586" },
            { label: "UPI Reference", value: "S750998-M9705-H7520" },
            { label: "Security Codes", value: "S-9769G-4954M-4025 K-8920 H-5256 P-0467" },
            { label: "Mpass", value: "1997" }
        ]
    },

    // 2. INVESTMENTS & FINANCE
    {
        category: "Investments & Finance",
        icon: "📈",
        title: "Groww App",
        fields: [
            { label: "Password", value: "Ukb198924*" },
            { label: "PIN", value: "7589" }
        ]
    },
    {
        category: "Investments & Finance",
        icon: "📈",
        title: "Paytm Money & CDSL",
        fields: [
            { label: "Paytm Login Pwd", value: "8989" },
            { label: "Paytm PIN 1", value: "7589" },
            { label: "Paytm PIN 2", value: "7856" },
            { label: "CDSL TPIN", value: "140353" },
            { label: "CDSL Username", value: "umesh_banjare" },
            { label: "CDSL Password", value: "Umesh8990#" },
            { label: "BO ID", value: "1208870157438618" }
        ]
    },
    {
        category: "Investments & Finance",
        icon: "📈",
        title: "Mutual Funds (CAMS & KFin)",
        fields: [
            { label: "CAMS Email", value: "ukbanjare05@gmail.com" },
            { label: "CAMS Password", value: "Umesh89cam@" },
            { label: "KFin Email (Nippon)", value: "ukbanjare05@gmail.com" },
            { label: "KFin Password", value: "Umesh89kfn@" }
        ]
    },

    // 3. EMAIL ACCOUNTS
    {
        category: "Email Accounts",
        icon: "✉️",
        title: "Primary Emails (1 - 6)",
        fields: [
            { label: "1. ukbanjare05@gmail.com", value: "Umesh891926@" },
            { label: "2. ukbanjare1989@gmail.com", value: "ukb1989*20" },
            { label: "3. ubanjare702@gmail.com", value: "Umesh199720#" },
            { label: "4. umeshbanjare89@yahoo.com", value: "umesh89#yahoo" },
            { label: "5. kbanjareumesh@gmail.com", value: "Ukbanjare@891997" },
            { label: "6. ukbanjare36@gmail.com", value: "Umesh8924#" }
        ]
    },
    {
        category: "Email Accounts",
        icon: "✉️",
        title: "Other & Official Emails (7 - 12)",
        fields: [
            { label: "7. umeshkumarbanjare458@gmail.com", value: "Ukbanjare@8919" },
            { label: "8. umeshbanjare58@gmail.com", value: "Ukbanjare@891997" },
            { label: "9. ubanjareji@gmail.com", value: "ubanjare89ji#" },
            { label: "10. Kumarbanjare981@gmail.com", value: "Kumarban89@" },
            { label: "11. umeshsir05@gmail.com", value: "Umesh05sir@" },
            { label: "12. umeshsirbanjare@gmail.com", value: "UmeshSir@25" }
        ]
    },

    // 4. TEACHING & SCHOOL (GLD / CBSE)
    {
        category: "Teaching & School",
        icon: "🎓",
        title: "Teacher IDs & UDISE",
        fields: [
            { label: "CBSE Registration", value: "T24002736399" },
            { label: "CBSE Teacher ID", value: "2736399" },
            { label: "Joining Date", value: "01 July 2020" },
            { label: "UDISE Teacher ID", value: "TP36458229" },
             { label: "CG TET 2024", value: "PASS" },
            { label: "CG TET ROLL No", value: "18231185" },
            { label: "CG TET MARKS", value: "90" }
        ]
    },
    {
        category: "Teaching & School",
        icon: "🎓",
        title: "CBSE OSM Evaluation",
        fields: [
            { label: "User ID", value: "E2736399" },
            { label: "Password", value: "Umesh89@" },
            { label: "School No", value: "16270" }
        ]
    },
    {
        category: "Teaching & School",
        icon: "🎓",
        title: "GLD School Accounts",
        fields: [
            { label: "Exam Cell Email", value: "gldexamcell@gmail.com" },
            { label: "Exam Cell Pwd", value: "Gldexam@2026" },
            { label: "GLD Email", value: "gldpublicschool@gmail.com" },
            { label: "GLD Email Pwd", value: "Pankaj@123" },
            { label: "GLD FB Pwd (Old)", value: "pankaJ@2024" },
            { label: "GLD FB Info", value: "9827500065 / meenabai" },
            { label: "GLD WiFi Password", value: "GLD@16270" }
        ]
    },

    // 5. GOVT IDs & SCHEMES
    {
        category: "Govt IDs & Schemes",
        icon: "🏛️",
        title: "EPF & ESIC",
        fields: [
            { label: "EPF UAN", value: "101932478771" },
            { label: "EPF Password", value: "Umesh8927#" },
            { label: "ESIC No", value: "5919200119" },
            { label: "ESIC Password", value: "Umesh89@" }
        ]
    },
    {
        category: "Govt IDs & Schemes",
        icon: "🏛️",
        title: "DigiLocker, UMANG & Aadhaar App",
        fields: [
            { label: "DigiLocker PIN 1", value: "758919" },
            { label: "DigiLocker PIN 2", value: "758926" },
            { label: "UMANG App MPIN", value: "758920" },
            { label: "New Aadhaar App MPIN", value: "758920" },
            { label: "RTI Password", value: "Umesh8919@" }
        ]
    },
    {
        category: "Govt IDs & Schemes",
        icon: "🏛️",
        title: "CG Vyapam & DEO Recruitment",
        fields: [
            { label: "CG Vyapam Pwd", value: "Umesh898920@" },
            { label: "DEO 2026 User ID", value: "CSPTCL26005461" },
            { label: "DEO 2026 Password", value: "Umesh89@" }
        ]
    },
    {
        category: "Govt IDs & Schemes",
        icon: "🏛️",
        title: "Ration Card, AwaasPlus & MVY",
        fields: [
            { label: "स्थिति (Status)", value: "नवीनीकरण किया गया" },
            { label: "नवीन राशनकार्ड क्र.", value: "223791668906" },
            { label: "एंट्री दिनाँक", value: "24/03/2022 14:27:18" },
            { label: "नवीनीकरण दिनाँक", value: "25/01/2024 09:53:18" },
            { label: "मुखिया / पिता-पति", value: "दुलेसरी बंजारे / उमेश कुमार बंजारे" },
            { label: "जिला / ग्राम पंचायत", value: "जांजगीर-चांपा / कोसीर" },
            { label: "Mahtari Vandan Reg", value: "MVY000868764 (7509873448)" },
            { label: "AwaasPlus ID", value: "200953602 (Cat: 81, Overall: 129)" }
        ]
    },

    // 6. CLOUD, SOCIAL & DEVICES
    {
        category: "Cloud & Social",
        icon: "☁️",
        title: "Microsoft OneDrive",
        fields: [
            { label: "1. ukbanjare05@gmail.com", value: "Ukb8919@" },
            { label: "2. ukbanjare1989@gmail.com", value: "ukb8919@" },
            { label: "5. kbanjareumesh@gmail.com", value: "kbanjare8919#" },
            { label: "6. ukbanjare36@gmail.com", value: "ukb3689banjare@" },
            { label: "9. ubanjareji@gmail.com", value: "kubanjareji97" }
        ]
    },
    {
        category: "Cloud & Social",
        icon: "☁️",
        title: "Social Media & Devices",
        fields: [
            { label: "Facebook (ukbanjare05)", value: "9981201989" },
            { label: "LinkedIn (ukbanjare1989)", value: "Umeshaa8924" },
            { label: "Telegram 2-Step PIN", value: "891905@" },
            { label: "Mi Account Password", value: "Umesh89#" },
            { label: "Redmi 6A (ubanjare702)", value: "Umesh8997@" }
        ]
    },

    // 7. DEVELOPER & WEBSITES
    {
        category: "Dev & Websites",
        icon: "💻",
        title: "GitHub, Shutterstock & WebIntoApp",
        fields: [
            { label: "GitHub Username", value: "umeshsir05" },
            { label: "GitHub Email", value: "ukbanjare1989@gmail.com" },
            { label: "GitHub Password", value: "Umesh8920@" },
            { label: "Shutterstock Email", value: "ukbanjare1989@gmail.com" },
            { label: "Shutterstock Pwd", value: "Umesh8945#" },
            { label: "WebIntoApp Email", value: "kbanjareumesh@gmail.com" },
            { label: "WebIntoApp Pwd", value: "Kbanjare89@" }
        ]
    },
    {
        category: "Dev & Websites",
        icon: "💻",
        title: "Gemini Website Prompts (Ukbanjare05)",
        fields: [
            { label: "1. Constitution", value: "CONSTITUTION WEBSITE" },
            { label: "2. Practice Set", value: "PRACTICE SET CDP" },
            { label: "3. Geography", value: "भूगोल वस्तुनिष्ठ प्रश्नोत्तरी" },
            { label: "4. Hindi", value: "सामान्य हिंदी वस्तुनिष्ठ प्रश्नावली वेबसाइट" },
            { label: "5. History", value: "भारतीय इतिहास MCQ वेबसाइट कोड" },
            { label: "6. Chhattisgarh GK", value: "छत्तीसगढ़ सामान्य ज्ञान क्विज़ वेबसाइट" }
        ]
    },
    {
        category: "Dev & Websites",
        icon: "💻",
        title: "My GitHub Repositories (1 - 10)",
        fields: [
            { label: "1. vgrid", value: "umeshsir05/vgrid" },
            { label: "2. notes", value: "umeshsir05/notes" },
            { label: "3. speakfluently", value: "umeshsir05/speakfluently" },
            { label: "4. UmeshKumar", value: "umeshsir05/UmeshKumar" },
            { label: "5. fbPostmaker", value: "umeshsir05/fbPostmaker" },
            { label: "6. myData", value: "umeshsir05/myData" },
            { label: "7. gamehub", value: "umeshsir05/gamehub" },
            { label: "8. eventList", value: "umeshsir05/eventList" },
            { label: "9. umesh-sir", value: "umeshsir05/umesh-sir" },
            { label: "10. hindiPedagogy", value: "umeshsir05/hindiPedagogy" }
        ]
    },
    {
        category: "Dev & Websites",
        icon: "💻",
        title: "My GitHub Repositories (11 - 19)",
        fields: [
            { label: "11. assistant_teacher", value: "umeshsir05/assistant_teacher" },
            { label: "12. banjare-tutorial", value: "umeshsir05/banjare-tutorial" },
            { label: "13. myNotes", value: "umeshsir05/myNotes" },
            { label: "14. questionMaker", value: "umeshsir05/questionMaker" },
            { label: "15. cdpctet", value: "umeshsir05/cdpctet" },
            { label: "16. CodeMaster", value: "umeshsir05/CodeMaster" },
            { label: "17. hindiGrammer", value: "umeshsir05/hindiGrammer" },
            { label: "18. game2", value: "umeshsir05/game2" },
            { label: "19. studentsRecord", value: "umeshsir05/studentsRecord" }
        ]
    }
];

let activeCategory = "All";

// Login Logic
function handleLogin() {
    const user = document.getElementById('username').value.trim();
    const pass = document.getElementById('password').value.trim();
    const errorBox = document.getElementById('loginError');

    if (user === VALID_USER.username && pass === VALID_USER.password) {
        sessionStorage.setItem('vaultLoggedIn', 'true');
        errorBox.classList.remove('active');
        document.getElementById('password').value = '';
        initDashboard();
    } else {
        errorBox.classList.add('active');
    }
}

function handleLogout() {
    sessionStorage.removeItem('vaultLoggedIn');
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
}

function togglePassword() {
    const pwd = document.getElementById('password');
    pwd.type = pwd.type === 'password' ? 'text' : 'password';
}

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.getElementById('loginContainer').style.display !== 'none') {
        handleLogin();
    }
});

// Initialize Dashboard
function initDashboard() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'flex';
    buildCategoryMenu();
    renderCards();
}

// Build Sidebar Category Menu
function buildCategoryMenu() {
    const menu = document.getElementById('categoryMenu');
    const categories = ["All", ...new Set(VAULT_DATA.map(item => item.category))];

    menu.innerHTML = categories.map(cat => {
        const count = cat === "All"
            ? VAULT_DATA.length
            : VAULT_DATA.filter(i => i.category === cat).length;

        const iconObj = VAULT_DATA.find(i => i.category === cat);
        const icon = cat === "All" ? "📂" : (iconObj ? iconObj.icon : "📁");

        return `
            <button class="menu-item ${cat === activeCategory ? 'active' : ''}" onclick="selectCategory('${cat}')">
                <span>${icon} ${cat}</span>
                <span class="badge">${count}</span>
            </button>
        `;
    }).join('');
}

// Select Category from Menu
function selectCategory(category) {
    activeCategory = category;
    document.getElementById('currentCategoryTitle').textContent = category === "All" ? "All Data" : category;
    document.getElementById('searchInput').value = '';
    buildCategoryMenu();
    renderCards();

    if (window.innerWidth <= 768) {
        toggleMenu(false);
    }
}

// Render Cards
function renderCards(searchQuery = "") {
    const container = document.getElementById('cardsContainer');
    const query = searchQuery.toLowerCase();

    const filtered = VAULT_DATA.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        if (!matchesCategory) return false;

        if (!query) return true;

        const inTitle = item.title.toLowerCase().includes(query);
        const inCategory = item.category.toLowerCase().includes(query);
        const inFields = item.fields.some(f =>
            f.label.toLowerCase().includes(query) || f.value.toLowerCase().includes(query)
        );
        return inTitle || inCategory || inFields;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">Koi data nahi mila.</p>`;
        return;
    }

    container.innerHTML = filtered.map(card => `
        <div class="data-card">
            <div class="card-header">
                <span class="card-title">${card.icon} ${card.title}</span>
                <span class="card-tag">${card.category}</span>
            </div>
            <div class="card-body">
                ${card.fields.map(f => `
                    <div class="field-row">
                        <div class="field-info">
                            <span class="field-label">${escapeHtml(f.label)}</span>
                            <span class="field-value">${escapeHtml(f.value)}</span>
                        </div>
                        <button class="copy-btn" onclick="copyText('${escapeQuotes(f.value)}')">Copy</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function filterData() {
    const query = document.getElementById('searchInput').value;
    renderCards(query);
}

// Copy to Clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
}

// Mobile Sidebar Toggle
function toggleMenu(forceState) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const isOpen = typeof forceState === 'boolean' ? forceState : !sidebar.classList.contains('open');

    sidebar.classList.toggle('open', isOpen);
    overlay.classList.toggle('active', isOpen);
}

// Dark / Light Mode Toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('themeToggle').textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('vaultTheme', isLight ? 'light' : 'dark');
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function escapeQuotes(str) {
    return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Check Session & Theme on Load
window.addEventListener('load', () => {
    if (localStorage.getItem('vaultTheme') === 'light') {
        document.body.classList.add('light-mode');
        const btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = '🌙';
    }
    if (sessionStorage.getItem('vaultLoggedIn') === 'true') {
        initDashboard();
    }
});

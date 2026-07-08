// Function to generate fellow image URL
function getFellowImage(id, name, country) {
    // Use a combination of ID and name for consistent images
    const seed = `fellow${id}-${name.replace(/\s+/g, '-').toLowerCase()}`;
    return `https://picsum.photos/seed/${seed}/150/150.jpg`;
}

// Function to get country flag emoji
function getCountryFlag(countryCode) {
    const flags = {
        'NG': 'Nigeria', 'KE': 'Kenya', 'UG': 'Uganda', 'ZA': 'South Africa', 'ZW': 'Zimbabwe',
        'CM': 'Cameroon', 'RW': 'Rwanda', 'TZ': 'Tanzania', 'GH': 'Ghana', 'LR': 'Liberia',
        'MW': 'Malawi', 'ET': 'Ethiopia', 'NE': 'Niger', 'SZ': 'Eswatini', 'CD': 'DRC',
        'SL': 'Sierra Leone', 'BW': 'Botswana', 'LS': 'Lesotho', 'SO': 'Somalia', 'TG': 'Togo',
        'BF': 'Burkina Faso', 'CI': 'Ivory Coast', 'DJ': 'Djibouti', 'EG': 'Egypt', 'GM': 'Gambia',
        'GN': 'Guinea', 'GW': 'Guinea-Bissau', 'LY': 'Libya', 'MA': 'Morocco', 'MR': 'Mauritania',
        'MU': 'Mauritius', 'MZ': 'Mozambique', 'NA': 'Namibia', 'SC': 'Seychelles', 'SD': 'Sudan',
        'SN': 'Senegal', 'SS': 'South Sudan', 'TD': 'Chad', 'TN': 'Tunisia', 'ZM': 'Zambia',
        'IN': 'India', 'PK': 'Pakistan', 'PH': 'The Philippines', 'NP': 'Nepal', 'BD': 'Bangladesh',
        'CN': 'China', 'JP': 'Japan', 'KR': 'South Korea', 'TH': 'Thailand', 'VN': 'Vietnam',
        'ID': 'Indonesia', 'MY': 'Malaysia', 'SG': 'Singapore', 'LK': 'Sri Lanka', 'MM': 'Myanmar',
        'KH': 'Cambodia', 'LA': 'Laos', 'BT': 'Bhutan', 'MV': 'Maldives', 'AF': 'Afghanistan',
        'PL': 'Poland', 'GB': 'United Kingdom', 'FR': 'France', 'DE': 'Germany', 'IT': 'Italy',
        'ES': 'Spain', 'NL': 'Netherlands', 'BE': 'Belgium', 'AT': 'Austria', 'CH': 'Switzerland',
        'SE': 'Sweden', 'NO': 'Norway', 'DK': 'Denmark', 'FI': 'Finland', 'IE': 'Ireland',
        'PT': 'Portugal', 'GR': 'Greece', 'CZ': 'Czech Republic', 'HU': 'Hungary', 'RO': 'Romania',
        'BG': 'Bulgaria', 'HR': 'Croatia', 'SK': 'Slovakia', 'SI': 'Slovenia', 'EE': 'Estonia',
        'LV': 'Latvia', 'LT': 'Lithuania', 'LU': 'Luxembourg', 'MT': 'Malta', 'CY': 'Cyprus',
        'CA': 'Canada', 'US': 'United States', 'MX': 'Mexico', 'GT': 'Guatemala', 'CR': 'Costa Rica',
        'PA': 'Panama', 'HN': 'Honduras', 'SV': 'El Salvador', 'NI': 'Nicaragua', 'BZ': 'Belize',
        'BR': 'Brazil', 'AR': 'Argentina', 'CL': 'Chile', 'CO': 'Colombia', 'PE': 'Peru',
        'VE': 'Venezuela', 'EC': 'Ecuador', 'BO': 'Bolivia', 'PY': 'Paraguay', 'UY': 'Uruguay',
        'GY': 'Guyana', 'SR': 'Suriname', 'GF': 'French Guiana', 'AU': 'Australia', 'NZ': 'New Zealand',
        'PG': 'Papua New Guinea', 'FJ': 'Fiji', 'SB': 'Solomon Islands', 'VU': 'Vanuatu', 'NC': 'New Caledonia',
        'PF': 'French Polynesia', 'CK': 'Cook Islands', 'TO': 'Tonga', 'WS': 'Samoa', 'KI': 'Kiribati',
        'TV': 'Tuvalu', 'NU': 'Niue', 'PW': 'Palau', 'FM': 'Micronesia', 'MH': 'Marshall Islands',
        'MP': 'Northern Mariana Islands', 'GU': 'Guam', 'AS': 'American Samoa', 'YE': 'Yemen',
        'LR': 'Liberia', 'SL': 'Sierra Leone'
    };
    return flags[countryCode] || countryCode;
}

// Real NGO Fellows Data with Coordinates
const realFellows = [
    // 2026 Fellows
    {
        id: 1,
        name: "Rev. Adenike C. Olumide-Emmanuel",
        bio: "Founder and President, Opolo ati Ewa Women Empowerment Initiative",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos",
        year: 2026
    },
    {
        id: 2,
        name: "Aline Hitiyaremye Umubyeyi",
        bio: "Chief Executive Officer, Partners For Conservation",
        country: "Rwanda",
        country_code: "RW",
        latitude: -1.9403,
        longitude: 30.1304,
        city: "Kigali",
        year: 2026
    },
    {
        id: 3,
        name: "Chinedu George Nnawetanma",
        bio: "Fiscal Sponsorship Program Manager, Financing Alliance for Health",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Abuja",
        year: 2026
    },
    {
        id: 4,
        name: "Christian Fru Ngang",
        bio: "Founder and CEO, Research and Development Without Borders",
        country: "Cameroon",
        country_code: "CM",
        latitude: 3.8480,
        longitude: 11.5021,
        city: "Yaoundé",
        year: 2026
    },
    {
        id: 5,
        name: "Cosmas Rongoti",
        bio: "Executive Director, Shanduko Yeupenyu Child Care",
        country: "Zimbabwe",
        country_code: "ZW",
        latitude: -18.0744,
        longitude: 31.0748,
        city: "Harare",
        year: 2026
    },
    {
        id: 6,
        name: "Dale Mukwena",
        bio: "Monitoring, Evaluation, Research & Learning Specialist, Kwedu Initiatives NPC",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg",
        year: 2026
    },
    {
        id: 7,
        name: "Faith Efeosa Oviasuyi",
        bio: "Founder, FaithConnect Advocacy Foundation",
        country: "Canada",
        country_code: "CA",
        latitude: 43.6532,
        longitude: -79.3832,
        city: "Toronto",
        year: 2026
    },
    {
        id: 8,
        name: "Gayathri Suryanarayanan",
        bio: "Centre Coordinator - Youth Empowerment Services, V-Excel Educational Trust",
        country: "India",
        country_code: "IN",
        latitude: 13.0827,
        longitude: 80.2707,
        city: "Chennai",
        year: 2026
    },
    {
        id: 9,
        name: "Hajra Chaudhry",
        bio: "Founder, Thryve Within",
        country: "Pakistan",
        country_code: "PK",
        latitude: 24.8607,
        longitude: 67.0011,
        city: "Karachi",
        year: 2026
    },
    {
        id: 10,
        name: "Hasan Al Banna",
        bio: "Founder, Association for Parivartan of Nation",
        country: "India",
        country_code: "IN",
        latitude: 28.7041,
        longitude: 77.1025,
        city: "Delhi",
        year: 2026
    },
    {
        id: 11,
        name: "James Kipsang Cheruiyot",
        bio: "Resource Mobilization Manager, Kakenya's Dream",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi",
        year: 2026
    },
    {
        id: 12,
        name: "Janat Namukose",
        bio: "Associate Head People and Culture, STiR Education",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala",
        year: 2026
    },
    {
        id: 13,
        name: "Joseph Olugbenga Akinola",
        bio: "Brand Executive, Global Peace Lets Talk",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos",
        year: 2026
    },
    {
        id: 14,
        name: "Prof. Judith Kuoh Anchang-Kimbi",
        bio: "Founder, TRACH",
        country: "Cameroon",
        country_code: "CM",
        latitude: 3.8480,
        longitude: 11.5021,
        city: "Bamenda",
        year: 2026
    },
    {
        id: 15,
        name: "Koushik Subramanian",
        bio: "Program Director, CURMA",
        country: "The Philippines",
        country_code: "PH",
        latitude: 15.4780,
        longitude: 120.6392,
        city: "San Fernando",
        year: 2026
    },
    {
        id: 16,
        name: "L. Arya Chandran",
        bio: "Chief Operating Officer, Bharata Mata Extension for Organic Research and Environment (BeFORE)",
        country: "India",
        country_code: "IN",
        latitude: 10.8505,
        longitude: 76.2711,
        city: "Kochi",
        year: 2026
    },
    {
        id: 17,
        name: "Lybania Guadalupe Arévalo",
        bio: "Architect, Asociación Coordinadora de Comunidades Indígenas de El Salvado (ACCIES)",
        country: "El Salvador",
        country_code: "SV",
        latitude: 13.7942,
        longitude: -88.8965,
        city: "San Salvador",
        year: 2026
    },
    {
        id: 18,
        name: "Mariam Kabamba Merry",
        bio: "National Coordinator, Congo Environnement et Nature",
        country: "DRC",
        country_code: "CD",
        latitude: -4.4419,
        longitude: 15.2663,
        city: "Kinshasa",
        year: 2026
    },
    {
        id: 19,
        name: "Mariya Shmelova",
        bio: "Chairperson, To Proste Foundation",
        country: "Poland",
        country_code: "PL",
        latitude: 52.2297,
        longitude: 21.0122,
        city: "Warsaw",
        year: 2026
    },
    {
        id: 20,
        name: "Midhun S Noble",
        bio: "Chairperson, New Education Group - Foundation for Innovation and Research in Education",
        country: "India",
        country_code: "IN",
        latitude: 12.9716,
        longitude: 77.5946,
        city: "Bangalore",
        year: 2026
    },
    {
        id: 21,
        name: "Natalia Salazar",
        bio: "Secretary General, HOPE'87",
        country: "Ecuador",
        country_code: "EC",
        latitude: -0.1807,
        longitude: -78.4678,
        city: "Quito",
        year: 2026
    },
    {
        id: 22,
        name: "Ndumiso Maxwell Dlamini",
        bio: "HIV AIDS Projects Coordinator, Swaziland Conference of Churches",
        country: "Eswatini",
        country_code: "SZ",
        latitude: -26.5225,
        longitude: 31.4658,
        city: "Mbabane",
        year: 2026
    },
    {
        id: 23,
        name: "Nixon Ochieng'",
        bio: "Digital Strategy, Platform & Community Lead, The NGO Whisperer Centre For Social Impact",
        country: "UK and Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi",
        year: 2026
    },
    {
        id: 24,
        name: "Pearl Bitanihirwe",
        bio: "Human Resource Manager, GiveDirectly",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala",
        year: 2026
    },
    {
        id: 25,
        name: "Peter Oluwatobi Ogundele",
        bio: "Founder, Peter Ogundele Leadership and Impact Foundation Inc.",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos",
        year: 2026
    },
    {
        id: 26,
        name: "Purine Mthembi Bhembe",
        bio: "Vice Chairperson, Liphimbo Labomake",
        country: "Eswatini",
        country_code: "SZ",
        latitude: -26.5225,
        longitude: 31.4658,
        city: "Manzini",
        year: 2026
    },
    {
        id: 27,
        name: "Dr. Radhika Shrivastava Adholeya",
        bio: "Executive Director, Femworld Foundation",
        country: "India",
        country_code: "IN",
        latitude: 28.7041,
        longitude: 77.1025,
        city: "Delhi",
        year: 2026
    },
    {
        id: 28,
        name: "Raquel Prado",
        bio: "Executive Director, MigraClima",
        country: "Brazil",
        country_code: "BR",
        latitude: -22.9068,
        longitude: -43.1729,
        city: "Rio de Janeiro",
        year: 2026
    },
    {
        id: 29,
        name: "Rohit Sharma",
        bio: "Founder, Awaaz Leadership Labs",
        country: "India",
        country_code: "IN",
        latitude: 19.0760,
        longitude: 72.8777,
        city: "Mumbai",
        year: 2026
    },
    {
        id: 30,
        name: "Sagar Sisodia",
        bio: "Co-founder and CEO, Rag Dreams Weavers Association",
        country: "India",
        country_code: "IN",
        latitude: 26.9124,
        longitude: 75.7873,
        city: "Jaipur",
        year: 2026
    },
    {
        id: 31,
        name: "Salma Adam Bakari",
        bio: "Educator & Software Engineer, Fata School",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi",
        year: 2026
    },
    {
        id: 32,
        name: "Satir Omar Bahati",
        bio: "Founder & Executive Director, Uwezo Youth Empowerment",
        country: "Rwanda",
        country_code: "RW",
        latitude: -1.9403,
        longitude: 30.1304,
        city: "Kigali",
        year: 2026
    },
    {
        id: 33,
        name: "Dr. Shrooq Mansour Ali Alabsi",
        bio: "Grants & Partnership Manager, Psychiatric Care Developmental Foundation (PCF)",
        country: "Yemen",
        country_code: "YE",
        latitude: 15.3694,
        longitude: 44.1910,
        city: "Sana'a",
        year: 2026
    },
    {
        id: 34,
        name: "Soohemba Agatha Aker Esq.",
        bio: "Executive Director, Nobul Africa Foundation",
        country: "Nigeria",
        country_code: "NG",
        latitude: 9.0579,
        longitude: 8.6753,
        city: "Abuja",
        year: 2026
    },
    {
        id: 35,
        name: "Thobejane Rubeen Mfankwakhe Magagula",
        bio: "Executive Director, Babukisi Foundation",
        country: "Eswatini",
        country_code: "SZ",
        latitude: -26.5225,
        longitude: 31.4658,
        city: "Siteki",
        year: 2026
    },
    {
        id: 36,
        name: "Thulisile Nobuhle Maziya",
        bio: "Founder & Executive Director, Sinatsisa Lubombo Women and Girls Empowerment Organization",
        country: "Eswatini",
        country_code: "SZ",
        latitude: -26.5225,
        longitude: 31.4658,
        city: "Big Bend",
        year: 2026
    },
    {
        id: 37,
        name: "Vuthy Bun",
        bio: "Programme Coordinator, Kdei Karuna Organization",
        country: "Cambodia",
        country_code: "KH",
        latitude: 11.5564,
        longitude: 104.9282,
        city: "Phnom Penh",
        year: 2026
    },
    {
        id: 38,
        name: "Prof. Yura Sapi",
        bio: "Co-Founder, Protectores de la Tierra",
        country: "Colombia",
        country_code: "CO",
        latitude: 4.7110,
        longitude: -74.0721,
        city: "Bogotá",
        year: 2026
    },
    {
        id: 39,
        name: "Dr. Mrs Yvonne Onyinye Afolabi FCTI ACA MSc",
        bio: "Founder, Onyinye Yvonne Afolabi (OYA) Foundation",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos",
        year: 2026
    },
    
    // 2025 Fellows
    {
        id: 40,
        name: "Agu Anwie Nadege",
        bio: "Founder and Coordinator, Agile Research Consortium and Energy Resource",
        country: "Cameroon",
        country_code: "CM",
        latitude: 3.8480,
        longitude: 11.5021,
        city: "Douala"
    },
    {
        id: 41,
        name: "Alhassan Iddrisu",
        bio: "Founder and Executive Director, Cooperative Agency for Research and Development",
        country: "Ghana",
        country_code: "GH",
        latitude: 5.6037,
        longitude: -0.1870,
        city: "Accra"
    },
    {
        id: 42,
        name: "Ashmi Duwadi",
        bio: "Programme Manager, DEPROSC",
        country: "Nepal",
        country_code: "NP",
        latitude: 27.7172,
        longitude: 85.3240,
        city: "Kathmandu"
    },
    {
        id: 43,
        name: "Bibek Kandel",
        bio: "Head of Finance and Operations, DEPROSC",
        country: "Nepal",
        country_code: "NP",
        latitude: 27.7172,
        longitude: 85.3240,
        city: "Kathmandu"
    },
    {
        id: 44,
        name: "Bisrat Sime Lemma",
        bio: "Country Director, Real Humanitarian",
        country: "Ethiopia",
        country_code: "ET",
        latitude: 9.1450,
        longitude: 40.4897,
        city: "Addis Ababa"
    },
    {
        id: 45,
        name: "Carolyne Odhiambo Okallo",
        bio: "Communications Consultant, Anchored Hope Initiative",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi"
    },
    {
        id: 46,
        name: "Chrispinus Wafula Simiyu",
        bio: "Director, Arcadia Homes International",
        country: "Kenya",
        country_code: "KE",
        latitude: 0.5167,
        longitude: 35.2833,
        city: "Eldoret"
    },
    {
        id: 47,
        name: "Clarence Buyi Hlabano",
        bio: "Board Member, Kings Hope Development Foundation",
        country: "South Africa",
        country_code: "ZA",
        latitude: -33.9249,
        longitude: 18.4241,
        city: "Cape Town"
    },
    {
        id: 48,
        name: "Colin Rwamwitani Sunday",
        bio: "Head of Marketing, Black Elite Foundation",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala"
    },
    {
        id: 49,
        name: "Fozia Noor",
        bio: "Executive Director, OPPD",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi"
    },
    {
        id: 50,
        name: "Hilda Nyakato Mawanda",
        bio: "Finance and Admin Manager, Finn Church Aid",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi"
    },
    {
        id: 51,
        name: "Jana van der Merwe",
        bio: "Fund Development Director, Life Child International",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg"
    },
    {
        id: 52,
        name: "Komlan Timothée Tchangai",
        bio: "Program Manager, ONG ALAFIA",
        country: "Togo",
        country_code: "TG",
        latitude: 6.1319,
        longitude: 1.2228,
        city: "Lomé"
    },
    {
        id: 53,
        name: "Kundayi Zivanayi Matarise",
        bio: "Nutrition Program Officer, Africa Healing Foundation",
        country: "United Kingdom and Zimbabwe",
        country_code: "ZW",
        latitude: -18.0744,
        longitude: 31.0748,
        city: "Harare"
    },
    {
        id: 54,
        name: "Lawrence A.K.T. Bondo Sr.",
        bio: "Founder and Executive Director, Community Development Initiative Inc",
        country: "Liberia",
        country_code: "LR",
        latitude: 6.2907,
        longitude: -10.7606,
        city: "Monrovia"
    },
    {
        id: 55,
        name: "Lul Abdi",
        bio: "Project Officer, OPPD",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi"
    },
    {
        id: 56,
        name: "Mary Punnoose",
        bio: "Co-Founder and Chief Functionary, Prajayatna",
        country: "India",
        country_code: "IN",
        latitude: 12.9716,
        longitude: 77.5946,
        city: "Bangalore"
    },
    {
        id: 57,
        name: "Mohamed Ahmed Ali",
        bio: "Founder and CEO, Green Path Research and Development Champions",
        country: "Somalia",
        country_code: "SO",
        latitude: 2.0469,
        longitude: 45.3182,
        city: "Mogadishu"
    },
    {
        id: 58,
        name: "Monika Biswas",
        bio: "Executive Director, Agami Education Foundation",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 59,
        name: "Purna Paudel",
        bio: "Administrative Manager, DEPROSC",
        country: "Nepal",
        country_code: "NP",
        latitude: 27.7172,
        longitude: 85.3240,
        city: "Kathmandu"
    },
    {
        id: 60,
        name: "Richard Dayo Agbaje",
        bio: "Executive Director, Transformation Collaborative For Peace Initiative",
        country: "Liberia",
        country_code: "LR",
        latitude: 6.2907,
        longitude: -10.7606,
        city: "Monrovia"
    },
    {
        id: 61,
        name: "Rita Paudel",
        bio: "Monitoring and Evaluation Manager, DEPROSC",
        country: "Nepal",
        country_code: "NP",
        latitude: 27.7172,
        longitude: 85.3240,
        city: "Kathmandu"
    },
    {
        id: 62,
        name: "Rita Tuhairwe",
        bio: "Founder and Executive Director, Encomium 2020",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala"
    },
    {
        id: 63,
        name: "Shabnam Zuzer Rangwala",
        bio: "Trustee and Director, Community Services Project Noor and Adapt",
        country: "India",
        country_code: "IN",
        latitude: 19.0760,
        longitude: 72.8777,
        city: "Mumbai"
    },
    {
        id: 64,
        name: "Shila Thapa",
        bio: "Thematic Lead Livelihood and Entrepreneurship, DEPROSC",
        country: "Nepal",
        country_code: "NP",
        latitude: 27.7172,
        longitude: 85.3240,
        city: "Kathmandu"
    },
    {
        id: 65,
        name: "Tryphinah Mvubu",
        bio: "Executive Director, Autism Eswatini",
        country: "Eswatini",
        country_code: "SZ",
        latitude: -26.5225,
        longitude: 31.4658,
        city: "Mbabane"
    },
    {
        id: 66,
        name: "Vitalis Bruce Ziraba",
        bio: "Co-Founder and Executive Director, Centre for Media Literacy and Community Development",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala"
    },
    {
        id: 67,
        name: "William Benson Kholongo",
        bio: "Deputy Executive Director, Greenlivelihoods",
        country: "Malawi",
        country_code: "MW",
        latitude: -14.0126,
        longitude: 33.7875,
        city: "Lilongwe"
    },
    
    // 2024 Fellows
    {
        id: 68,
        name: "Abaasi Ruhweza",
        bio: "Director of Programmes, Centre for Development Outreaches Africa",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala"
    },
    {
        id: 69,
        name: "Adrian Cyprian Katesigwa",
        bio: "Founder and CEO, Elimu Dunia na Mazingira",
        country: "Tanzania",
        country_code: "TZ",
        latitude: -6.7924,
        longitude: 39.2083,
        city: "Dar es Salaam"
    },
    {
        id: 70,
        name: "Alaa Alsaeed",
        bio: "Doctoral Student, The University of Queensland",
        country: "Australia",
        country_code: "AU",
        latitude: -27.4698,
        longitude: 153.0251,
        city: "Brisbane"
    },
    {
        id: 71,
        name: "Amor Das",
        bio: "Monitoring and Evaluation Officer, Association For Alternative Development (AFAD)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 72,
        name: "Basilia Nanbigne",
        bio: "Executive Secretary, Ghana Coalition of NGOs in the Water and Sanitation Sector (CONIWAS)",
        country: "Ghana",
        country_code: "GH",
        latitude: 5.6037,
        longitude: -0.1870,
        city: "Accra"
    },
    {
        id: 73,
        name: "Bhudeb Chandra Roy",
        bio: "Central Monitoring Officer, Mahideb Jubo Somaj Kallayan Somity (MJSKS)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 74,
        name: "Chris Eksteen",
        bio: "Chief Operations Officer, Cape Leopard Trust",
        country: "South Africa",
        country_code: "ZA",
        latitude: -33.9249,
        longitude: 18.4241,
        city: "Cape Town"
    },
    {
        id: 75,
        name: "Deloraine Amarachi Dennis",
        bio: "Programme Manager, Women in Mining",
        country: "Nigeria",
        country_code: "NG",
        latitude: 9.0579,
        longitude: 8.6753,
        city: "Abuja"
    },
    {
        id: 76,
        name: "Elidad Uwiringiyimana",
        bio: "CEO, Vie et Environnement Rwanda",
        country: "Rwanda",
        country_code: "RW",
        latitude: -1.9403,
        longitude: 30.1304,
        city: "Kigali"
    },
    {
        id: 77,
        name: "Evelyn H. Chijarira",
        bio: "Founder and CEO, United We Change Lives",
        country: "Tanzania",
        country_code: "TZ",
        latitude: -6.7924,
        longitude: 39.2083,
        city: "Dar es Salaam"
    },
    {
        id: 78,
        name: "Helen Jane Altshul",
        bio: "Former Chief Executive Officer, RefuSHE",
        country: "Kenya",
        country_code: "KE",
        latitude: -1.2921,
        longitude: 36.8219,
        city: "Nairobi"
    },
    {
        id: 79,
        name: "Hussain Makanjuola",
        bio: "Executive Director, Muslim Peace Network (MPN)",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos"
    },
    {
        id: 80,
        name: "Isaiah Namunyu Khasiani",
        bio: "Director, Foundation for Healthier Families CBO",
        country: "Kenya",
        country_code: "KE",
        latitude: -0.5228,
        longitude: 37.4516,
        city: "Embu"
    },
    {
        id: 81,
        name: "Kalimalwayo S. Mwakasungula",
        bio: "Executive Director, Small-Scale Livestock and Livelihoods Programme",
        country: "Malawi",
        country_code: "MW",
        latitude: -14.0126,
        longitude: 33.7875,
        city: "Lilongwe"
    },
    {
        id: 82,
        name: "Komala Pillay",
        bio: "Chief Executive Officer, Citizen Leader Lab",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg"
    },
    {
        id: 83,
        name: "Dr. Loveth Iyonawan",
        bio: "Founder and Executive Director, Ultimate Tenderhelp Foundation",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos"
    },
    {
        id: 84,
        name: "Margaret Kojusola",
        bio: "Public Health Researcher and Co-Founder, CELADE Community Health and Empowerment",
        country: "Nigeria",
        country_code: "NG",
        latitude: 6.5244,
        longitude: 3.3792,
        city: "Lagos"
    },
    {
        id: 85,
        name: "Mmatsetshweu R. Motaung",
        bio: "Director, Training and Resources in Early Education",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg"
    },
    {
        id: 86,
        name: "Mussa John Masongo",
        bio: "Programme Manager, Tanzania Home Economics Organisation Mwanza",
        country: "Tanzania",
        country_code: "TZ",
        latitude: -2.5164,
        longitude: 32.9175,
        city: "Mwanza"
    },
    {
        id: 87,
        name: "Nobuhle Sehurutshe",
        bio: "Director, International Development Initiatives",
        country: "Botswana",
        country_code: "BW",
        latitude: -24.6282,
        longitude: 25.9022,
        city: "Gaborone"
    },
    {
        id: 88,
        name: "Nomatlou J. Mahlangu",
        bio: "Managing Director, Golden Youth Club",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg"
    },
    {
        id: 89,
        name: "Md. Rafiqul Islam",
        bio: "Project Coordinator, Association For Alternative Development (AFAD)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 90,
        name: "Rebecca Ssanyu",
        bio: "Executive Director, Pacem Havens Foundation",
        country: "Uganda",
        country_code: "UG",
        latitude: 0.3476,
        longitude: 32.5825,
        city: "Kampala"
    },
    {
        id: 91,
        name: "Sachin Chandra Sarker",
        bio: "Consortium Coordinator, Mahideb Jubo Somaj Kallayan Somity (MJSKS)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 92,
        name: "Saida Ansari",
        bio: "Project Supervisor, Association For Alternative Development (AFAD)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 93,
        name: "Sayda Yesmin",
        bio: "Chief Executive, Association For Alternative Development (AFAD)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 94,
        name: "Shreejita Das",
        bio: "Programme Manager, Project Udaan Koru Foundation",
        country: "India",
        country_code: "IN",
        latitude: 28.7041,
        longitude: 77.1025,
        city: "Delhi"
    },
    {
        id: 95,
        name: "Shyamal Chandra Sarker",
        bio: "Director, Mahideb Jubo Somaj Kallayan Somity (MJSKS)",
        country: "Bangladesh",
        country_code: "BD",
        latitude: 23.8103,
        longitude: 90.4125,
        city: "Dhaka"
    },
    {
        id: 96,
        name: "Torkwase Kate Yaji",
        bio: "Programme Manager, Frolics of Hope Africa - Nigeria",
        country: "Nigeria",
        country_code: "NG",
        latitude: 9.0579,
        longitude: 8.6753,
        city: "Abuja"
    },
    {
        id: 97,
        name: "Tracy Constant",
        bio: "Head of Organisation, Releasing Eagles",
        country: "South Africa",
        country_code: "ZA",
        latitude: -26.2041,
        longitude: 28.0473,
        city: "Johannesburg"
    },
    {
        id: 98,
        name: "Ts'epang Joel Matsietsa",
        bio: "Programme Manager, Lesotho Association of Non-Formal Education",
        country: "Lesotho",
        country_code: "LS",
        latitude: -29.3633,
        longitude: 27.5144,
        city: "Maseru"
    },
    {
        id: 99,
        name: "Vaishali Bhaskar Pai",
        bio: "Founder and Director, Tamahar Trust",
        country: "India",
        country_code: "IN",
        latitude: 19.0760,
        longitude: 72.8777,
        city: "Mumbai"
    },
    {
        id: 100,
        name: "Dr. Venticia Hukom",
        bio: "Managing Director, Kaleka",
        country: "Indonesia",
        country_code: "ID",
        latitude: -6.2088,
        longitude: 106.8456,
        city: "Jakarta"
    },
    {
        id: 101,
        name: "Vusumuzi Ndlovu",
        bio: "Founder, Perez Consultancy & UVFT",
        country: "Zimbabwe",
        country_code: "ZW",
        latitude: -18.0744,
        longitude: 31.0748,
        city: "Harare"
    },
    {
        id: 102,
        name: "Wendy Elizabeth Lessing",
        bio: "Director, Khululeka Grief Support",
        country: "South Africa",
        country_code: "ZA",
        latitude: -33.9249,
        longitude: 18.4241,
        city: "Cape Town"
    }
];

// Export for use in the map
console.log(`Loaded ${realFellows.length} real NGO fellows from 2021-2026`);

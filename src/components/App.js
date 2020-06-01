import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layouts/Header'
import Page from '../layouts/Page'
import Footer from '../layouts/Footer'
import '../styles/App.css';

function App() {
  const [currentCountryName, setCurrentCountryName] = useState('');
  const [countriesListData, setCountriesListData] = useState('')
  const [latest, setLatest] = useState(false);
  const [errors, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const [countriesSuggList, setCountriesSuggList] = useState('')
  const countriesSuggListOffline = [
    {
      "Country": "Italy",
      "Slug": "italy",
      "ISO2": "IT"
    },
    {
      "Country": "Jamaica",
      "Slug": "jamaica",
      "ISO2": "JM"
    },
    {
      "Country": "Korea (North)",
      "Slug": "korea-north",
      "ISO2": "KP"
    },
    {
      "Country": "Northern Mariana Islands",
      "Slug": "northern-mariana-islands",
      "ISO2": "MP"
    },
    {
      "Country": "Papua New Guinea",
      "Slug": "papua-new-guinea",
      "ISO2": "PG"
    },
    {
      "Country": "Portugal",
      "Slug": "portugal",
      "ISO2": "PT"
    },
    {
      "Country": "British Indian Ocean Territory",
      "Slug": "british-indian-ocean-territory",
      "ISO2": "IO"
    },
    {
      "Country": "Slovakia",
      "Slug": "slovakia",
      "ISO2": "SK"
    },
    {
      "Country": "Gambia",
      "Slug": "gambia",
      "ISO2": "GM"
    },
    {
      "Country": "Ghana",
      "Slug": "ghana",
      "ISO2": "GH"
    },
    {
      "Country": "Lithuania",
      "Slug": "lithuania",
      "ISO2": "LT"
    },
    {
      "Country": "Rwanda",
      "Slug": "rwanda",
      "ISO2": "RW"
    },
    {
      "Country": "Austria",
      "Slug": "austria",
      "ISO2": "AT"
    },
    {
      "Country": "Trinidad and Tobago",
      "Slug": "trinidad-and-tobago",
      "ISO2": "TT"
    },
    {
      "Country": "Mexico",
      "Slug": "mexico",
      "ISO2": "MX"
    },
    {
      "Country": "Republic of Kosovo",
      "Slug": "kosovo",
      "ISO2": "XK"
    },
    {
      "Country": "Ireland",
      "Slug": "ireland",
      "ISO2": "IE"
    },
    {
      "Country": "Micronesia, Federated States of",
      "Slug": "micronesia",
      "ISO2": "FM"
    },
    {
      "Country": "Panama",
      "Slug": "panama",
      "ISO2": "PA"
    },
    {
      "Country": "South Georgia and the South Sandwich Islands",
      "Slug": "south-georgia-and-the-south-sandwich-islands",
      "ISO2": "GS"
    },
    {
      "Country": "Sudan",
      "Slug": "sudan",
      "ISO2": "SD"
    },
    {
      "Country": "US Minor Outlying Islands",
      "Slug": "us-minor-outlying-islands",
      "ISO2": "UM"
    },
    {
      "Country": "Gibraltar",
      "Slug": "gibraltar",
      "ISO2": "GI"
    },
    {
      "Country": "Greece",
      "Slug": "greece",
      "ISO2": "GR"
    },
    {
      "Country": "Ecuador",
      "Slug": "ecuador",
      "ISO2": "EC"
    },
    {
      "Country": "Georgia",
      "Slug": "georgia",
      "ISO2": "GE"
    },
    {
      "Country": "San Marino",
      "Slug": "san-marino",
      "ISO2": "SM"
    },
    {
      "Country": "Canada",
      "Slug": "canada",
      "ISO2": "CA"
    },
    {
      "Country": "Sierra Leone",
      "Slug": "sierra-leone",
      "ISO2": "SL"
    },
    {
      "Country": "Tokelau",
      "Slug": "tokelau",
      "ISO2": "TK"
    },
    {
      "Country": "United States of America",
      "Slug": "united-states",
      "ISO2": "US"
    },
    {
      "Country": "Australia",
      "Slug": "australia",
      "ISO2": "AU"
    },
    {
      "Country": "Czech Republic",
      "Slug": "czech-republic",
      "ISO2": "CZ"
    },
    {
      "Country": "Kiribati",
      "Slug": "kiribati",
      "ISO2": "KI"
    },
    {
      "Country": "Kuwait",
      "Slug": "kuwait",
      "ISO2": "KW"
    },
    {
      "Country": "Lao PDR",
      "Slug": "lao-pdr",
      "ISO2": "LA"
    },
    {
      "Country": "French Polynesia",
      "Slug": "french-polynesia",
      "ISO2": "PF"
    },
    {
      "Country": "Norway",
      "Slug": "norway",
      "ISO2": "NO"
    },
    {
      "Country": "Dominica",
      "Slug": "dominica",
      "ISO2": "DM"
    },
    {
      "Country": "Chile",
      "Slug": "chile",
      "ISO2": "CL"
    },
    {
      "Country": "Mozambique",
      "Slug": "mozambique",
      "ISO2": "MZ"
    },
    {
      "Country": "Dominican Republic",
      "Slug": "dominican-republic",
      "ISO2": "DO"
    },
    {
      "Country": "Isle of Man",
      "Slug": "isle-of-man",
      "ISO2": "IM"
    },
    {
      "Country": "Peru",
      "Slug": "peru",
      "ISO2": "PE"
    },
    {
      "Country": "Slovenia",
      "Slug": "slovenia",
      "ISO2": "SI"
    },
    {
      "Country": "Saint-Martin (French part)",
      "Slug": "saint-martin-french-part",
      "ISO2": "MF"
    },
    {
      "Country": "Saudi Arabia",
      "Slug": "saudi-arabia",
      "ISO2": "SA"
    },
    {
      "Country": "Heard and Mcdonald Islands",
      "Slug": "heard-and-mcdonald-islands",
      "ISO2": "HM"
    },
    {
      "Country": "Mongolia",
      "Slug": "mongolia",
      "ISO2": "MN"
    },
    {
      "Country": "Hong Kong, SAR China",
      "Slug": "hong-kong-sar-china",
      "ISO2": "HK"
    },
    {
      "Country": "Nigeria",
      "Slug": "nigeria",
      "ISO2": "NG"
    },
    {
      "Country": "Belarus",
      "Slug": "belarus",
      "ISO2": "BY"
    },
    {
      "Country": "Swaziland",
      "Slug": "swaziland",
      "ISO2": "SZ"
    },
    {
      "Country": "Jordan",
      "Slug": "jordan",
      "ISO2": "JO"
    },
    {
      "Country": "Montserrat",
      "Slug": "montserrat",
      "ISO2": "MS"
    },
    {
      "Country": "Poland",
      "Slug": "poland",
      "ISO2": "PL"
    },
    {
      "Country": "Andorra",
      "Slug": "andorra",
      "ISO2": "AD"
    },
    {
      "Country": "Chad",
      "Slug": "chad",
      "ISO2": "TD"
    },
    {
      "Country": "Netherlands",
      "Slug": "netherlands",
      "ISO2": "NL"
    },
    {
      "Country": "Albania",
      "Slug": "albania",
      "ISO2": "AL"
    },
    {
      "Country": "Congo (Kinshasa)",
      "Slug": "congo-kinshasa",
      "ISO2": "CD"
    },
    {
      "Country": "Cook Islands",
      "Slug": "cook-islands",
      "ISO2": "CK"
    },
    {
      "Country": "French Southern Territories",
      "Slug": "french-southern-territories",
      "ISO2": "TF"
    },
    {
      "Country": "Kazakhstan",
      "Slug": "kazakhstan",
      "ISO2": "KZ"
    },
    {
      "Country": "Mauritania",
      "Slug": "mauritania",
      "ISO2": "MR"
    },
    {
      "Country": "Netherlands Antilles",
      "Slug": "netherlands-antilles",
      "ISO2": "AN"
    },
    {
      "Country": "Barbados",
      "Slug": "barbados",
      "ISO2": "BB"
    },
    {
      "Country": "Pakistan",
      "Slug": "pakistan",
      "ISO2": "PK"
    },
    {
      "Country": "Mayotte",
      "Slug": "mayotte",
      "ISO2": "YT"
    },
    {
      "Country": "Haiti",
      "Slug": "haiti",
      "ISO2": "HT"
    },
    {
      "Country": "Honduras",
      "Slug": "honduras",
      "ISO2": "HN"
    },
    {
      "Country": "Bangladesh",
      "Slug": "bangladesh",
      "ISO2": "BD"
    },
    {
      "Country": "Bouvet Island",
      "Slug": "bouvet-island",
      "ISO2": "BV"
    },
    {
      "Country": "Palau",
      "Slug": "palau",
      "ISO2": "PW"
    },
    {
      "Country": "Tonga",
      "Slug": "tonga",
      "ISO2": "TO"
    },
    {
      "Country": "Saint Kitts and Nevis",
      "Slug": "saint-kitts-and-nevis",
      "ISO2": "KN"
    },
    {
      "Country": "Somalia",
      "Slug": "somalia",
      "ISO2": "SO"
    },
    {
      "Country": "Bosnia and Herzegovina",
      "Slug": "bosnia-and-herzegovina",
      "ISO2": "BA"
    },
    {
      "Country": "Réunion",
      "Slug": "réunion",
      "ISO2": "RE"
    },
    {
      "Country": "Benin",
      "Slug": "benin",
      "ISO2": "BJ"
    },
    {
      "Country": "Côte d'Ivoire",
      "Slug": "cote-divoire",
      "ISO2": "CI"
    },
    {
      "Country": "Guinea",
      "Slug": "guinea",
      "ISO2": "GN"
    },
    {
      "Country": "Angola",
      "Slug": "angola",
      "ISO2": "AO"
    },
    {
      "Country": "China",
      "Slug": "china",
      "ISO2": "CN"
    },
    {
      "Country": "El Salvador",
      "Slug": "el-salvador",
      "ISO2": "SV"
    },
    {
      "Country": "Mali",
      "Slug": "mali",
      "ISO2": "ML"
    },
    {
      "Country": "Algeria",
      "Slug": "algeria",
      "ISO2": "DZ"
    },
    {
      "Country": "Equatorial Guinea",
      "Slug": "equatorial-guinea",
      "ISO2": "GQ"
    },
    {
      "Country": "Germany",
      "Slug": "germany",
      "ISO2": "DE"
    },
    {
      "Country": "Antigua and Barbuda",
      "Slug": "antigua-and-barbuda",
      "ISO2": "AG"
    },
    {
      "Country": "Niger",
      "Slug": "niger",
      "ISO2": "NE"
    },
    {
      "Country": "Philippines",
      "Slug": "philippines",
      "ISO2": "PH"
    },
    {
      "Country": "Saint-Barthélemy",
      "Slug": "saint-barthélemy",
      "ISO2": "BL"
    },
    {
      "Country": "Venezuela (Bolivarian Republic)",
      "Slug": "venezuela",
      "ISO2": "VE"
    },
    {
      "Country": "Oman",
      "Slug": "oman",
      "ISO2": "OM"
    },
    {
      "Country": "Solomon Islands",
      "Slug": "solomon-islands",
      "ISO2": "SB"
    },
    {
      "Country": "Libya",
      "Slug": "libya",
      "ISO2": "LY"
    },
    {
      "Country": "Morocco",
      "Slug": "morocco",
      "ISO2": "MA"
    },
    {
      "Country": "Latvia",
      "Slug": "latvia",
      "ISO2": "LV"
    },
    {
      "Country": "Norfolk Island",
      "Slug": "norfolk-island",
      "ISO2": "NF"
    },
    {
      "Country": "Congo (Brazzaville)",
      "Slug": "congo-brazzaville",
      "ISO2": "CG"
    },
    {
      "Country": "Puerto Rico",
      "Slug": "puerto-rico",
      "ISO2": "PR"
    },
    {
      "Country": "Romania",
      "Slug": "romania",
      "ISO2": "RO"
    },
    {
      "Country": "Antarctica",
      "Slug": "antarctica",
      "ISO2": "AQ"
    },
    {
      "Country": "New Caledonia",
      "Slug": "new-caledonia",
      "ISO2": "NC"
    },
    {
      "Country": "Saint Vincent and Grenadines",
      "Slug": "saint-vincent-and-the-grenadines",
      "ISO2": "VC"
    },
    {
      "Country": "Svalbard and Jan Mayen Islands",
      "Slug": "svalbard-and-jan-mayen-islands",
      "ISO2": "SJ"
    },
    {
      "Country": "Bulgaria",
      "Slug": "bulgaria",
      "ISO2": "BG"
    },
    {
      "Country": "Cyprus",
      "Slug": "cyprus",
      "ISO2": "CY"
    },
    {
      "Country": "Cocos (Keeling) Islands",
      "Slug": "cocos-keeling-islands",
      "ISO2": "CC"
    },
    {
      "Country": "Cuba",
      "Slug": "cuba",
      "ISO2": "CU"
    },
    {
      "Country": "Finland",
      "Slug": "finland",
      "ISO2": "FI"
    },
    {
      "Country": "Guam",
      "Slug": "guam",
      "ISO2": "GU"
    },
    {
      "Country": "Luxembourg",
      "Slug": "luxembourg",
      "ISO2": "LU"
    },
    {
      "Country": "Saint Pierre and Miquelon",
      "Slug": "saint-pierre-and-miquelon",
      "ISO2": "PM"
    },
    {
      "Country": "Guatemala",
      "Slug": "guatemala",
      "ISO2": "GT"
    },
    {
      "Country": "Guinea-Bissau",
      "Slug": "guinea-bissau",
      "ISO2": "GW"
    },
    {
      "Country": "New Zealand",
      "Slug": "new-zealand",
      "ISO2": "NZ"
    },
    {
      "Country": "Samoa",
      "Slug": "samoa",
      "ISO2": "WS"
    },
    {
      "Country": "Malawi",
      "Slug": "malawi",
      "ISO2": "MW"
    },
    {
      "Country": "Guadeloupe",
      "Slug": "guadeloupe",
      "ISO2": "GP"
    },
    {
      "Country": "Iceland",
      "Slug": "iceland",
      "ISO2": "IS"
    },
    {
      "Country": "South Sudan",
      "Slug": "south-sudan",
      "ISO2": "SS"
    },
    {
      "Country": "Faroe Islands",
      "Slug": "faroe-islands",
      "ISO2": "FO"
    },
    {
      "Country": "Monaco",
      "Slug": "monaco",
      "ISO2": "MC"
    },
    {
      "Country": "Nauru",
      "Slug": "nauru",
      "ISO2": "NR"
    },
    {
      "Country": "Nepal",
      "Slug": "nepal",
      "ISO2": "NP"
    },
    {
      "Country": "Sao Tome and Principe",
      "Slug": "sao-tome-and-principe",
      "ISO2": "ST"
    },
    {
      "Country": "Guernsey",
      "Slug": "guernsey",
      "ISO2": "GG"
    },
    {
      "Country": "Liberia",
      "Slug": "liberia",
      "ISO2": "LR"
    },
    {
      "Country": "Iraq",
      "Slug": "iraq",
      "ISO2": "IQ"
    },
    {
      "Country": "Kyrgyzstan",
      "Slug": "kyrgyzstan",
      "ISO2": "KG"
    },
    {
      "Country": "Turks and Caicos Islands",
      "Slug": "turks-and-caicos-islands",
      "ISO2": "TC"
    },
    {
      "Country": "Wallis and Futuna Islands",
      "Slug": "wallis-and-futuna-islands",
      "ISO2": "WF"
    },
    {
      "Country": "Armenia",
      "Slug": "armenia",
      "ISO2": "AM"
    },
    {
      "Country": "Zimbabwe",
      "Slug": "zimbabwe",
      "ISO2": "ZW"
    },
    {
      "Country": "Azerbaijan",
      "Slug": "azerbaijan",
      "ISO2": "AZ"
    },
    {
      "Country": "Burkina Faso",
      "Slug": "burkina-faso",
      "ISO2": "BF"
    },
    {
      "Country": "Malaysia",
      "Slug": "malaysia",
      "ISO2": "MY"
    },
    {
      "Country": "Russian Federation",
      "Slug": "russia",
      "ISO2": "RU"
    },
    {
      "Country": "Seychelles",
      "Slug": "seychelles",
      "ISO2": "SC"
    },
    {
      "Country": "Uzbekistan",
      "Slug": "uzbekistan",
      "ISO2": "UZ"
    },
    {
      "Country": "American Samoa",
      "Slug": "american-samoa",
      "ISO2": "AS"
    },
    {
      "Country": "Jersey",
      "Slug": "jersey",
      "ISO2": "JE"
    },
    {
      "Country": "Egypt",
      "Slug": "egypt",
      "ISO2": "EG"
    },
    {
      "Country": "Falkland Islands (Malvinas)",
      "Slug": "falkland-islands-malvinas",
      "ISO2": "FK"
    },
    {
      "Country": "Montenegro",
      "Slug": "montenegro",
      "ISO2": "ME"
    },
    {
      "Country": "Paraguay",
      "Slug": "paraguay",
      "ISO2": "PY"
    },
    {
      "Country": "Turkey",
      "Slug": "turkey",
      "ISO2": "TR"
    },
    {
      "Country": "Sri Lanka",
      "Slug": "sri-lanka",
      "ISO2": "LK"
    },
    {
      "Country": "Syrian Arab Republic (Syria)",
      "Slug": "syria",
      "ISO2": "SY"
    },
    {
      "Country": "Brazil",
      "Slug": "brazil",
      "ISO2": "BR"
    },
    {
      "Country": "France",
      "Slug": "france",
      "ISO2": "FR"
    },
    {
      "Country": "Israel",
      "Slug": "israel",
      "ISO2": "IL"
    },
    {
      "Country": "Saint Helena",
      "Slug": "saint-helena",
      "ISO2": "SH"
    },
    {
      "Country": "Afghanistan",
      "Slug": "afghanistan",
      "ISO2": "AF"
    },
    {
      "Country": "Lebanon",
      "Slug": "lebanon",
      "ISO2": "LB"
    },
    {
      "Country": "Thailand",
      "Slug": "thailand",
      "ISO2": "TH"
    },
    {
      "Country": "Bolivia",
      "Slug": "bolivia",
      "ISO2": "BO"
    },
    {
      "Country": "Lesotho",
      "Slug": "lesotho",
      "ISO2": "LS"
    },
    {
      "Country": "Vanuatu",
      "Slug": "vanuatu",
      "ISO2": "VU"
    },
    {
      "Country": "Virgin Islands, US",
      "Slug": "virgin-islands",
      "ISO2": "VI"
    },
    {
      "Country": "Anguilla",
      "Slug": "anguilla",
      "ISO2": "AI"
    },
    {
      "Country": "Bermuda",
      "Slug": "bermuda",
      "ISO2": "BM"
    },
    {
      "Country": "Namibia",
      "Slug": "namibia",
      "ISO2": "NA"
    },
    {
      "Country": "Croatia",
      "Slug": "croatia",
      "ISO2": "HR"
    },
    {
      "Country": "Japan",
      "Slug": "japan",
      "ISO2": "JP"
    },
    {
      "Country": "Martinique",
      "Slug": "martinique",
      "ISO2": "MQ"
    },
    {
      "Country": "Cape Verde",
      "Slug": "cape-verde",
      "ISO2": "CV"
    },
    {
      "Country": "Bhutan",
      "Slug": "bhutan",
      "ISO2": "BT"
    },
    {
      "Country": "Central African Republic",
      "Slug": "central-african-republic",
      "ISO2": "CF"
    },
    {
      "Country": "Denmark",
      "Slug": "denmark",
      "ISO2": "DK"
    },
    {
      "Country": "Sweden",
      "Slug": "sweden",
      "ISO2": "SE"
    },
    {
      "Country": "Taiwan, Republic of China",
      "Slug": "taiwan",
      "ISO2": "TW"
    },
    {
      "Country": "Timor-Leste",
      "Slug": "timor-leste",
      "ISO2": "TL"
    },
    {
      "Country": "Bahamas",
      "Slug": "bahamas",
      "ISO2": "BS"
    },
    {
      "Country": "Brunei Darussalam",
      "Slug": "brunei",
      "ISO2": "BN"
    },
    {
      "Country": "Cameroon",
      "Slug": "cameroon",
      "ISO2": "CM"
    },
    {
      "Country": "Tanzania, United Republic of",
      "Slug": "tanzania",
      "ISO2": "TZ"
    },
    {
      "Country": "Turkmenistan",
      "Slug": "turkmenistan",
      "ISO2": "TM"
    },
    {
      "Country": "Iran, Islamic Republic of",
      "Slug": "iran",
      "ISO2": "IR"
    },
    {
      "Country": "Nicaragua",
      "Slug": "nicaragua",
      "ISO2": "NI"
    },
    {
      "Country": "South Africa",
      "Slug": "south-africa",
      "ISO2": "ZA"
    },
    {
      "Country": "Tunisia",
      "Slug": "tunisia",
      "ISO2": "TN"
    },
    {
      "Country": "Uganda",
      "Slug": "uganda",
      "ISO2": "UG"
    },
    {
      "Country": "Djibouti",
      "Slug": "djibouti",
      "ISO2": "DJ"
    },
    {
      "Country": "India",
      "Slug": "india",
      "ISO2": "IN"
    },
    {
      "Country": "Estonia",
      "Slug": "estonia",
      "ISO2": "EE"
    },
    {
      "Country": "Pitcairn",
      "Slug": "pitcairn",
      "ISO2": "PN"
    },
    {
      "Country": "Senegal",
      "Slug": "senegal",
      "ISO2": "SN"
    },
    {
      "Country": "Christmas Island",
      "Slug": "christmas-island",
      "ISO2": "CX"
    },
    {
      "Country": "Eritrea",
      "Slug": "eritrea",
      "ISO2": "ER"
    },
    {
      "Country": "Indonesia",
      "Slug": "indonesia",
      "ISO2": "ID"
    },
    {
      "Country": "Maldives",
      "Slug": "maldives",
      "ISO2": "MV"
    },
    {
      "Country": "Palestinian Territory",
      "Slug": "palestine",
      "ISO2": "PS"
    },
    {
      "Country": "Bahrain",
      "Slug": "bahrain",
      "ISO2": "BH"
    },
    {
      "Country": "Liechtenstein",
      "Slug": "liechtenstein",
      "ISO2": "LI"
    },
    {
      "Country": "Togo",
      "Slug": "togo",
      "ISO2": "TG"
    },
    {
      "Country": "Belgium",
      "Slug": "belgium",
      "ISO2": "BE"
    },
    {
      "Country": "Hungary",
      "Slug": "hungary",
      "ISO2": "HU"
    },
    {
      "Country": "Marshall Islands",
      "Slug": "marshall-islands",
      "ISO2": "MH"
    },
    {
      "Country": "Myanmar",
      "Slug": "myanmar",
      "ISO2": "MM"
    },
    {
      "Country": "Suriname",
      "Slug": "suriname",
      "ISO2": "SR"
    },
    {
      "Country": "Uruguay",
      "Slug": "uruguay",
      "ISO2": "UY"
    },
    {
      "Country": "Kenya",
      "Slug": "kenya",
      "ISO2": "KE"
    },
    {
      "Country": "Korea (South)",
      "Slug": "korea-south",
      "ISO2": "KR"
    },
    {
      "Country": "Guyana",
      "Slug": "guyana",
      "ISO2": "GY"
    },
    {
      "Country": "Spain",
      "Slug": "spain",
      "ISO2": "ES"
    },
    {
      "Country": "Aruba",
      "Slug": "aruba",
      "ISO2": "AW"
    },
    {
      "Country": "Grenada",
      "Slug": "grenada",
      "ISO2": "GD"
    },
    {
      "Country": "Macedonia, Republic of",
      "Slug": "macedonia",
      "ISO2": "MK"
    },
    {
      "Country": "Madagascar",
      "Slug": "madagascar",
      "ISO2": "MG"
    },
    {
      "Country": "Tajikistan",
      "Slug": "tajikistan",
      "ISO2": "TJ"
    },
    {
      "Country": "Ethiopia",
      "Slug": "ethiopia",
      "ISO2": "ET"
    },
    {
      "Country": "Mauritius",
      "Slug": "mauritius",
      "ISO2": "MU"
    },
    {
      "Country": "Zambia",
      "Slug": "zambia",
      "ISO2": "ZM"
    },
    {
      "Country": "ALA Aland Islands",
      "Slug": "ala-aland-islands",
      "ISO2": "AX"
    },
    {
      "Country": "Singapore",
      "Slug": "singapore",
      "ISO2": "SG"
    },
    {
      "Country": "United Arab Emirates",
      "Slug": "united-arab-emirates",
      "ISO2": "AE"
    },
    {
      "Country": "Costa Rica",
      "Slug": "costa-rica",
      "ISO2": "CR"
    },
    {
      "Country": "Western Sahara",
      "Slug": "western-sahara",
      "ISO2": "EH"
    },
    {
      "Country": "Botswana",
      "Slug": "botswana",
      "ISO2": "BW"
    },
    {
      "Country": "British Virgin Islands",
      "Slug": "british-virgin-islands",
      "ISO2": "VG"
    },
    {
      "Country": "Serbia",
      "Slug": "serbia",
      "ISO2": "RS"
    },
    {
      "Country": "Switzerland",
      "Slug": "switzerland",
      "ISO2": "CH"
    },
    {
      "Country": "United Kingdom",
      "Slug": "united-kingdom",
      "ISO2": "GB"
    },
    {
      "Country": "Yemen",
      "Slug": "yemen",
      "ISO2": "YE"
    },
    {
      "Country": "Burundi",
      "Slug": "burundi",
      "ISO2": "BI"
    },
    {
      "Country": "Colombia",
      "Slug": "colombia",
      "ISO2": "CO"
    },
    {
      "Country": "French Guiana",
      "Slug": "french-guiana",
      "ISO2": "GF"
    },
    {
      "Country": "Holy See (Vatican City State)",
      "Slug": "holy-see-vatican-city-state",
      "ISO2": "VA"
    },
    {
      "Country": "Macao, SAR China",
      "Slug": "macao-sar-china",
      "ISO2": "MO"
    },
    {
      "Country": "Niue",
      "Slug": "niue",
      "ISO2": "NU"
    },
    {
      "Country": "Saint Lucia",
      "Slug": "saint-lucia",
      "ISO2": "LC"
    },
    {
      "Country": "Argentina",
      "Slug": "argentina",
      "ISO2": "AR"
    },
    {
      "Country": "Ukraine",
      "Slug": "ukraine",
      "ISO2": "UA"
    },
    {
      "Country": "Cayman Islands",
      "Slug": "cayman-islands",
      "ISO2": "KY"
    },
    {
      "Country": "Fiji",
      "Slug": "fiji",
      "ISO2": "FJ"
    },
    {
      "Country": "Greenland",
      "Slug": "greenland",
      "ISO2": "GL"
    },
    {
      "Country": "Gabon",
      "Slug": "gabon",
      "ISO2": "GA"
    },
    {
      "Country": "Cambodia",
      "Slug": "cambodia",
      "ISO2": "KH"
    },
    {
      "Country": "Moldova",
      "Slug": "moldova",
      "ISO2": "MD"
    },
    {
      "Country": "Qatar",
      "Slug": "qatar",
      "ISO2": "QA"
    },
    {
      "Country": "Viet Nam",
      "Slug": "vietnam",
      "ISO2": "VN"
    },
    {
      "Country": "Comoros",
      "Slug": "comoros",
      "ISO2": "KM"
    },
    {
      "Country": "Malta",
      "Slug": "malta",
      "ISO2": "MT"
    },
    {
      "Country": "Belize",
      "Slug": "belize",
      "ISO2": "BZ"
    },
    {
      "Country": "Tuvalu",
      "Slug": "tuvalu",
      "ISO2": "TV"
    }
  ]

  let countryAlredyInList = null;
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (countriesSuggList === '') {
      setLoading(false)
      setError('Problem with internet connection!')
      return false
    }
    const countryFound = countriesSuggList.find(el => currentCountryName.toLowerCase() === el.Country.toLowerCase())
    if (!countryFound) {
      setLoading(false)
      setError('I couldn`t find country "' + currentCountryName + '"');
      return false
    }

    if (countriesListData) countryAlredyInList = countriesListData.find((el, index) => currentCountryName.toLowerCase() === el[index].Country.toLowerCase())
    if (countryAlredyInList) {
      setLoading(false)
      setError('This country is alredy shown: "' + currentCountryName + '"');
      return false
    }

    const API = `https://api.covid19api.com/total/country/${countryFound.Slug}/status/confirmed`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          setError('');
          return response;
        }
        else {
          response.statusText === 'Not Found' ? setError('Country not fund!') : setError(response.statusText)
          throw Error(response.statusText)
        }
      })
      .then(response => response.json())
      .then((data) => {
        if (data.length === 0) {
          setError("sorry, no data found for this country")
          return false
        }
        setCountriesListData((prevStat) => [...prevStat, data])
      })
      .catch(errors => console.log(errors))
      .then(() => setLoading(false))
      .then(() => setCurrentCountryName(''))
  }

  const handleShowLatest = () => {
    setLatest(!latest)
  }

  const handleInput = (e) => {
    setCurrentCountryName(e.target.value)
  }

  const removeCountry = (country) => {
    const updatedCountriesList = countriesListData.filter((el) => {
      return (el[0].Country !== country)
    })
    setCountriesListData(updatedCountriesList)
  }

  useEffect(() => {
    /* const proxyurl = "https://cors-anywhere.herokuapp.com/"; */
    const API = `https://api.covid19api.com/countries`;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        else {
          setCountriesSuggList(countriesSuggListOffline)
          throw new Error('Couldn`t download of suggestion countries list, i`m using offline list..')
        }
      })
      .then(response => response.json())
      .then(data => setCountriesSuggList(data))
      .catch(error => console.warn(error))

  }, [])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <content>
          {loading &&
            "Loading..."
          }
          <Page
            handleSubmit={handleSubmit}
            handleInput={handleInput}
            handleShowLatest={handleShowLatest}
            currentCountryName={currentCountryName}
            latest={latest}
            errors={errors}
            countriesSuggList={countriesSuggList}
            countriesListData={countriesListData}
            removeCountry={removeCountry}
          />

        </content>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router >
  );
}

export default App;

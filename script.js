const apiKey = '71a2e43865msh7e397669476e395p1223b8jsn1abe9f0138ba'; // Replace with your API key
const apiUrl = `https://currency-convertor-api.p.rapidapi.com/convert/`;

document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const amount = document.getElementById('amount');
    const convertBtn = document.getElementById('convertBtn');
    const result = document.getElementById('result');

    const currencies = [
        {
            currencyCode: "USD",
            currencyName: "US Dollar",
        },
        {
            currencyCode: "EUR",
            currencyName: "Euro",
        },
        {
            currencyCode: "GBP",
            currencyName: "British Pound",
        },
        {
            currencyCode: "CAD",
            currencyName: "Canadian Dollar",
        },
        {
            currencyCode: "AUD",
            currencyName: "Australian Dollar",
        },
        {
            currencyCode: "JPY",
            currencyName: "Japanese Yen",
        },
        {
            currencyCode: "ADA",
            currencyName: "Cardano",
        },
        {
            currencyCode: "AED",
            currencyName: "Emirati Dirham",
        },
        {
            currencyCode: "AFN",
            currencyName: "Afghan Afghani",
        },
        {
            currencyCode: "ALL",
            currencyName: "Albanian Lek",
        },
        {
            currencyCode: "AMD",
            currencyName: "Armenian Dram",
        },
        {
            currencyCode: "ANG",
            currencyName: "Dutch Guilder",
        },
        {
            currencyCode: "AOA",
            currencyName: "Angolan Kwanza",
        },
        {
            currencyCode: "ARS",
            currencyName: "Argentine Peso",
        },
        {
            currencyCode: "AUD",
            currencyName: "Australian Dollar",
        },
        {
            currencyCode: "AWG",
            currencyName: "Aruban or Dutch Guilder",
        },
        {
            currencyCode: "AZN",
            currencyName: "Azerbaijan Manat",
        },
        {
            currencyCode: "BAM",
            currencyName: "Bosnian Convertible Mark",
        },
        {
            currencyCode: "BBD",
            currencyName: "Barbadian or Bajan Dollar",
        },
        {
            currencyCode: "BCH",
            currencyName: "Bitcoin Cash",
        },
        {
            currencyCode: "BDT",
            currencyName: "Bangladeshi Taka",
        },
        {
            currencyCode: "BGN",
            currencyName: "Bulgarian Lev",
        },
        {
            currencyCode: "BHD",
            currencyName: "Bahraini Dinar",
        },
        {
            currencyCode: "BIF",
            currencyName: "Burundian Franc",
        },
        {
            currencyCode: "BMD",
            currencyName: "Bermudian Dollar",
        },
        {
            currencyCode: "BND",
            currencyName: "Bruneian Dollar",
        },
        {
            currencyCode: "BOB",
            currencyName: "Bolivian Bolíviano",
        },
        {
            currencyCode: "BRL",
            currencyName: "Brazilian Real",
        },
        {
            currencyCode: "BSD",
            currencyName: "Bahamian Dollar",
        },
        {
            currencyCode: "BTC",
            currencyName: "Bitcoin",
        },
        {
            currencyCode: "BTN",
            currencyName: "Bhutanese Ngultrum",
        },
        {
            currencyCode: "BWP",
            currencyName: "Botswana Pula",
        },
        {
            currencyCode: "BYN",
            currencyName: "Belarusian Ruble",
        },
        {
            currencyCode: "BYR",
            currencyName: "Belarusian Ruble",
        },
        {
            currencyCode: "BZD",
            currencyName: "Belizean Dollar",
        },
        {
            currencyCode: "CAD",
            currencyName: "Canadian Dollar",
        },
        {
            currencyCode: "CDF",
            currencyName: "Congolese Franc",
        },
        {
            currencyCode: "CHF",
            currencyName: "Swiss Franc",
        },
        {
            currencyCode: "CLP",
            currencyName: "Chilean Peso",
        },
        {
            currencyCode: "CNY",
            currencyName: "Chinese Yuan Renminbi",
        },
        {
            currencyCode: "COP",
            currencyName: "Colombian Peso",
        },
        {
            currencyCode: "CRC",
            currencyName: "Costa Rican Colon",
        },
        {
            currencyCode: "CUC",
            currencyName: "Cuban Convertible Peso",
        },
        {
            currencyCode: "CUP",
            currencyName: "Cuban Peso",
        },
        {
            currencyCode: "CVE",
            currencyName: "Cape Verdean Escudo",
        },
        {
            currencyCode: "CZK",
            currencyName: "Czech Koruna",
        },
        {
            currencyCode: "DJF",
            currencyName: "Djiboutian Franc",
        },
        {
            currencyCode: "DKK",
            currencyName: "Danish Krone",
        },
        {
            currencyCode: "DOGE",
            currencyName: "Dogecoin",
        },
        {
            currencyCode: "DOP",
            currencyName: "Dominican Peso",
        },
        {
            currencyCode: "DOT",
            currencyName: "Polkadot",
        },
        {
            currencyCode: "DZD",
            currencyName: "Algerian Dinar",
        },
        {
            currencyCode: "EEK",
            currencyName: "Estonian Kroon",
        },
        {
            currencyCode: "EGP",
            currencyName: "Egyptian Pound",
        },
        {
            currencyCode: "ERN",
            currencyName: "Eritrean Nakfa",
        },
        {
            currencyCode: "ETB",
            currencyName: "Ethiopian Birr",
        },
        {
            currencyCode: "ETH",
            currencyName: "Ethereum",
        },
        {
            currencyCode: "EUR",
            currencyName: "Euro",
        },
        {
            currencyCode: "FJD",
            currencyName: "Fijian Dollar",
        },
        {
            currencyCode: "FKP",
            currencyName: "Falkland Island Pound",
        },
        {
            currencyCode: "GBP",
            currencyName: "British Pound",
        },
        {
            currencyCode: "GEL",
            currencyName: "Georgian Lari",
        },
        {
            currencyCode: "GGP",
            currencyName: "Guernsey Pound",
        },
        {
            currencyCode: "GHS",
            currencyName: "Ghanaian Cedi",
        },
        {
            currencyCode: "GIP",
            currencyName: "Gibraltar Pound",
        },
        {
            currencyCode: "GMD",
            currencyName: "Gambian Dalasi",
        },
        {
            currencyCode: "GNF",
            currencyName: "Guinean Franc",
        },
        {
            currencyCode: "GTQ",
            currencyName: "Guatemalan Quetzal",
        },
        {
            currencyCode: "GYD",
            currencyName: "Guyanese Dollar",
        },
        {
            currencyCode: "HKD",
            currencyName: "Hong Kong Dollar",
        },
        {
            currencyCode: "HNL",
            currencyName: "Honduran Lempira",
        },
        {
            currencyCode: "HRK",
            currencyName: "Croatian Kuna",
        },
        {
            currencyCode: "HTG",
            currencyName: "Haitian Gourde",
        },
        {
            currencyCode: "HUF",
            currencyName: "Hungarian Forint",
        },
        {
            currencyCode: "IDR",
            currencyName: "Indonesian Rupiah",
        },
        {
            currencyCode: "ILS",
            currencyName: "Israeli Shekel",
        },
        {
            currencyCode: "IMP",
            currencyName: "Isle of Man Pound",
        },
        {
            currencyCode: "INR",
            currencyName: "Indian Rupee",
        },
        {
            currencyCode: "IQD",
            currencyName: "Iraqi Dinar",
        },
        {
            currencyCode: "IRR",
            currencyName: "Iranian Rial",
        },
        {
            currencyCode: "ISK",
            currencyName: "Icelandic Krona",
        },
        {
            currencyCode: "JEP",
            currencyName: "Jersey Pound",
        },
        {
            currencyCode: "JMD",
            currencyName: "Jamaican Dollar",
        },
        {
            currencyCode: "JOD",
            currencyName: "Jordanian Dinar",
        },
        {
            currencyCode: "JPY",
            currencyName: "Japanese Yen",
        },
        {
            currencyCode: "KES",
            currencyName: "Kenyan Shilling",
        },
        {
            currencyCode: "KGS",
            currencyName: "Kyrgyzstani Som",
        },
        {
            currencyCode: "KHR",
            currencyName: "Cambodian Riel",
        },
        {
            currencyCode: "KMF",
            currencyName: "Comorian Franc",
        },
        {
            currencyCode: "KPW",
            currencyName: "North Korean Won",
        },
        {
            currencyCode: "KRW",
            currencyName: "South Korean Won",
        },
        {
            currencyCode: "KWD",
            currencyName: "Kuwaiti Dinar",
        },
        {
            currencyCode: "KYD",
            currencyName: "Caymanian Dollar",
        },
        {
            currencyCode: "KZT",
            currencyName: "Kazakhstani Tenge",
        },
        {
            currencyCode: "LAK",
            currencyName: "Lao Kip",
        },
        {
            currencyCode: "LBP",
            currencyName: "Lebanese Pound",
        },
        {
            currencyCode: "LINK",
            currencyName: "Chainlink",
        },
        {
            currencyCode: "LKR",
            currencyName: "Sri Lankan Rupee",
        },
        {
            currencyCode: "LRD",
            currencyName: "Liberian Dollar",
        },
        {
            currencyCode: "LSL",
            currencyName: "Basotho Loti",
        },
        {
            currencyCode: "LTC",
            currencyName: "Litecoin",
        },
        {
            currencyCode: "LTL",
            currencyName: "Lithuanian Litas",
        },
        {
            currencyCode: "LUNA",
            currencyName: "Terra",
        },
        {
            currencyCode: "LVL",
            currencyName: "Latvian Lat",
        },
        {
            currencyCode: "LYD",
            currencyName: "Libyan Dinar",
        },
        {
            currencyCode: "MAD",
            currencyName: "Moroccan Dirham",
        },
        {
            currencyCode: "MDL",
            currencyName: "Moldovan Leu",
        },
        {
            currencyCode: "MGA",
            currencyName: "Malagasy Ariary",
        },
        {
            currencyCode: "MKD",
            currencyName: "Macedonian Denar",
        },
        {
            currencyCode: "MMK",
            currencyName: "Burmese Kyat",
        },
        {
            currencyCode: "MNT",
            currencyName: "Mongolian Tughrik",
        },
        {
            currencyCode: "MOP",
            currencyName: "Macau Pataca",
        },
        {
            currencyCode: "MRU",
            currencyName: "Mauritanian Ouguiya",
        },
        {
            currencyCode: "MUR",
            currencyName: "Mauritian Rupee",
        },
        {
            currencyCode: "MVR",
            currencyName: "Maldivian Rufiyaa",
        },
        {
            currencyCode: "MWK",
            currencyName: "Malawian Kwacha",
        },
        {
            currencyCode: "MXN",
            currencyName: "Mexican Peso",
        },
        {
            currencyCode: "MYR",
            currencyName: "Malaysian Ringgit",
        },
        {
            currencyCode: "MZN",
            currencyName: "Mozambican Metical",
        },
        {
            currencyCode: "NAD",
            currencyName: "Namibian Dollar",
        },
        {
            currencyCode: "NGN",
            currencyName: "Nigerian Naira",
        },
        {
            currencyCode: "NIO",
            currencyName: "Nicaraguan Cordoba",
        },
        {
            currencyCode: "NOK",
            currencyName: "Norwegian Krone",
        },
        {
            currencyCode: "NPR",
            currencyName: "Nepalese Rupee",
        },
        {
            currencyCode: "NZD",
            currencyName: "New Zealand Dollar",
        },
        {
            currencyCode: "OMR",
            currencyName: "Omani Rial",
        },
        {
            currencyCode: "PAB",
            currencyName: "Panamanian Balboa",
        },
        {
            currencyCode: "PEN",
            currencyName: "Peruvian Sol",
        },
        {
            currencyCode: "PGK",
            currencyName: "Papua New Guinean Kina",
        },
        {
            currencyCode: "PHP",
            currencyName: "Philippine Peso",
        },
        {
            currencyCode: "PKR",
            currencyName: "Pakistani Rupee",
        },
        {
            currencyCode: "PLN",
            currencyName: "Polish Zloty",
        },
        {
            currencyCode: "PYG",
            currencyName: "Paraguayan Guarani",
        },
        {
            currencyCode: "QAR",
            currencyName: "Qatari Riyal",
        },
        {
            currencyCode: "RON",
            currencyName: "Romanian Leu",
        },
        {
            currencyCode: "RSD",
            currencyName: "Serbian Dinar",
        },
        {
            currencyCode: "RUB",
            currencyName: "Russian Ruble",
        },
        {
            currencyCode: "RWF",
            currencyName: "Rwandan Franc",
        },
        {
            currencyCode: "SAR",
            currencyName: "Saudi Arabian Riyal",
        },
        {
            currencyCode: "SBD",
            currencyName: "Solomon Islander Dollar",
        },
        {
            currencyCode: "SCR",
            currencyName: "Seychellois Rupee",
        },
        {
            currencyCode: "SDG",
            currencyName: "Sudanese Pound",
        },
        {
            currencyCode: "SEK",
            currencyName: "Swedish Krona",
        },
        {
            currencyCode: "SGD",
            currencyName: "Singapore Dollar",
        },
        {
            currencyCode: "SHP",
            currencyName: "Saint Helenian Pound",
        },
        {
            currencyCode: "SLE",
            currencyName: "Sierra Leonean Leone",
        },
        {
            currencyCode: "SLL",
            currencyName: "Sierra Leonean Leone",
        },
        {
            currencyCode: "SOS",
            currencyName: "Somali Shilling",
        },
        {
            currencyCode: "SPL",
            currencyName: "Seborgan Luigino",
        },
        {
            currencyCode: "SRD",
            currencyName: "Surinamese Dollar",
        },
        {
            currencyCode: "STN",
            currencyName: "Sao Tomean Dobra",
        },
        {
            currencyCode: "SVC",
            currencyName: "Salvadoran Colon",
        },
        {
            currencyCode: "SYP",
            currencyName: "Syrian Pound",
        },
        {
            currencyCode: "SZL",
            currencyName: "Swazi Lilangeni",
        },
        {
            currencyCode: "THB",
            currencyName: "Thai Baht",
        },
        {
            currencyCode: "TJS",
            currencyName: "Tajikistani Somoni",
        },
        {
            currencyCode: "TMT",
            currencyName: "Turkmenistani Manat",
        },
        {
            currencyCode: "TND",
            currencyName: "Tunisian Dinar",
        },
        {
            currencyCode: "TOP",
            currencyName: "Tongan Pa'anga",
        },
        {
            currencyCode: "TRY",
            currencyName: "Turkish Lira",
        },
        {
            currencyCode: "TTD",
            currencyName: "Trinidadian Dollar",
        },
        {
            currencyCode: "TVD",
            currencyName: "Tuvaluan Dollar",
        },
        {
            currencyCode: "TWD",
            currencyName: "Taiwan New Dollar",
        },
        {
            currencyCode: "TZS",
            currencyName: "Tanzanian Shilling",
        },
        {
            currencyCode: "UAH",
            currencyName: "Ukrainian Hryvnia",
        },
        {
            currencyCode: "UGX",
            currencyName: "Ugandan Shilling",
        },
        {
            currencyCode: "UNI",
            currencyName: "Uniswap",
        },
        {
            currencyCode: "USD",
            currencyName: "US Dollar",
        },
        {
            currencyCode: "UYU",
            currencyName: "Uruguayan Peso",
        },
        {
            currencyCode: "UZS",
            currencyName: "Uzbekistani Som",
        },
        {
            currencyCode: "VEF",
            currencyName: "Venezuelan Bolívar",
        },
        {
            currencyCode: "VES",
            currencyName: "Venezuelan Bolívar",
        },
        {
            currencyCode: "VND",
            currencyName: "Vietnamese Dong",
        },
        {
            currencyCode: "VUV",
            currencyName: "Ni-Vanuatu Vatu",
        },
        {
            currencyCode: "WST",
            currencyName: "Samoan Tala",
        },
        {
            currencyCode: "XAF",
            currencyName: "Central African CFA Franc BEAC",
        },
        {
            currencyCode: "XAG",
            currencyName: "Silver Ounce",
        },
        {
            currencyCode: "XAU",
            currencyName: "Gold Ounce",
        },
        {
            currencyCode: "XCD",
            currencyName: "East Caribbean Dollar",
        },
        {
            currencyCode: "XDR",
            currencyName: "IMF Special Drawing Rights",
        },
        {
            currencyCode: "XLM",
            currencyName: "Stellar Lumen",
        },
        {
            currencyCode: "XOF",
            currencyName: "CFA Franc",
        },
        {
            currencyCode: "XPD",
            currencyName: "Palladium Ounce",
        },
        {
            currencyCode: "XPF",
            currencyName: "CFP Franc",
        },
        {
            currencyCode: "XPT",
            currencyName: "Platinum Ounce",
        },
        {
            currencyCode: "XRP",
            currencyName: "Ripple",
        },
        {
            currencyCode: "YER",
            currencyName: "Yemeni Rial",
        },
        {
            currencyCode: "ZAR",
            currencyName: "South African Rand",
        },
        {
            currencyCode: "ZMK",
            currencyName: "Zambian Kwacha",
        },
        {
            currencyCode: "ZMW",
            currencyName: "Zambian Kwacha",
        },
        {
            currencyCode: "ZWD",
            currencyName: "Zimbabwean Dollar",
        },
        {
            currencyCode: "ZWL",
            currencyName: "Zimbabwean Dollar",
        }
    ]

    const populateCurrencies = () => {
        currencies.forEach(currency => {
            // Create option elements
            let option1 = document.createElement('option');
            let option2 = document.createElement('option');

            // Set value and text for each option
            option1.value = currency.currencyCode;
            option1.innerHTML = '';;
            option1.appendChild(document.createTextNode(`${currency.currencyCode} - ${currency.currencyName}`));

            option2.value = currency.currencyCode;
            option2.innerHTML = '';
            option2.appendChild(document.createTextNode(`${currency.currencyCode} - ${currency.currencyName}`));

            // Append options to select elements
            fromCurrency.appendChild(option1);
            toCurrency.appendChild(option2);

        })
    }


    const convertCurrency = async () => {
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const amountVal = amount.value;

        if (amountVal === '' || isNaN(amountVal)) {
            amount.classList.add('borderToAmount');
            if (navigator.vibrate) {
                navigator.vibrate(500);
            }
            setTimeout(() => {
                amount.classList.remove('borderToAmount');
                alert("Please Insert Valid Amount");
            }, 900);
            return;
        }

        result.innerHTML = 'Converting...';
        result.classList.add('show', 'blink'); // Add 'blink' class for animation
        result.classList.remove('error');

        try {
            const response = await fetch(`${apiUrl}${amountVal}/${from}/${to}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'currency-convertor-api.p.rapidapi.com'
                }
            });
            const data = await response.json();
            let convertedAmount = data[0].rate;
            result.innerHTML = `${amountVal} ${from} = ${convertedAmount} ${to}`;
            result.classList.add('show');
        } catch (error) {
            console.error('Error converting currency:', error);
            result.innerHTML = 'Error in converting currency. Please try again later.';
            result.classList.add('error');
        } finally {
            // Remove blink animation after displaying the actual result
            if (result.textContent === 'Converting...') {
                result.classList.add('blink');
            } else {
                result.classList.remove('blink');
            }
        }
    };

    populateCurrencies();
    convertBtn.addEventListener('click', convertCurrency);
});
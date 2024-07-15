const fs = require('fs')
const path = require('path')

const jsonFilePath = path.join(path.join(__dirname, 'list.json'))
const readmeFilePath = path.join(path.join(__dirname, '../README.md'))

const refs = [
  'https://github.com/vuejs-jp/who-use-vuejs-in-japan',
  'https://github.com/vuejs-in/companies-using-vuejs-in-India',
  'https://github.com/VueJsOslo/vue-projects-norway',
  'https://github.com/coderdiaz/who-use-vuejs-in-mexico',
  'https://github.com/vuejs-finland/state.vuejs.fi',
]

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'))

// Group companies by country
const companiesByCountry = jsonData.reduce((acc, company) => {
  if (!acc[company.country]) {
    acc[company.country] = []
  }
  acc[company.country].push(company)
  return acc
}, {})

// Sort countries alphabetically
const sortedCountries = Object.keys(companiesByCountry).sort()

// Sort companies within each country by their name
sortedCountries.forEach(country => {
  companiesByCountry[country].sort((a, b) => a.name.localeCompare(b.name))
})

// Flags for each country
const flags = {
  Afghanistan: '🇦🇫',
  Albania: '🇦🇱',
  Algeria: '🇩🇿',
  Andorra: '🇦🇩',
  Angola: '🇦🇴',
  Antigua_and_Barbuda: '🇦🇬',
  Argentina: '🇦🇷',
  Armenia: '🇦🇲',
  Australia: '🇦🇺',
  Austria: '🇦🇹',
  Azerbaijan: '🇦🇿',
  Bahamas: '🇧🇸',
  Bahrain: '🇧🇭',
  Bangladesh: '🇧🇩',
  Barbados: '🇧🇧',
  Belarus: '🇧🇾',
  Belgium: '🇧🇪',
  Belize: '🇧🇿',
  Benin: '🇧🇯',
  Bhutan: '🇧🇹',
  Bolivia: '🇧🇴',
  Bosnia_and_Herzegovina: '🇧🇦',
  Botswana: '🇧🇼',
  Brazil: '🇧🇷',
  Brunei: '🇧🇳',
  Bulgaria: '🇧🇬',
  Burkina_Faso: '🇧🇫',
  Burundi: '🇧🇮',
  Cabo_Verde: '🇨🇻',
  Cambodia: '🇰🇭',
  Cameroon: '🇨🇲',
  Canada: '🇨🇦',
  Central_African_Republic: '🇨🇫',
  Chad: '🇹🇩',
  Chile: '🇨🇱',
  China: '🇨🇳',
  Colombia: '🇨🇴',
  Comoros: '🇰🇲',
  Congo: '🇨🇬',
  Costa_Rica: '🇨🇷',
  Croatia: '🇭🇷',
  Cuba: '🇨🇺',
  Cyprus: '🇨🇾',
  Czech_Republic: '🇨🇿',
  Democratic_Republic_of_the_Congo: '🇨🇩',
  Denmark: '🇩🇰',
  Djibouti: '🇩🇯',
  Dominica: '🇩🇲',
  Dominican_Republic: '🇩🇴',
  East_Timor: '🇹🇱',
  Ecuador: '🇪🇨',
  Egypt: '🇪🇬',
  El_Salvador: '🇸🇻',
  Equatorial_Guinea: '🇬🇶',
  Eritrea: '🇪🇷',
  Estonia: '🇪🇪',
  Eswatini: '🇸🇿',
  Ethiopia: '🇪🇹',
  Fiji: '🇫🇯',
  Finland: '🇫🇮',
  France: '🇫🇷',
  Gabon: '🇬🇦',
  Gambia: '🇬🇲',
  Georgia: '🇬🇪',
  Germany: '🇩🇪',
  Ghana: '🇬🇭',
  Greece: '🇬🇷',
  Grenada: '🇬🇩',
  Guatemala: '🇬🇹',
  Guinea: '🇬🇳',
  Guinea_Bissau: '🇬🇼',
  Guyana: '🇬🇾',
  Haiti: '🇭🇹',
  Honduras: '🇭🇳',
  Hungary: '🇭🇺',
  Iceland: '🇮🇸',
  India: '🇮🇳',
  Indonesia: '🇮🇩',
  Iran: '🇮🇷',
  Iraq: '🇮🇶',
  Ireland: '🇮🇪',
  Israel: '🇮🇱',
  Italy: '🇮🇹',
  Ivory_Coast: '🇨🇮',
  Jamaica: '🇯🇲',
  Japan: '🇯🇵',
  Jordan: '🇯🇴',
  Kazakhstan: '🇰🇿',
  Kenya: '🇰🇪',
  Kiribati: '🇰🇮',
  Kosovo: '🇽🇰',
  Kuwait: '🇰🇼',
  Kyrgyzstan: '🇰🇬',
  Laos: '🇱🇦',
  Latvia: '🇱🇻',
  Lebanon: '🇱🇧',
  Lesotho: '🇱🇸',
  Liberia: '🇱🇷',
  Libya: '🇱🇾',
  Liechtenstein: '🇱🇮',
  Lithuania: '🇱🇹',
  Luxembourg: '🇱🇺',
  Madagascar: '🇲🇬',
  Malawi: '🇲🇼',
  Malaysia: '🇲🇾',
  Maldives: '🇲🇻',
  Mali: '🇲🇱',
  Malta: '🇲🇹',
  Marshall_Islands: '🇲🇭',
  Mauritania: '🇲🇷',
  Mauritius: '🇲🇺',
  Mexico: '🇲🇽',
  Micronesia: '🇫🇲',
  Moldova: '🇲🇩',
  Monaco: '🇲🇨',
  Mongolia: '🇲🇳',
  Montenegro: '🇲🇪',
  Morocco: '🇲🇦',
  Mozambique: '🇲🇿',
  Myanmar: '🇲🇲',
  Namibia: '🇳🇦',
  Nauru: '🇳🇷',
  Nepal: '🇳🇵',
  Netherlands: '🇳🇱',
  New_Zealand: '🇳🇿',
  Nicaragua: '🇳🇮',
  Niger: '🇳🇪',
  Nigeria: '🇳🇬',
  North_Korea: '🇰🇵',
  North_Macedonia: '🇲🇰',
  Norway: '🇳🇴',
  Oman: '🇴🇲',
  Pakistan: '🇵🇰',
  Palau: '🇵🇼',
  Palestine: '🇵🇸',
  Panama: '🇵🇦',
  Papua_New_Guinea: '🇵🇬',
  Paraguay: '🇵🇾',
  Peru: '🇵🇪',
  Philippines: '🇵🇭',
  Poland: '🇵🇱',
  Portugal: '🇵🇹',
  Qatar: '🇶🇦',
  Romania: '🇷🇴',
  Russia: '🇷🇺',
  Rwanda: '🇷🇼',
  Saint_Kitts_and_Nevis: '🇰🇳',
  Saint_Lucia: '🇱🇨',
  Saint_Vincent_and_the_Grenadines: '🇻🇨',
  Samoa: '🇼🇸',
  San_Marino: '🇸🇲',
  Sao_Tome_and_Principe: '🇸🇹',
  Saudi_Arabia: '🇸🇦',
  Senegal: '🇸🇳',
  Serbia: '🇷🇸',
  Seychelles: '🇸🇨',
  Sierra_Leone: '🇸🇱',
  Singapore: '🇸🇬',
  Slovakia: '🇸🇰',
  Slovenia: '🇸🇮',
  Solomon_Islands: '🇸🇧',
  Somalia: '🇸🇴',
  South_Africa: '🇿🇦',
  South_Korea: '🇰🇷',
  South_Sudan: '🇸🇸',
  Spain: '🇪🇸',
  Sri_Lanka: '🇱🇰',
  Sudan: '🇸🇩',
  Suriname: '🇸🇷',
  Sweden: '🇸🇪',
  Switzerland: '🇨🇭',
  Syria: '🇸🇾',
  Taiwan: '🇹🇼',
  Tajikistan: '🇹🇯',
  Tanzania: '🇹🇿',
  Thailand: '🇹🇭',
  Togo: '🇹🇬',
  Tonga: '🇹🇴',
  Trinidad_and_Tobago: '🇹🇹',
  Tunisia: '🇹🇳',
  Turkey: '🇹🇷',
  Turkmenistan: '🇹🇲',
  Tuvalu: '🇹🇻',
  Uganda: '🇺🇬',
  Ukraine: '🇺🇦',
  United_Arab_Emirates: '🇦🇪',
  United_Kingdom: '🇬🇧',
  United_States: '🇺🇸',
  Uruguay: '🇺🇾',
  Uzbekistan: '🇺🇿',
  Vanuatu: '🇻🇺',
  Vatican_City: '🇻🇦',
  Venezuela: '🇻🇪',
  Vietnam: '🇻🇳',
  Yemen: '🇾🇪',
  Zambia: '🇿🇲',
  Zimbabwe: '🇿🇼',
}

// Function to get the flag of a country
const getFlag = country => flags[country.replaceAll(' ', '_')] || ''

// Function to get symbol or question mark
const getSymbolOrQuestion = value => {
  if (value === true) {
    return '✅'
  } else if (value === false) {
    return '❌'
  } else {
    return ''
  }
}

// Add the initial content to the README
let readmeContent = `
<h1>🌐 Vue.js Companies Directory</h1>

<p>Welcome to the Vue Companies Directory repository! This project aims to provide a comprehensive list of companies worldwide that use Vue.js in their tech stack. It's a community-driven effort to showcase Vue.js adoption across different countries and industries.</p>
<p>Currently, we have <strong><em>${jsonData.length} companies</em></strong> listed from <strong><em>${sortedCountries.length} different countries</em></strong>! Let's grow our community together by adding more companies and sharing this repository with fellow Vue.js enthusiasts.</p>

<h2>Contents</h2>

<ul>
`

// Add country names to the Contents section
sortedCountries.forEach(country => {
  readmeContent += `<li>${getFlag(country)} - <a href="#----${country
    .toLowerCase()
    .replaceAll(' ', '-')}">${country}</a></li>\n`
})

readmeContent += `
  <li>👩‍💻 - <a href="#-contributing">Contributing</a></li>
  <li>🔍 - <a href="#-sources">Sources</a></li>
</ul>

`

sortedCountries.forEach(country => {
  readmeContent += `<h2>${getFlag(country)} -  ${country}</h2>\n\n`
  readmeContent += '<table>\n'
  readmeContent += '<tr><th>Name</th><th>Remote</th><th>Hybrid</th><th>Hiring</th><th>Contact</th></tr>\n'

  companiesByCountry[country].forEach(({ contact, description, isHybrid, isHiring, isRemote, name, website }) => {
    readmeContent += '<tr>\n'
    readmeContent += `<td>${website ? `<a href="${website}" target="_blank">${name}</a>` : name}</td>\n`
    readmeContent += `<td>${getSymbolOrQuestion(isRemote)}</td>\n`
    readmeContent += `<td>${getSymbolOrQuestion(isHybrid)}</td>\n`
    readmeContent += `<td>${getSymbolOrQuestion(isHiring)}</td>\n`
    readmeContent += `<td>${
      contact?.url ? `<a href="${contact.url}" target="_blank">${contact?.text || contact.url}</a>` : ''
    }</td>\n`
    readmeContent += '</tr>\n'

    if (description) {
      readmeContent += `<tr><td colspan="5">${description}</td></tr>\n`
    }
  })

  readmeContent += '</table><br>'
})

readmeContent += '<br><h3>🔍 Sources</h3><ul>\n'
refs.forEach(ref => {
  readmeContent += `<li><a href="${ref}">${ref}</a></li>\n`
})
readmeContent += '</ul>\n'

// Add static sections to the README content
readmeContent += `
<h3>👾 How can I support?</h3>
<ul>
  <li>⭐ Star my GitHub repo</li>
  <li>🛠 Create pull requests, submit bugs, suggest new features or updates</li>
</ul>
`

readmeContent += `
<h3>👩‍💻 Contributing</h3>
<p>We welcome contributions! If you know of any Vue.js companies not listed here, feel free to add them by creating a pull request.</p>
<p>Follow these steps to create a PR:</p>
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch: <code>git checkout -b my-branch-name</code></li>
  <li>Update the <code>src/list.json</code> file with the new company details:</li>
  <br>
  <pre>
    {
      "name": "New Company Name",
      "country": "Country Name (ex: Turkey, USA, Spain, India etc...)",
      "isRemote": true,
      "isHybrid": false,
      "isHiring": true,
      "website": "https://example.com",
      "contact": { "text": "mustafacagri", "url": "https://www.linkedin.com/in/mustafacagri" },
      "description": "Optional description of the company."
    }
  </pre>
  
  If there is no information, you can leave the field empty, like this:<br>
  
  <pre>
    {
      "name": "Company Name",
      "country": "Turkey",
      "website": "https://example.com",
    }
  </pre>

  <li>Save your changes and commit them: <code>git commit -am 'feat(Turkey): add Company X and Company Y'</code></li>
  <li>Push to the branch: <code>git push origin my-branch-name</code></li>
  <li>Create a new pull request.</li>
</ol>
<p>Thank you for your contributions! 🙌🌟</p>
`

// Write the updated content to README.md
fs.writeFileSync(readmeFilePath, readmeContent)

console.log('README.md file generated successfully.')

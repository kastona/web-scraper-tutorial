const cheerio = require('cheerio')
const axios = require('axios')


async function main() {
    let {data} = await axios.get('https://web-scraper-tutorial.netlify.app/')

    
    let $ = cheerio.load(data)

    let text = $('div.container.bg-secondary > p.text-warning').text()
   
    console.log(text)
}


main()
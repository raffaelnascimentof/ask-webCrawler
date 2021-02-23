const puppeteer = require('puppeteer')

const pegaInfos = async (dataCheckin, dataCheckout) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const dataCheckinFormatada = dataCheckin.split("/").join("")
    const dataCheckoutFormatada = dataCheckout.split("/").join("")

    await page.goto(`https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=0aebfb02-4aa6-4787-86f2-3e5196a23e14#/&diff=false&CheckIn=${dataCheckinFormatada}&CheckOut=${dataCheckoutFormatada}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`, { waitUntil: 'networkidle0' })

    const data = await page.evaluate(() => {
        return [...document.querySelectorAll(".maintable > tbody > tr.roomName")]
            .map((quarto) => {

                return {
                    nome: quarto.querySelector("h5").textContent,
                    preco: quarto.querySelector(".bestPriceTextColor h6").textContent || quarto.querySelector(".arestriction").textContent,
                    descricao: quarto.querySelector(".description").textContent,
                    imagem: quarto.querySelector("img").src,
                }

            })
    })

    await browser.close()

    return data
}

module.exports = { pegaInfos }
const dataUtils = require('../utils/validaData')
const wc = require('../service/webCrawler')

module.exports = () => {
    const buscarController = {}

    buscarController.buscarValoresDeQuarto = async (req, res) => {
        const dataCheckin = req.body.checkin
        const dataCheckout = req.body.checkout
        const erros = dataUtils.validaData(dataCheckin, dataCheckout)

        if (erros) {
            return res.status(400).json(erros)
        }

        const quartos = await wc.pegaInfos(dataCheckin, dataCheckout)

        res.status(200).json(quartos)
    }

    return buscarController
}
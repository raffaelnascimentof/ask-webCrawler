const moment = require('moment')

const validaData = (dataCheckin, dataCheckout) => {

    const dataHoje = moment().format('YYYY-MM-DD')
    const checkin = moment(dataCheckin, 'DD/MM/YYYY').format('YYYY-MM-DD')
    const checkout = moment(dataCheckout, 'DD/MM/YYYY').format('YYYY-MM-DD')

    const dataCheckinEhValida = moment(checkin).isSameOrAfter(dataHoje, 'day')
    const dataCheckoutEhValida = moment(checkout).isSameOrAfter(dataHoje, 'day')
    const checkoutDepoisDoCheckin = moment(checkout).isAfter(checkin, 'day')


    const validacoes = [
        {
            nome: 'checkin',
            valido: dataCheckinEhValida,
            mensagem: `Data do checkin tem que ser igual ou maior que data: ${dataHoje}`
        },
        {
            nome: 'checkout',
            valido: dataCheckoutEhValida,
            mensagem: `Data do checkout tem que ser igual ou maior que data: ${dataHoje}`
        },
        {
            nome: 'checkin',
            valido: checkoutDepoisDoCheckin,
            mensagem: `Data do checkin não pode ser posterior a data do checkout`
        }
    ]

    const erros = validacoes.filter(campo => !campo.valido)

    if (erros.length != 0) {
        return erros
    }
}

module.exports = { validaData }   

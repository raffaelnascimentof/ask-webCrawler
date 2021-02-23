module.exports = app => {
    const controller = require('../controller/buscarController')()

    app.route('/v1/buscar')
        .post(controller.buscarValoresDeQuarto)
}
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// Com a atualização do mongo para versões maiores que 3.6, o mongo começou a apresentar um 
// erro de Cursor ou Pipeline. Para corrigir o erro, foi feita a seguinte modificação:
// foi adicionado o useNewUrlParser: true
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
    "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "'{VALUE}' não é válido para o atributo '{PATH}'."
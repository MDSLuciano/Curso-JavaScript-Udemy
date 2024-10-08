const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    res.render("contato" , { contato: {} })
}

// Criar o contato
exports.register = async (req, res) => {

    try {
        const contato = new Contato(req.body)
        await contato.register()

        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(() => res.redirect('back'))
            return
        }

        req.flash('sucess', 'Contato registrado com sucesso.')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
        return
    } catch {
        console.log(e);
        return res.render('404')
    }

}

// Editar o contato
exports.editIndex = async (req, res) => {
    if (!req.params.id) return res.render('404')

    const contato = await Contato.buscaPorId(req.params.id)
    if (!contato) return res.render('404')

    res.render('contato', { contato })
}

//Fazer update nos contatos.
exports.edit = async (req, res) =>{

    try {
    if (!req.params.id) return res.render('404')
    const contato = new Contato(req.body)
    await contato.edit(req.params.id)

    if (contato.errors.length > 0) {
        req.flash('errors', contato.errors)
        req.session.save(() => res.redirect('back'))
        return
    }

    req.flash('sucess', 'Contato editado com sucesso.')
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
    return
    } catch (e) {
        console.log(e);
        return res.render('404')
    }
}

exports.delete = async (req, res) => {
    if (!req.params.id) return res.render('404')
    
    const contato = await Contato.delete(req.params.id) // Busca o contato pelo ID
    if (!contato) return res.render('404');

    req.flash('sucess', 'Contato apagado com sucesso.')
    req.session.save(() => res.redirect('/'))
    return
}
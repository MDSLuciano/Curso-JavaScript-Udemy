const Login = require('../models/LoginModel')
exports.index = (req, res) => {
  res.render('login')
}

//Essa funcionalidade vai registrar o usuário, mas precisa ser validada,
//por isso teremos que fazer esse metódo seja async também
exports.register = async function (req, res) {
  try {
    const login = new Login(req.body)
    await login.register()

    if (login.errors.length > 0) {
      req.flash('errors', login.errors) // Adiciona as mensagens de erro à sessão
      res.req.session.save(() => res.redirect('/login/index')) // Redireciona para a página de login
      return
    }

    req.flash('sucess', 'Seu usuário foi criado com sucesso') // Adiciona as mensagens de erro à sessão
    res.req.session.save(() => res.redirect('/login/index')) // Redireciona para a página de login
  } catch (e) {
    console.log(e);
    return res.render('404')
  }

}

exports.login = async function (req, res) {
  try {
    const login = new Login(req.body)
    await login.login()

    if (login.errors.length > 0) {
      req.flash('errors', login.errors) // Adiciona as mensagens de erro à sessão
      res.req.session.save(() => res.redirect('/login/index')) // Redireciona para a página de login
      return
    }


    req.flash('sucess', 'Você entrou no sistema.') // Adiciona as mensagens de erro à sessão
    //Isso permite que o usuário não precise ficar logando sempre.
    req.session.user = login.user
    res.req.session.save(() => res.redirect('/')) // Redireciona para a página de login
  } catch (e) {
    console.log(e);
    return res.render('404')
  }

}

exports.logout = function(req, res) {
  req.session.destroy()
  res.redirect('/')
}
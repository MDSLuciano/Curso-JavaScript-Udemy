const Login = require('../models/LoginModel')
exports.index = (req, res) => {
    res.render('login')
}

//Essa funcionalidade vai registrar o usuário, mas precisa ser validada,
//por isso teremos que fazer esse metódo seja async também
exports.register = async function (req, res) {
    try{
    const login = new Login(req.body)
    await login.register()
  
    if (login.errors.length > 0) {
      req.flash('errors', login.errors) // Adiciona as mensagens de erro à sessão
      res.req.session.save(() => res.redirect('/login/index')) // Redireciona para a página de login
      return
    }
  
    req.flash('sucess', 'Seu usuário foi criado com sucesso') // Adiciona as mensagens de erro à sessão
    res.req.session.save(() => res.redirect('/login/index')) // Redireciona para a página de login
        return res.redirect('back')
    }catch(e){
        console.log(e);
        return res.render('404')
    }
    
  }
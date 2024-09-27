//Basicamente aqui estou adicionando os erros em todas as minhas paginas.
exports.middlewareGlobal = (req, res, next) =>{
    res.locals.errors = req.flash('errors')
    res.locals.sucess = req.flash('sucess')
    next()
}



// exports.checkCsrfError = (error, req, res, next) =>{
//     if(error){
//         return res.render('404')
//     }
// }

// exports.csrfMiddleware = (req, res, next) => {
//     res.locals.csrfToken = req.csrfToken();
//     next();
//   };


const engineerViews=
{
    index(req,res,next)
    {
        res.render("./engineers/Index",res.locals.data)
    },
    newView(req,res,next)
    {
        res.render("./engineers/New",res.locals.data)
    },
    edit(req,res,next)
    {
        res.render("./engineers/Edit",res.locals.data)
    },
    show(req,res,next)
    {
        res.render("./engineers/Show",res.locals.data)
    },
    redirectHome(req,res,next)
    {
        res.redirect("/engineers")
    },
    redirectShow(req,res,next)
    {
        res.redirect(`/engineers/${req.params.id}`)
    }
}

module.exports=engineerViews
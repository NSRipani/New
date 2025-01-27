export const roleAuth = (role) => {
    return async(req, res, next)=>{
        console.log("User:", req.user)
        if(!req.user) return res.status(401).json({ error : 'You are not authorized for this section'});

        if(req.user.role !== role) return res.status(403).json({ error: "You don't have permissions, only an administrator can execute this operation" })

        next()
    }
}
export const roleAuth = (role) => {
    return async(req, res, next)=>{
        // if(!req.user) return res.status(401).json({ message: 'You are not authorized for this section', error: 'Unauthorized' });
        if(!req.user) return res.status(401).json({ error : 'You are not authorized for this section'}); // , error: 'Unauthorized' 

        if(req.user.role !== role) return res.status(403).json({ error: 'only administrators handle products' })

        next()
    }
}
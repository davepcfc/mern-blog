export const testRouter = (req, res) => {
    res.json({message:'funcionou!'})
}

export const updateUser = async (req, res, next) => {
    console.log(req.user)
}
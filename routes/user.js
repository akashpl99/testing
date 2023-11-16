const  express=  require("express")
const router = express.Router()



router.get('/get', getData)
router.post('/post', postData)
router.put('/put:id', updateData)
router.delete('/delete/:id', deleteData)




model.exports =router
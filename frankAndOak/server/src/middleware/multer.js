const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './src/uploads');
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now()+ Math.floor(Math.random()*99999)+path.extname(file.originalname));
    }
});

const storageUpload = multer({storage}).fields([
    {name: 'thumbnail', maxCount: 1},
    {name: 'secondary_thumbnail', maxCount: 1},
    {name :'images', maxCount:10}
]);

module.exports = storageUpload;


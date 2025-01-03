const Product = require("../../models/product");

const ActiveProductByParentCatWeb = async (req, res) => {
    try {
        const response = await Product.find({ parent_category: req.params.parent_category, status: true })
            .populate('parent_category')
            .populate('product_category')
            .populate('size')
            .populate('color');

        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({ message: "success", filePath, data: response });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }

}

//Search Products by Key 

const SearchProducts = async (req, res) => {
    try {

        // Function to escape special characters in the search query for regex
        const escapeRegex = (text) => {
            return text.replace(/[\-\[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        };
        const escapedKey = escapeRegex(req.params.key); // Escape special regex characters(that can be received in query)
        const response = await Product.find({
            status: true,
            $or: [
                { name: { $regex: new RegExp(escapedKey, 'i') } },  ///'i' option to make the search case-insensitive.
                { description: { $regex: new RegExp(escapedKey, 'i') } },
                { short_description: { $regex: new RegExp(escapedKey, 'i') } },
                { brand: { $regex: new RegExp(escapedKey, 'i') } },
            ]
        })
            .populate(
                {
                    path: 'parent_category',  // Populate the parent_category field
                    match: {
                        status: true,  // Only include parent_category with status: true
                        $or: [
                            { name: { $regex: new RegExp(escapedKey, 'i') } }, // Match category by name
                            { description: { $regex: new RegExp(escapedKey, 'i') } }// Match category by description
                        ]
                    }
                })
            .populate({
                path: 'product_category', // Populate the product_category field
                match: {
                    status: true,  // Only include productCategory with status: true
                    $or: [
                        {
                            name: {
                                $regex: new RegExp(escapedKey, 'i')
                            }
                        }, // Match category by name
                        { description: { $regex: new RegExp(escapedKey, 'i') } },// Match category by description
                        { slug: { $regex: new RegExp(escapedKey, 'i') } }
                    ]
                }
            })
            .populate({
                path: 'color', // Populate the color field
                match: {
                    status: true,  // Only include color with status: true
                    name: { $regex: new RegExp(escapedKey, 'i') } //Match color with name  
                }
            })
            .populate({
                path: 'size', // Populate the size field
                match: {
                    status: true,  // Only include size with status: true
                    name: { $regex: new RegExp(escapedKey, 'i') } //Match size with name  
                }
            })
        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;

        res.status(200).json({ message: "success", data: response, filePath });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

//read all active products

const AllProductWeb = async (req, res) => {
    try {
        const response = await Product.find({ status: true })
            .populate('parent_category')
            .populate('product_category')
            .populate('size')
            .populate('color');
        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({ message: "success", filePath, data: response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error!" })

    }
}


//read specific product for web

const readProductWeb = async (req, res) => {
    try {
        console.log("req.params", req.params);
        const response = await Product.find(req.params)
            .populate('parent_category')
            .populate('product_category')
            .populate('size')
            .populate('color');
        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({ message: "success", data: response, filePath });

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error!" });
    }
}


//increment ViewCount of Product
const incrementViewsCountOfProduct = async (req, res) => {
    try {
        const product = await Product.findOne(req.params);
        if (product) {
            product.viewsCount += 1;
            product.lastViewedAt = Date.now();
            const response = await product.save();
            res.status(200).json({ message: "success", data: response });
            console.log(response);
        } else {
            res.status(404).json({ message: "product not found" });
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

//Get Most Viewed Products
const mostViewedProducts = async (req, res) => {
    try {
        // Get products sorted by viewCount in descending order
        const mostViewedProductsList = await Product.find()
            .sort({ viewsCount: -1 })
            .limit(10);  //fetch top 10
        const filePath = `${req.protocol}://${req.get('host')}/frank-and-oak-admin-files/`;
        res.status(200).json({ message: "success", data: mostViewedProductsList, filePath })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}
module.exports = {
    ActiveProductByParentCatWeb,
    SearchProducts,
    AllProductWeb,
    readProductWeb,
    incrementViewsCountOfProduct,
    mostViewedProducts

}
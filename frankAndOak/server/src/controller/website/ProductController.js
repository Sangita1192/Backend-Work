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

        res.status(200).json({ message: "success", data: response, filePath});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}
module.exports = {
    ActiveProductByParentCatWeb,
    SearchProducts
}
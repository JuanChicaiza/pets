import Type from "../models/type.js";

const getAllType = async (req, res) => {
    try {
        res.status(200).json(await Type.findAll())
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

const createType = async (req, res) => {
    try {
        const { name } = req.body;
        const type = await Type.create({
            name: name
        })
        res.status(201).json(type)
    } catch (error) {
        res.status(500).json({ message: "Error Interno del servidor", detail: error })
    }
}

export { getAllType, createType }
const express = require("express")
const db = require("../utlis/db")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars = await db("cars").select(["id", "VIN", "make", "model", "milage"])

        res.json(cars)
    } catch(err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        const car = await db("cars").where({ id: req.params.id }).first()

        res.json(car)
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const ids = await db("cars").insert(req.body)
        const newCar = await db("cars").where({ id: ids[0] }).first()

        res.status(201).json(newCar)
    } catch(err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try {
        const update = await db("cars").update(req.body).where("id", req.params.id)
        res.json(update)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try {
        await db("cars").where("id", req.params.id).del()

        res.status(204).end()
    } catch(err){
        next(err)
    }
})

module.exports = router
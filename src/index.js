const chalk = require("chalk")
const nanoid = require("nanoid")

const purchases = []
const inform = console.log

function createPurchase(name, amount, donation) {
    const id = nanoid(10)
    const roundedDonation = parseFloat(donation).toFixed(2)
    const purchase = { id, name, amount, donation: roundedDonation}

}

function getAllPurchases() {
    return purchases.map((purchase) => ({ id:
    purchase.id, name: purchase.name }))
}

function getPurchaseById(id) {
    return purchases.find((purchase) => purchase.id === id)
}

function updatePurchase(id, name, amount, donation) {
    const purchase = purchase.find((purch) => purch.id === id)
    if (purchase) {
        purchase.name = name || purchase.name
        purchase.amount = amount || purchase.amount
        purchase.donation = parseFloat(donation).toFixed(2) || purchase.donation
        return purchase
    }
    return null
}
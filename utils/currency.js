export const formatCurrency = (amount, currency="INR") => {
    return new Intl.NumberFormat("en-In",{
        style:"currency",
        currency
    }).format(amount)
}
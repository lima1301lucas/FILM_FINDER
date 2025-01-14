export function convertMinutes(minutes){
    const hours = Math.floor(minutes/60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
}

export function formatDate(date) {
    const dateString = String(date);
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
}

export function formatCurrency(value) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(value);
}
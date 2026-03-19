// utils/formatters.ts

export const getFormattedDate = (date: Date | string) => {
    const formattedDate = new Date(date);

    if (isNaN(formattedDate.getTime())) return "Dată invalidă";

    const day = formattedDate.getDate();
    const year = formattedDate.getFullYear();
    
    const month = formattedDate.toLocaleDateString("ro-RO", { month: "long" });
    
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

    return `${day} ${capitalizedMonth}, ${year}`;
};
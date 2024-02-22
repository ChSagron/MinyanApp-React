const convertPrayer = (prayer) => {
    switch (prayer) {
        case 1:
            return "שחרית";
        case 2:
            return "מנחה";
        case 3:
            return "ערבית";
        default:
            return "לא  מוגדר";
    }
};



export { convertPrayer }
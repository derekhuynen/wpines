


export const getFilteredRows = (businesses, filterKey) => {
    return businesses.businesses.filter((business) => {
        return Object.values(business).some((s) =>{
                return ("" + s).toLowerCase().includes(filterKey.toLowerCase())
            }
        );
    });
};

export const filterTopic = (businesses, topic, filterKey) => {
    console.log(businesses)
    return businesses.map((business) => {
        console.log(business["title"]);
        return 1;

    });
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
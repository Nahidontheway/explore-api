const user = {
    id : 1,
    name : 'Afnan Chowdhury',
    job : 'Student',
    slary : '90000'
}
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    owner : 'Priya Roy',
    adress : {
        street : '2/A Kochukhet',
        city : 'Kashmir',
        country : 'India'
    },
    product : ['laptop', 'mic', 'mouse', 'keyboard'],
    revenue : 45000,
    isOPen : true,
    isNew : false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
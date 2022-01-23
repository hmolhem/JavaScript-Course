companies = [
    {name:"one", category:"Finance", start: 1981, end: 2003},
    {name:"two", category:"Retail", start: 1992, end: 2008},
    {name:"three", category:"Auto", start: 1999, end: 2007},
    {name:"four", category:"Retail", start: 1989, end: 2010},
    {name:"five", category:"Technology", start: 2009, end: 2014},
    {name:"six", category:"Finance", start: 1987, end: 2010},
    {name:"seven", category:"Auto", start: 1986, end: 1996},
    {name:"eight", category:"Technology", start: 2011, end: 2016},
    {name:"nine", category:"Finance", start: 1981, end: 1989},
];

ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 54, 32];


// Method #1 : for loop
// for(idx = 0; idx < companies.length; idx++){
//     console.log(companies[idx]);
// }   

// Method #2-01 : forEach
// companies.forEach(function(company) {
//     console.log(company);
// });

// Method #2-02 : forEach with arrow function
// companies.forEach(company => {
//     console.log(company);
// });

// Method #2-03 : forEach with arrow function without {}
// companies.forEach(company => console.log(company));

// Method #2-04 : forEach with 3 paramters
// companies.forEach((company,index, companies) => {
//     console.log(company,index,companies);
// });

// Method #2-05 : forEach log for name object properties
// companies.forEach(company => {
//     console.log(company.name);
// });

// filter
// Method #1-01 : use for loop in filter array

// get 21 and older
// let canDrink = [];
// for(idx = 0; idx < ages.length; idx++){
//     if(ages[idx] > 21 ){
//         canDrink.push(ages[idx]);
//     }
// }
// console.log(canDrink);

// get 21 and older
// Method #1-02 : use filter function in filter array
// canDrink = ages.filter(age => age > 21);
// console.log(canDrink);

// get 21 and older
// Method #1-02 : use filter function in filter array
// const canDrink = ages.filter(age => age > 21);
// console.log(canDrink);

// filter retail companies
// Method #1-03
// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

// filter retail companies
// Method #1-04
// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail"){
//         return true;
//     }
// });
// console.log(retailCompanies);

// get 80s companies
// Method #1-05
// const retailCompanies = companies.filter(function(company){
//     if(company.start > 1980 && company.start < 1990){
//         return true;
//     }
// });
// console.log(retailCompanies);

// get 80s companies
// Method #1-06
// const retailCompanies = companies.filter( company => (company.start > 1980 && company.start < 1990));
// console.log(retailCompanies);

//map
// comapny names
//Method #1-01
// const companyNames =  companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

//Method #1-02
// const companyNames =  companies.map(company => company.name);
// console.log(companyNames);

//Method #1-03
// const testMap =  companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(testMap);

//Method #1-04
// const testMap =  companies.map(company =>`${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

//Method #1-05
// const agesSquare =  ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

//Method #1-06
// const agesTimesTwo =  ages.map(age =>age*2);
// console.log(agesTimesTwo);

//Method #1-07
// const ageMap =  ages
// .map(age =>age*2)
// .map(age =>Math.sqrt(age));
// console.log(ageMap);



//sort
// Method #1-01
// const sortedCompanies = companies.sort( function(c1,c2) {
//     if(c1.start < c2.start){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// Method #1-02
// const sortedCompanies = companies.sort( (c1,c2) => (c1.start < c2.start) ?  1 : -1);
// console.log(sortedCompanies);

// Method #1-03
// const sortAges = ages.sort( (a,b) => a-b);
// console.log(sortAges);

// Method #1-04
// const sortAges = ages.sort( (a,b) => b-a);
// console.log(sortAges);

//reduce
// Method #1-01
// let agesSum = 0;
// for(i=0; i<ages.length; i++){
//     agesSum += ages[i];
// };
// console.log(agesSum);

// Method #1-01
// let agesSum = 0;
// for(i=0; i<ages.length; i++){
//     agesSum += ages[i];
// }
// console.log(agesSum);

// Method #1-02
// const agesSum = ages.reduce(function(total, age){
//     return total + age;
// },0);
// console.log(agesSum);

// Method #1-02
// const agesSum = ages.reduce((total, age) => total + age, 0);
// console.log(agesSum);

// Method #1-03
// const totalYears = companies.reduce(function(total,company){
//     return total + (company.end - company.start);
// },0);
// console.log(totalYears);

// Method #1-04
// const totalYears = companies.reduce((total,company) => total + (company.end - company.start),0);
// console.log(totalYears);

//combines methods
const combined = ages
        .map(age => age*2)
        .filter(age => 40)
        .sort((a,b) => a-b)
        .reduce((t,age) => t+age, 0);
console.log(combined);
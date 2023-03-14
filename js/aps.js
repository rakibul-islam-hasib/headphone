fetch('https://restcountries.com/v3.1/alpha/bd')
.then(res => res.json())
.then(data => testFn(data[0]))


function testFn(data){
   console.log(data.currencies);
   const keysFromArr = Object.keys(data.currencies);
    const valuesFromArr = Object.values(data.currencies);
    console.log(valuesFromArr[0]);
}
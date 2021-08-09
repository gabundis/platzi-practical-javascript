// Helpers or Utils
function isEven( number ) {
    return ( number % 2 === 0 );
}

function getAverage( list ) {
    const sumList = list.reduce(
        function( accumulatedValue, newElement ) {
            return accumulatedValue + newElement;
        }
    );
    const avgList = sumList / list.length;

    return avgList;
}

// Calculate median
function getMedianSalaries( list ) {
    const halfList = parseInt( list.length / 2 );
    let median;
    
    if ( isEven(list.length) ) {
        const person1 = list[halfList];
        const person2 = list[halfList - 1];
        median = getAverage( [person1, person2] );
    } else {
        median = list[halfList];
    }
    
    return median;
}

// General Median
const salariesMx = mexico.map(
    function( person ) {
        return person.salary;
    }
);

const sortedSalariesMx = salariesMx.sort(
    function( salaryA, salaryB ) {
        return salaryA - salaryB;
    }
);

const generalMedianMx = getMedianSalaries( sortedSalariesMx );

// Top10% Median
const spliceStart = parseInt( ( sortedSalariesMx.length * 90 ) / 100 );
const spliceCount = sortedSalariesMx.length - spliceStart;

const top10SalariesMx = sortedSalariesMx.splice(spliceStart, spliceCount);

const top10MedianMx = getMedianSalaries( top10SalariesMx );

console.log({
    generalMedianMx,
    top10MedianMx
});
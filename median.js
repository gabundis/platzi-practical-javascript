function getAverage( list ) {
    const sumList = list.reduce(
        function( accumulatedValue, newElement ) {
            return accumulatedValue + newElement;
        }
    );
    const avgList = sumList / list.length;

    return avgList;
}

const list1 = [ 100, 200, 300, 500 ];

function getMedian( list ) {
    const halfList = parseInt( list.length / 2 );
    let median;

    // List in ascending
    list.sort( function(a, b) {
        return a - b;
    });
    
    if ( isEven(list.length) ) {
        const element1 = list[halfList];
        const element2 = list[halfList - 1];
    
        median = getAverage( [element1, element2] );
    
    } else {
        median = list[halfList];
    }

    return median;
}

function isEven( number ) {
    return number % 2 === 0;
}



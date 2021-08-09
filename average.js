const list1 = [ 100, 200, 300, 500 ];

function getAverage( list ) {
    // let sumList = 0;
    // for (let i = 0; i < list.length; i++) {
    //     sumList = sumList + list[i];
    // }
    const sumList = list.reduce(
        function( accumulatedValue, newElement ) {
            return accumulatedValue + newElement;
        }
    );
    const avgList = sumList / list.length;

    return avgList;
}
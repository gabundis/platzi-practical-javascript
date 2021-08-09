const list1 = [1,2,2,3,1,1,4,5,4,2,1,8];

function getMode( list ) {
    const list1Count = {};
    
    list1.map(
        function( element ) {
            if ( list1Count[element] ) {
                list1Count[element] += 1;
            } else {
                list1Count[element] = 1;
            }
        }
    );
    
    const list1Array = Object.entries( list1Count ).sort(
        function( a, b ) {
            return a[1] - b[1];
        }
    );

    const mode = list1Array[list1Array.length - 1][0];

    return mode;

}

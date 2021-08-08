// Creating the coupons array
const coupons = [
    "IPUNK20",
    "IPUNK25",
    "IPUNK30"
];

// Validating the coupon value with the method 'Includes'
if ( !coupons.includes( userCouponValue )) {
    alert( "The captured coupon: " + userCouponValue + " is not valid" )
}

// Creating the coupons object array
const coupons = [
    { name: "IPUNK20", discount: 20 },
    { name: "IPUNK25", discount: 25 },
    { name: "IPUNK30", discount: 30 },
];

// Gets the coupon value from the input
const inputCoupon = document.getElementById("inputCoupon");
const couponValue = inputCoupon.value;

// Creating the function to validate the coupon value
const isCouponValueValid = function( coupon ) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find( isCouponValueValid );

if ( !userCoupon ) {
    alert( "The captured coupon " + couponValue + " is not valid" );
}



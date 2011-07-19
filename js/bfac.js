function fac2ten(x) {
    var n,
        f,
        i,
        valid,
        d;

    n = 0;
    f = 1;

    valid = x.toString().split("").reverse("");
    valid = valid.slice(1);
    for (i = 0; i < valid.length; i++) {
        d = valid[i];
        n += f * d;
        f *= f + 1;
    }

    return n;
}

function ten2fac_r(n, f) {
    if (n < f) {
        return n;
    }

    var r = ten2fac_r(n, f * (f + 1));

    var s = r[0];
    var n = r[1];

    // we only deal with positive numbers, so floor is ok
    var d = Math.floor(n / f);
    n %= f;
    
    s = s + d;

    return [s, n];
}

function ten2fac(n) {
    var r = ten2fac_r(n, 1);

    var fac = r[0];
    return fac;
}



//for (var i = 0; i < 10; i++) {
//    console.log(ten2fac(i));
//}

expected = [0, 10, 100, 110, 200, 210, 1000, 1010, 1100, 1110, 1200, 
    1210, 2000, 2010, 2100, 2110, 2200, 2210, 3000, 3010, 3100, 3110, 3200, 
    3210];

var fac;
for (var ten = 0; ten < expected.length; ten++) {
    fac = expected[ten];

    given = fac2ten(fac);

    if (ten != given) {
        console.log("Failed: " + fac + " => " + ten + " returned " + given);
    }
}

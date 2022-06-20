const printSegitiga = 5;
    let hasil = '';
    for (let i = printSegitiga; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
             hasil += j ;
        }
        hasil += '\n';
    }
    console.log(hasil);
const mtk = 86;
const bIndo = 62;
const bInggris = 18;
const ipa = 95;

jumNilai = mtk + bIndo + bInggris + ipa;
score = jumNilai/4;

if(score >= 90 && score <= 100) {
    console.log('Grade = A');
}else if(score >= 80 && score <= 89){
    console.log('Grade = B');
}else if(score >= 70 && score <= 79){
    console.log('Grade = C');
}else if(score >= 60 && score <= 69){
    console.log('Grade = D');
}else if(score >= 0 && score <= 59){
    console.log('Grade = E');
}else{
    console.log('Anda memasukan String atau angka melebihi 100');
}


console.log(`Rata-Rata ${score}`);
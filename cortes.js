class Cortes {
    constructor(cabello=false, barba=false, cepillado=false,cabyBar=false, hombres=false,mujeres=false,ninos =false){
    this.hombres= hombres ;
    this.mujeres= mujeres ;
    this.ninos= ninos;
    this.cabello = cabello;
    this.barba = barba;
    this.cepillado=cepillado;
    this.cabyBar=cabyBar;
    
    
    }

    
}
function myFunction() {
    document.getElementById("demo").style.color = "red";
    alert("el valor del corte es:"+ hombres.barba );
}


var hombres=new Cortes ("12000", "5000","0","15000");

var mujeres=new Cortes("16000", "0", "16000","0");



console.log(mujeres);

console.log(hombres);
console.log("LOS CORTES DE HOMBRE SON: "+ "cabello:"+ hombres.cabello +  " barba: " + hombres.barba + " cabello y barba: " + hombres.cabyBar);
console.log("LOS CORTES DE MUJER SON: "+ "cabello:"+ mujeres.cabello +  " cepillado: " + mujeres.cepillado);
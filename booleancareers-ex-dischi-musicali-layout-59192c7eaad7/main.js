// DESCRIZIONE:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music




$(document).ready(function() {
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(datiRitorno){
      console.log(datiRitorno)
      },
      error: function(){
        console.log("Errore");
      }

    });

});

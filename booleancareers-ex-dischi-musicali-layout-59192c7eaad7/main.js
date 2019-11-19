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

      // stampare in pagina

      // $(".prova").text(datiRitorno.response[0].title)
      // devo fare un ciclo for sull array
        for(var i = 0; i < datiRitorno.response.length; i++) {
          // console.log(datiRitorno.response[i])
          // $(".prova").text(datiRitorno.response[i].title)
          // $(".prova").text(datiRitorno.response[i].poster)

          // $(".prova").text(
          //   datiRitorno.response[i].poster + "<br>" +
          //   $(".prova").text(datiRitorno.response[i].title)
          // )

          $(".prova").append(
            datiRitorno.response[i].poster + "<br>" +
            datiRitorno.response[i].author + "<br>" +
            datiRitorno.response[i].genre + "<br>" +
            datiRitorno.response[i].title + "<br>" +
            datiRitorno.response[i].year + "<br>"
          )

      // devo fare un ciclo for sull oggetto


        };
      },
      error: function(){
        console.log("Errore");
      }

    });

});

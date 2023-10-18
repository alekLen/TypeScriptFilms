/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

   
$(() => {
    const path1 = "https://www.omdbapi.com/?apikey=96c14996&t="; 
    const selectElement = document.getElementById('typeMove') as HTMLSelectElement;
    const inputElement = document.getElementById('name') as HTMLInputElement;
    const imgElement = document.getElementById('im') as HTMLImageElement;
    const titleElement = document.getElementById('name') as HTMLSpanElement;
  
        $('#search').click((e) => {
            const n = inputElement.value;
            const t = selectElement.value;
            const str: string = path1 + n + "&type=" + t;
         
           $.getJSON(str,
               function (data) {
                   if (data.Title) {
                       $('#im').attr("src", data.Poster);
                       $('#con').css('display', 'block');
                       $('#con1').css('display', 'block');
                       $('#err').css('display', 'none')
                       $('#n').html(data.Title);
                       $('#y').html(data.Year);
                       $('#g').html(data.Genre);
                   }
                   else {
                       $('#err').css('display', 'flex');
                       $('#con').css('display', 'none');
                       $('#con1').css('display', 'none');
                   }
                   
                });
            
        });
    });



/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

   
$(() => {
    const parentDiv = document.getElementById('content');
    const path1 = "https://www.omdbapi.com/?apikey=96c14996&t="; 
    const selectElement = document.getElementById('typeMove') as HTMLSelectElement;
    const inputElement = document.getElementById('name') as HTMLInputElement;
    const divElement = document.createElement('div');
    divElement.className = 'film';
    const div1Element = document.createElement('div');
    const div2Element = document.createElement('div');
    const imgElement = document.createElement('img');
    const span1Element = document.createElement('span');
    const span2Element = document.createElement('span');
    const span3Element = document.createElement('span');
    const pElement = document.createElement('p');
    const subElement = document.createElement('button');
    subElement.textContent = 'Details';

        $('#search').click((e) => {
            const n = inputElement.value;
            const t = selectElement.value;
            const str: string = path1 + n + "&type=" + t;
      
            $.getJSON(str,
                function (data) {
                    $('#content1').css('display', 'none');
                    $('#content').html('');
                    $('#err').css('display', 'none');               
                    if (data.Title) {
                        imgElement.src = data.Poster;
                        imgElement.className = 'poster';
                        imgElement.style.padding = '15px';
                        imgElement.style.width = '200px';
                        imgElement.style.maxHeight = 'auto';
                        imgElement.alt = 'Poster';
                        imgElement.style.backgroundColor ='sandybrown'
                        span1Element.innerHTML = data.Title;
                        span1Element.style.padding = '15px'
                        span1Element.style.display = 'block';
                        span2Element.innerHTML = data.Year;
                        span2Element.style.padding = '15px'
                        span2Element.style.display = 'block';
                        span3Element.innerHTML = data.Genre;
                        span3Element.style.padding = '15px'
                        span3Element.style.display = 'block';
                        pElement.style.padding = '15px';
                        pElement.style.width = '200px';
                        pElement.innerHTML = data.Plot;
                        subElement.style.padding = '8px';
                        subElement.style.margin = '15px'
                        subElement.addEventListener('click', () => {
                            $('#im').attr("src", data.Poster);
                            $('#con').css('display', 'block');
                            $('#con1').css('display', 'block');
                           $('#content1').css('display', 'flex');
                            $('#n').html(data.Title);
                            $('#y').html(data.Year);
                            $('#g').html(data.Genre);
                            $('#a').html(data.Actors);
                            $('#d').html(data.Director);
                            $('#w').html(data.Writer);
                            $('#c').html(data.Country);
                            $('#l').html(data.Language);
                            $('#r').html(data.Ratings[0].Source + ":      " + data.Ratings[0].Value);
                            $('#p').html(data.Plot);
                        });                     
                        div1Element.appendChild(imgElement);                       
                        div2Element.appendChild(span1Element);
                        div2Element.appendChild(span2Element);
                        div2Element.appendChild(span3Element);
                        div2Element.appendChild(subElement);                      
                        divElement.style.display = 'flex';
                        divElement.style.justifyContent = 'center';
                        divElement.appendChild(div1Element);
                        divElement.appendChild(div2Element);                  
                        parentDiv.appendChild(divElement);
                    }
                    else {
                        $('#err').css('display', 'flex');                    
                        $('#con1').css('display', 'none');
                    }

                }
            );
        });
    
    });



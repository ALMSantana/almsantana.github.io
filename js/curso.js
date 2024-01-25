document.addEventListener("DOMContentLoaded", function(){
    let lista_videos = document.querySelectorAll(".titulo-video");
    let elemento_nome_curso = document.querySelector(".nome-curso");
    let elemento_descricao_curso = document.querySelector(".descricao-curso");
    let elemento_imagem_curso = document.querySelector(".imagem-curso");
    let elemento_tempo_curso = document.querySelector(".tempo-curso");
    let contador_video = 1;

    for(um_video of lista_videos){
        um_video.innerHTML = "Vídeo " + contador_video;
        contador_video+=1;
    }

    elemento_nome_curso.innerHTML = localStorage.getItem("nome-curso");
    elemento_descricao_curso.innerHTML = "Nível: " + localStorage.getItem("nivel-curso");
    elemento_tempo_curso.innerHTML = localStorage.getItem("tempo-curso");
    elemento_imagem_curso.src = localStorage.getItem("imagem-curso");
    
});
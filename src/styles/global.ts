import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
       --background:#f0f2f5;
       --red: #E52E4D;
       --blue:#5429CC;
       --blue-light:#6933FF;
       --text-title: #363F5F;
       --text-body: #969CB3;
       --shape: #FFFFFF;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    //De acordo com o Diego essa config deveria ser configurada
    //em todas as aplicações..
    //font-size: 16px é o padrão de todo os navegadores
    //REM = 1rem === 16px
    html{
        //telas que vão até 1080
        @media(max-width: 1080px){
            font-size: 93.75%; //15px, pois se 16 * 09375 = 15px
        }
        //telas que vão até 720 
        @media(max-width: 720px){
            font-size:87.5%; //14px, pois se 16* 0875 = 14px
        }
    }

    body{
        background:var(--background);
        //para as fonts ficarem mais nitidas
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    //tudo que estiver desabilitado
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }

`;

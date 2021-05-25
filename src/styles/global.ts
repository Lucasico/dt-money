import { createGlobalStyle } from "styled-components";

/**
    tambem poderia ser: background: ${(props) =>
    props.isActive ? "colorA" : "ColorB"}
 */
export const GlobalStyle = createGlobalStyle`
    :root{
       --background:${({ theme }) => theme.backgrond};
       --red: ${({ theme }) => theme.colors.red};
       --blue:${({ theme }) => theme.colors.blue};
       --blue-light:${({ theme }) => theme.colors.blueLight};
       --text-title: ${({ theme }) => theme.colors.textTitle};
       --text-body: ${({ theme }) => theme.colors.textBody};
       --shape: ${({ theme }) => theme.colors.shape};
       --green: ${({ theme }) => theme.colors.green};
       --input-modal:${({ theme }) => theme.colors.inputsModal}
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

    //o input, textearea e button por padrão não importa a font do body
    body, input, textarea, button{
        font-family:'Poppins', sans-serif;
        font-weight:400;
    }

    h1,h2,h3,h4,h5,h6, strong{
        font-weight:600;
    }

    button{
        cursor: pointer;
    }

    //tudo que estiver desabilitado
    [disabled]{
        opacity:0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay{
        background-color:rgba(0,0,0,0.5);
        //deixar o overlay em cima da tela
        position:fixed;
        //t = 0, b = 0, r = 0 e l = 0 estou dizendo que com isso o overlay vai ocupar toda a tela
        top:0;
        bottom:0;
        right:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content:center

    }
      //classe para estilizar o conteudo
    .react-modal-content{
        width:100%;
        max-width:576px;
        background-color:var(--background);
        padding:3rem;
        //relativa pois vai ter o x pra fechar que vai ser absoluto
        position:relative;
        border-radius:0.25rem;
    }

    .react-modal-close{
        position:absolute;
        right:1.5rem;
        top:1.5rem;
        border:none;
        background:transparent;
        transition: filter 0.2s;

        &:hover{
            filter:brightness(0.5)
        }
    }

`;

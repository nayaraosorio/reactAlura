// Banner.js

import './Banner.css';

function Banner() {
    return(
        <header className="banner">
        <img src="/imagens/banner.png" alt="Banner principal da página" />
    </header>);
}

export default Banner;


// return (
//     <header className="banner">
//         <img src="/imagens/banner.png" alt="0 banner principal da página do Organos"/> 
//     </header>
//     <h1>Teste</h1>
// )

// A forma acima está incorreta, deveria ficar entre uma <div>, tanto o header quanto o h1
// uma forma de correção, é utilizar o <fragment> ou <>
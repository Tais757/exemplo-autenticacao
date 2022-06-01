import './styles.css'

const renderDetailsPanel = (container: HTMLElement) => {
  const userEmail = localStorage.getItem('userEmail')
  const userPhoto = localStorage.getItem('userPhoto')
  const userName = localStorage.getItem('userName')


  const htmlContent = `
        <div class="home">
            <h2>Autentiquei Goo</h2>
            <img src="${userPhoto}">
            <a href="index.html">Home</a>
            <a href="logout.html">Sair</a>
        </div>
        
        <div id="details">
            <h1>Nome: ${userName}</h1>
            <h1>E-mail: ${userEmail}</h1>
        </div>

    `

  container.innerHTML = htmlContent
}

export default renderDetailsPanel

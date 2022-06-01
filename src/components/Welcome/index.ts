import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
  const userName = localStorage.getItem('userName')
  const userPhoto = localStorage.getItem('userPhoto')
  const currentDate = new Date().toLocaleString()


  const htmlContent = `
      <div id="welcome-text">
        <h2>Autentiquei Goo</h2>
      </div> 
      <div class="welcome">

          <img src="${userPhoto}">
          <h1>Olá, ${userName}.</h1>
          <h1>Bom te ver de volta!</h1>
          <p>${currentDate}</p>
          <a href="details.html">Detalhes</a>
          <a href="logout.html">Sair</a>
        </div>

    `

  container.innerHTML = htmlContent
}

export default renderWelcomePanel

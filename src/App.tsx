import NavBar from './components/navBar';
import './styles/components/app.sass';
import ImagePrincipal from './images/image-mockups.png'



function App() {
  

  return (
    <>
    <NavBar/>
      <div id='home' >
        <div className='image-area'>
          <img src={ImagePrincipal} alt="" />
        </div>
        <section className='principal-area container'>
          <div className='text-area'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className='buttonInvite'>Request Invite</button>
          </div>
        </section>
        <section className='chose-area'>
          <div className='container'>
            <h2>bla bla bla</h2>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

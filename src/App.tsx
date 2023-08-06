import NavBar from './components/navBar';
import './styles/components/app.sass';
import ImagePrincipal from './images/image-mockups.png'
import ChoseItem from './components/choseItem';
import ArticleItem from './components/articleItem';
import Footer from './components/footer';



function App() {
  

  return (
    <>
    <NavBar/>
      <div id='home' >
        <div className='image-area'>
          <img src={ImagePrincipal} alt="" />
        </div>
        <section className='principal-area container'>
          <div className='text-area-principal'>
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <button className='buttonInvite'>Request Invite</button>
          </div>
        </section>
        <section className='choose-area'>
          <div className='container text-area-choose'>
            <h2>Why choose Easybank?</h2>
            <p>We leverage Open Banking to turn your bank account into your financial hub. 
            Control your finances like never before.</p>
            <ChoseItem/>
          </div>
        </section>
        <section className='articles-area container'>
          <h3>Latest Articles</h3>
          <ArticleItem/>
        </section>
        <Footer/>
      </div>
    </>
  )
}

export default App

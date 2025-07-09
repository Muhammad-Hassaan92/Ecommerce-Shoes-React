import 'bootstrap/dist/css/bootstrap.min.css';
import VCard from './components/v-card';
import Title from './components/title';
import HCard from './components/hcard';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <>
      <div className='container-fluid'>
        <Header/>
      </div>
      <div>
        <Title heading="NEW ARRIVALS" subheading="Trending from new and modern mens style collection" />
      </div>
      <div className='container-fluid p-3'>
        <div className='row'>
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
          <VCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" />
        </div>
      </div>
      <div>
        <Title heading="FEATURED" subheading="Trending from mens and womens style collection" />
      </div>
      <div className='container-fluid p-3'>
        <div className='row justify-content-center'>
          <HCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/2.png" />
          <HCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/2.png" />
          <HCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/2.png" />
          <HCard title="MEN's Shoe" des="The bulk of card's content" price="49.99" image="https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/2.png" />
        </div>
      </div>
      <div className='container-fluid'>
        <Footer/>
      </div>
    </>

  )
}

export default App

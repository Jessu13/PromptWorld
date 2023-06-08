import Feed from "@components/Feed";

const Home = () => (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Descubre y Comparte
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Poderosos Prompts para IA</span>
      </h1>
      <p className='desc text-center'>
        PromptWorld es una herramienta para el mundo moderno, donde se pueden descubrir, crear y compartir prompts creativos.
      </p>
  
      <Feed />
    </section>
  );

export default Home
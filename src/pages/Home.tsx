import CreatorInfo from '../components/home/Creator';

const Home = () => {
  return (
    <>
      <h1 className="text-red-700 text-3xl text-center">
        Welcome to React Quick Starter
      </h1>
      <CreatorInfo />
      <h4 className="text-center mt-8">
        Here you will get a completed project setup with the latest version of:
      </h4>
      <ul className="font-semibold text-sm mx-auto">
        <li>React</li>
        <li>Typescript</li>
        <li>Tailwind CSS</li>
        <li>Tanstack Router</li>
        <li>Shadcn</li>
        <li>Redux</li>
      </ul>
    </>
  );
};

export default Home;

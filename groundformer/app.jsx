/* GroundFormer project page — app entry */
function App() {
  const { NavBar, Hero, Motivation, Method, Results, UseCases, Citation, Footer } = window;
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Hero />
        <Motivation />
        <Method />
        <Results />
        <UseCases />
        <Citation />
      </main>
      <Footer />
    </React.Fragment>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

const randomImage = () => "https://placedog.net/400/300?random&" + Date.now();

function Section() {
  return (
    <section className="border rounded bg-black/50 text-center">
      <img className="inline" src={randomImage()} />
    </section>
  );
}

document.querySelectorAll(".section").forEach((section) => {
  ReactDOM.render(<Section />, section);
});

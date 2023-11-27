<script>
  let currentYear = new Date().getFullYear();
</script>

<style>
  footer {
    background-color: #14151A;
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-logo {
    width: 128px;
    height: auto;
    margin-top: 2em;
    margin-bottom: 0;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  .footer-link {
    margin: 0 1em;
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

  .footer-text {
    margin-top: 1em;
  }

  .copyright {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.5em;
  }
</style>

<div class="mt-5">
  <!-- Footer -->
  <footer>
    <!-- Grid container -->
    <div class="container footer-container">
      <img class="footer-logo" src="/assets/images/logo-ilojo-bar-big.webp" alt="logo">

      <!-- Section: Links -->
      <section class="footer-links">
        <a href="/stories" class="footer-link">Stories</a>
        <a href="/timeline" class="footer-link">Timeline</a>
        <a href="/" class="footer-link">3D Model</a>
        <a href="/" class="footer-link">Credits</a>
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->

    <hr class="my-5" />

    <!-- Section: Text -->
    <section class="footer-text">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p>
              Ilojo Bar of Casa do Fernandez, a historic monument in Lagos, Nigeria, was unlawfully demolished in 2016. Built in the 19th century by Africans returning from Brazil, it holds a rich legacy. Explore the virtual monument and its captivating stories on our English-language website.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Text -->

    <!-- Copyright -->
    <div class="text-center p-3 copyright">
      &#169; {currentYear} Ilojo Bar
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->
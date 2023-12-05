<script>
  let currentYear = new Date().getFullYear();
</script>

<style>
  footer {
    background-color: #14151A;
    color: var(--light);
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

  <footer>
    <div class="container footer-container">
      <img class="footer-logo mb-3" src="/assets/images/logo-ilojo-bar.webp" alt="logo">

      <nav class="footer-links mb-3">
        <a href="/" class="footer-link">STORIES</a>
        <a href="/timeline" class="footer-link">TIMELINE</a>
        <a href="/3d-model" class="footer-link">3D MODEL</a>
        <a href="/guesbook" class="footer-link">GUESTBOOK</a>
        <a href="/credits" class="footer-link">CREDITS</a>
      </nav>
    </div>

    <hr class="my-5" />

    <section class="footer-text">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p class="text-center">
              Ilojo Bar of Casa do Fernandez, a historic monument in Lagos, Nigeria, was unlawfully demolished in 2016. Built in the 19th century by Africans returning from Brazil, it holds a rich legacy. Explore the virtual monument and its captivating stories on our English-language website.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center p-3 copyright mt-4">
      &#169; {currentYear} Ilojo Bar
    </div>
  </footer>
<script>
    import HotelBrand from "./HotelBrand.svelte";
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <HotelBrand />
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button" id="login" href="/login"> Log in </a>
            <a class="button" id="signup" href="/signup"> Sign up </a>
          </div>
        </div>
      </div>
    </div>
</nav>
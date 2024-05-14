<script lang="ts">
    import SignupForm from "./SignupForm.svelte";
  </script>
  
  <section class="hero is-fullheight is-default is-bold">
    <div class="hero-head"></div>
    <div class="hero-body">
      <div class="container">
        <div class="is-vcentered">
          <div class="is-5">
            <h1 class="title has-text-centered">Sign up for Hotel!</h1>
            <div class="box">
              <SignupForm></SignupForm>
              <p class="has-text-centered">Already have an account? <a href="/login" data-cy="login-redirect">Login Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
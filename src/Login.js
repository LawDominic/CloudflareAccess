import React from 'react';

function Login() {
    return (
        <section class="hero is-fullheight">
        <div class="container hero-body has-text-centered ">
            <div class="login box">
            <form>
                <div class="field">
                <div class="control">
                    <input class="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
                </div>
                </div>
                <div class="field">
                <div class="control">
                    <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
                </div>
                </div>
                <br />
                <button class="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
                Login
                </button>
            </form>
            <br/>
            <nav class="level">
                <div class="level-item has-text-centered">
                <div>
                    <a href="#">Forgot Password?</a>
                </div>
                </div>
                <div class="level-item has-text-centered">
                <div>
                    <a href="#">Create an Account</a>
                </div>
                </div>
            </nav>
            </div>
        </div>
    </section>
    )
}

export default Login
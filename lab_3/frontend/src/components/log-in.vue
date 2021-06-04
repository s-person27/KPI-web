<template>
	<header class="header">
		<div class="container">
			<nav class="navbar navbar-expand-lg navbar-dark">
			<div class="container-fluid">
			    <a class="navbar-brand" href="index.html">G-News</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span class="navbar-toggler-icon"></span>
				</button>
			    <div class="collapse navbar-collapse" id="navbarSupportedContent">
			      	<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				        <li class="nav-item">
				          <a class="nav-link" aria-current="page" href="index.html">Главная</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="profile.html">Мой профиль</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link active" href="log-in.html">Вход</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="sign-up.html">Регистрация</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="about.html">О Нас</a>
				        </li>
				    </ul>
				    <form class="d-flex">
				        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
				        <button class="btn btn-light" type="submit">Найти</button>
				    </form>
			    </div>
			</div>
		</nav>
		</div>
	</header>		
	<section class="reg__login">
		<form>
			<div class="text-center">
				<h3 class="h3 mb-3 fw-normal">Вход</h3>
			    <label for="inputEmail" class="visually-hidden">Email</label>
			    <input type="email" id="inputEmail" class="form-control" placeholder="Адрес электронной почты" required autofocus>
			    <label for="inputPassword" class="visually-hidden">Пароль</label>
			    <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
			    <label class="remember-me">
			        <input type="checkbox" value="remember-me"> Запомнить меня
			    </label> 
			</div>
		    <button class="w-100 btn btn-lg btn-dark login__btn" type="submit">
		    	Войти
		    </button>
	    </form>
	</section>

	<footer class="footer">
		<div class="container">
			<div class="footer__wrapper">
				<nav class="nav justify-content-center">
	  				<ul class="nav ">
						<li class="nav-item">
					        <a class="nav-link footer-link" aria-current="page" href="index.html">Главная</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="profile.html">Мой профиль</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link active" href="log-in.html">Вход</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="sign-up.html">Регистрация</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="about.html">О Нас</a>
					    </li>
					</ul>
				</nav>
				<div class="footer__text">
					<p>
						Created by Danil Nikolaichuk
					</p>
				</div>
			</div>
		</div>		
	</footer>
</template>

<script>
import event from '../services/EventService.js'

export default {
    beforeRouteEnter(to, from, next) {
        from.meta.auth = false;
        to.meta.auth = from.meta.auth;
        next();
    },
    data() {
        return {
            count : 0,
            email : "",
            password : "",
            error : "",
        }
    },
    methods: {
        
        checkPasswordByRegularExpression(regularExpresion, errorDetails) {
            if (this.password.match(regularExpresion) == null) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid password (" + errorDetails + ')';
                this.count++;
            }
        },
        logIn () {
            let regularForEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            this.error = '';
            this.count = 0;
            if (regularForEmail.test(this.email) != true) {
                this.error += "invalid email";
                this.count++;
            }
            this.checkPasswordByRegularExpression(/[A-Z]/, "no uppercase");
            this.checkPasswordByRegularExpression(/[a-z]/, "no lowercase");
            this.checkPasswordByRegularExpression(/[0-9]/, "no num");
            if (this.password.length < 6) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid password (no secure)";
                this.count++;
            }
            // "dima@gmail.com", "Dima12345"
            event.getUser(this.email,this.password).then(response => {
                    if (response.data == true & this.count == 0) {
                        this.$route.meta.auth = true;
                    }
                })
                .catch(function () {
                    return null;
                });
        },
    },
}
</script>

<style>
.login__btn{
	margin-top: 15px;
}

.remember-me{
	margin-top: 8px;
}

.footer{
	margin-top: auto;
}
</style>


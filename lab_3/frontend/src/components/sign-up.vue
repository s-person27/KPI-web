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
				          <a class="nav-link" href="log-in.html">Вход</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link active" href="sign-up.html">Регистрация</a>
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
				<h3 class="h3 mb-3 fw-normal">Регистрация</h3>
			    <label for="inputEmail" class="visually-hidden">Email</label>
			    <input type="email" id="inputEmail" class="form-control" placeholder="Адрес электронной почты" required autofocus>
			    <label for="inputPassword" class="visually-hidden">Пароль</label>
			    <input type="password" id="inputPassword" class="form-control" placeholder="Пароль" required>
			    <label for="inputName" class="visually-hidden">Имя</label>
			    <input type="text" id="inputName" class="form-control" placeholder="Ваше Имя" required autofocus>
			</div>
			<div class="reg__form-date">
				<label class="reg__date" for="date">Дата рождения</label>
	            <input type="date" id="date" name="date"/>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
				  <label class="form-check-label" for="inlineRadio1">Мужчина</label>
				</div>
				<div class="form-check form-check-inline">
				  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
				  <label class="form-check-label" for="inlineRadio2">Женщина</label>
				</div>
			</div>
			
		    <button class="w-100 btn btn-lg btn-dark" type="submit" id="confirm">Зарегистрироваться</button>
	    </form>
		<div class="row mt-3">
			<div class="col-md-4"></div>
			<div class="error__block col-md-4">
				<div id="error" class="h4 text-center text-danger"></div>
			</div>
		</div>
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
					        <a class="nav-link footer-link" href="profil.html">Мой профиль</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="log-in.html">Вход</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link active" href="sign-up.html">Регистрация</a>
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
            confirmPassword : "",
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
            if (this.confirmPassword.match(regularExpresion) == null) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "invalid confirm password (" + errorDetails + ')';
                this.count++;
            }
        },
        signUp () {
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
            if (this.password != this.confirmPassword) {
                if (this.count > 0) {
                    this.error += " and "
                    this.count = 0;
                }
                this.error += "different password & confirm password";
                this.count++;
            }
            if (this.count == 0) {
                event.getSaveUser(this.email, this.password, this.name, "man");
                this.$route.meta.auth = true;
            }
        },
    },
}
</script>

<style>
.reg__login{
	width: 100%;
	max-width: 330px;
	padding: 15px;
	margin: auto;
}

.reg__form-date{
	margin: 15px 0;
}

.page{
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.reg__date{
	margin-bottom: 10px;
}
</style>


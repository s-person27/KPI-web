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
				          <a class="nav-link active" href="profile.html">Мой профиль</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="about.html">О Нас</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="sign-up.html">Выйти</a>
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
	<section class="profile">
		<div class="container">
			<div class="page-content page-container" id="page-content">
			    <div class="padding">
			        <div class="row container d-flex justify-content-center">
			            <div class="col-xl-6 col-md-12">
			                <div class="card user-card-full">
			                    <div class="row m-l-0 m-r-0">
			                        <div class="col-sm-4 bg-c-lite-green user-profile">
			                            <div class="card-block text-center text-white">
			                                <div class="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"> </div>
			                                <h6 class="f-w-600 profile__text">Your Name</h6>
			                            </div>
			                        </div>
			                        <div class="col-sm-8">
			                            <div class="card-block">
			                                <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Информация</h6>
			                                <div class="row">
			                                    <div class="col-sm-6">
			                                        <p class="m-b-10 f-w-600">Email</p>
			                                        <h6 class="text-muted f-w-400">rntng@gmail.com</h6>
			                                    </div>
			                                    <div class="col-sm-6">
			                                        <p class="m-b-10 f-w-600">Возраст</p>
			                                        <h6 class="text-muted f-w-400">20 лет</h6>
			                                    </div>
			                                </div>
			                                <div class="row">
			                                    <div class="col-sm-6">
			                                        <p class="m-b-10 f-w-600">Пол</p>
			                                        <h6 class="text-muted f-w-400">Мужской</h6>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
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
					        <a class="nav-link footer-link" href="profile.html">Мой профиль</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="about.html">О Нас</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="sign-up.html">Выйти</a>
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
export default {
    beforeRouteEnter(to, from, next) {
        if (from.meta.auth === true){
            next();
        }
        else {
            next('/log-in');
        }
        to.meta.auth = from.meta.auth;
    },
}
</script>

<style>
.profile{
	margin: auto 0;
}

.profile__text{
	color: #1A1E24;
}
</style>
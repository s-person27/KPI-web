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
				          <a class="nav-link" href="index.html">Мой профиль</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="log-in.html">Вход</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link" href="sign-up.html">Регистрация</a>
				        </li>
				        <li class="nav-item">
				          <a class="nav-link active" href="about.html">О Нас</a>
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
	<section class="about">
		<div class="container">
			<h1 class="title">Lorem ipsum dolor</h1>
			<p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Expedita, deleniti optio provident repellendus porro suscipit explicabo alias in, sint nihil, doloribus. Unde architecto voluptatum quia molestias, vero ea, ut cumque?
			Accusamus, suscipit? Asperiores ipsa possimus iure laboriosam repudiandae quam tenetur aut soluta iste doloribus reiciendis laborum quia cupiditate, mollitia sapiente harum quisquam quo necessitatibus praesentium sunt dolores, autem quas earum.
			Eius eos est, quas sapiente voluptatum optio dolores magni nemo accusantium necessitatibus sed quasi magnam molestias quo eum iusto totam placeat consequatur a nihil at aperiam! Sit, quia impedit sunt.
			Illo, qui. Enim quae voluptas, quo commodi accusantium nemo, dignissimos omnis eligendi quaerat. Enim necessitatibus, eius earum nulla veritatis voluptatem ipsa at, odit inventore architecto, placeat, perferendis molestias pariatur unde.
			Nihil cupiditate recusandae unde deserunt eos saepe atque natus optio illum blanditiis dolore velit, sit possimus? Et eius accusantium ut repudiandae sunt, voluptate deleniti assumenda dolorum incidunt laboriosam nisi ipsum.
			Soluta labore officia, dolorum animi consequuntur cumque cupiditate repellat, consectetur fugit, necessitatibus accusantium nihil? Eum voluptates accusantium aspernatur veritatis voluptas omnis nostrum fugiat quam, natus maiores nam repellendus. Magnam, expedita.</p>
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
					        <a class="nav-link footer-link" href="log-in.html">Вход</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link" href="sign-up.html">Регистрация</a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link footer-link active" href="about.html">О Нас</a>
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
</style>
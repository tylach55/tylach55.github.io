class Header extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.innerHTML =
		`

		<head>
			<meta charset="utf-8">
			<meta name = "viewport" content="width=device-width, initial-scale=1.0">
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
  			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"> </script>

			<style>
				.imgc{
					display: block;
		  			margin-left: auto;
		  			margin-right: auto;
				}
			</style>

		</head>
		<body>

		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<div class="container-fluid">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class = "nav-link"href="index.html">home</a>
					</li>
					<li class="nav-item">
						<a class = "nav-link"href="education.html">education</a>
					</li>
					<li class="nav-item">
						<a class = "nav-link"href="experience.html">experience</a>
					</li>
					<li class="nav-item">
						<a class = "nav-link"href="hobbies.html">hobbies</a>
					</li>
					<li class="nav-item">
						<a class = "nav-link"href="service.html">service</a>
					</li>
			
				</ul>
			</div>
		</nav>
		`;

	}

}




customElements.define('header-component', Header)
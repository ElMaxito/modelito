<script lang="ts">
	// Page component script
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
	<!-- Hero Section -->
	<div class="hero min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold text-gray-800 mb-5">
					Welcome to Modelito
				</h1>
				<p class="py-6 text-gray-600 text-lg">
					A modern SvelteKit application built with Tailwind CSS and DaisyUI.
					Experience the power of reactive web development.
				</p>
				<div class="flex gap-4 justify-center">
					<button class="btn btn-primary btn-lg">
						Get Started
					</button>
					<button class="btn btn-outline btn-lg">
						Learn More
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div class="container mx-auto px-4 py-16">
		<div class="text-center mb-12">
			<h2 class="text-4xl font-bold text-gray-800 mb-4">
				Why Choose Modelito?
			</h2>
			<p class="text-gray-600 text-xl max-w-2xl mx-auto">
				Built with modern technologies for exceptional performance and developer experience.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Feature Card 1 -->
			<div class="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
				<div class="card-body items-center text-center">
					<div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						</svg>
					</div>
					<h3 class="card-title text-gray-800">Lightning Fast</h3>
					<p class="text-gray-600">Optimized performance with Svelte's reactive system and modern bundling.</p>
				</div>
			</div>

			<!-- Feature Card 2 -->
			<div class="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
				<div class="card-body items-center text-center">
					<div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<h3 class="card-title text-gray-800">Type Safe</h3>
					<p class="text-gray-600">Full TypeScript support ensures reliable and maintainable code.</p>
				</div>
			</div>

			<!-- Feature Card 3 -->
			<div class="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
				<div class="card-body items-center text-center">
					<div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4">
						<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
						</svg>
					</div>
					<h3 class="card-title text-gray-800">Beautiful UI</h3>
					<p class="text-gray-600">Stunning design with DaisyUI components and smooth animations.</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<footer class="footer footer-center bg-gray-800 text-gray-300 p-10">
		<div>
			<p class="font-semibold text-lg text-white">
				Modelito
			</p>
			<p>Copyright © 2024 - All right reserved</p>
		</div>
	</footer>
</div>

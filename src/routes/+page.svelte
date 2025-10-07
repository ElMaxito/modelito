<script lang="ts">
	import { Zap, Shield, Sparkles, ArrowRight, Github, Twitter, Linkedin } from 'lucide-svelte';
	import { Button, Card, IconBox, FeatureCard, Container } from '$shared/components';
</script>

<div class="min-h-screen animated-gradient text-white overflow-x-hidden">
	<!-- Navbar -->
	<nav class="absolute top-0 left-0 right-0 z-40 pt-8 px-4">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<div class="flex items-center space-x-3">
				<Sparkles class="w-6 h-6 sm:w-7 sm:h-7 text-white" />
				<h1 class="text-xl sm:text-2xl font-bold gradient-text-accent">Modelito</h1>
			</div>
			<div class="flex items-center gap-3 sm:gap-4">
				<Button variant="ghost" size="sm" href="/login">Login</Button>
				<Button variant="primary" size="sm" href="/signup" glow>Get Started</Button>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<div class="relative min-h-screen flex items-center justify-center px-4">
		<!-- Floating orbs for effect -->
		<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
		<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style="animation-delay: 2s;"></div>
		
		<div class="relative z-10 text-center max-w-5xl mx-auto">
			<h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
				Build the
				<span class="gradient-text"> Next Generation</span>
				<br />of Applications
			</h1>
			
			<p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
				Experience the power of modern web development with our cutting-edge platform.
				Fast, secure, and beautifully designed.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
				<Button variant="primary" size="lg" href="/signup" glow class="group px-8">
					Start Building Free
					<ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
				</Button>
				<Button variant="outline" size="lg" href="/login">View Demo</Button>
			</div>

			<!-- Stats -->
			<div class="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mt-16">
				<Card hover rounded="2xl" padding="sm">
					<div class="text-2xl sm:text-4xl font-bold gradient-text-accent">99.9%</div>
					<div class="text-xs sm:text-sm text-gray-400 mt-2">Uptime</div>
				</Card>
				<Card hover rounded="2xl" padding="sm">
					<div class="text-2xl sm:text-4xl font-bold gradient-text-accent">{'<'} 100ms</div>
					<div class="text-xs sm:text-sm text-gray-400 mt-2">Response Time</div>
				</Card>
				<Card hover rounded="2xl" padding="sm">
					<div class="text-2xl sm:text-4xl font-bold gradient-text-accent">10k+</div>
					<div class="text-xs sm:text-sm text-gray-400 mt-2">Active Users</div>
				</Card>
			</div>
		</div>
	</div>

	<!-- Features Section -->
	<div class="relative py-20 sm:py-32 px-4">
		<Container>
			<div class="text-center mb-16">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
					Why Developers <span class="gradient-text">Love Modelito</span>
				</h2>
				<p class="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
					Built with modern technologies and best practices to give you the ultimate developer experience.
				</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
				<FeatureCard 
					icon={Zap} 
					title="Lightning Fast"
					description="Optimized performance with Svelte's reactive system and modern bundling. Experience instant load times and smooth interactions."
					variant="primary"
				/>
				<FeatureCard 
					icon={Shield} 
					title="Enterprise Security"
					description="Bank-grade security with full TypeScript support. Keep your data safe with industry-leading encryption and authentication."
					variant="secondary"
				/>
				<FeatureCard 
					icon={Sparkles} 
					title="Beautiful UI"
					description="Stunning, modern design with glassmorphism effects and smooth animations that make your app stand out from the crowd."
					variant="accent"
				/>
			</div>
		</Container>
	</div>

	<!-- CTA Section -->
	<div class="relative py-20 sm:py-32 px-4">
		<Container size="md">
			<Card hover padding="lg" class="text-center">
				<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
					Ready to Build Something <span class="gradient-text-accent">Amazing?</span>
				</h2>
				<p class="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
					Join thousands of developers who are already building the future with Modelito.
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<Button variant="primary" size="lg" href="/signup" glow class="px-8">
						Start Free Trial
					</Button>
					<Button variant="outline" size="lg" href="/pricing">
						View Pricing
					</Button>
				</div>
			</Card>
		</Container>
	</div>
	<footer class="relative glass-effect mt-20 border-t border-white/10">
		<Container size="xl">
			<div class="py-12">
				<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					<div class="col-span-1 md:col-span-2">
						<div class="flex items-center space-x-2 mb-4">
							<IconBox size="sm" rounded="lg">
								<Sparkles class="w-5 h-5 text-white" />
							</IconBox>
							<h3 class="text-xl font-bold gradient-text-accent">Modelito</h3>
						</div>
						<p class="text-gray-400 max-w-md">
							Building the future of web applications, one line of code at a time.
						</p>
					</div>
				<div>
					<h4 class="font-semibold mb-4">Product</h4>
					<ul class="space-y-2 text-gray-400">
						<li><button type="button" class="hover:text-primary">Features</button></li>
						<li><button type="button" class="hover:text-primary">Pricing</button></li>
						<li><button type="button" class="hover:text-primary">Documentation</button></li>
					</ul>
				</div>
				<div>
					<h4 class="font-semibold mb-4">Company</h4>
					<ul class="space-y-2 text-gray-400">
						<li><button type="button" class="hover:text-primary">About</button></li>
						<li><button type="button" class="hover:text-primary">Blog</button></li>
						<li><button type="button" class="hover:text-primary">Contact</button></li>
					</ul>
				</div>
			</div>
			<div class="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
				<p class="text-gray-400 text-sm">
					© 2024 Modelito. All rights reserved.
				</p>
				<div class="flex gap-4">
					<button type="button" class="text-gray-400 hover:text-primary">
						<Github class="w-5 h-5" />
					</button>
					<button type="button" class="text-gray-400 hover:text-primary">
						<Twitter class="w-5 h-5" />
					</button>
					<button type="button" class="text-gray-400 hover:text-primary">
						<Linkedin class="w-5 h-5" />
					</button>
				</div>
			</div>
			</div>
		</Container>
	</footer>
</div>
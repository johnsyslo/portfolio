<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
  	<title>John Syslo</title>
	<meta name="description" content="A guy who tinkers in just about everything." />
	
	<!-- Open Graph -->
	<meta property="og:title" content="John Syslo" />
	<meta property="og:description" content="A guy who tinkers in just about everything." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://johnsyslo.com" />
	<meta property="og:image" content="https://johnsyslo.com/og-image.png" />
	<meta property="og:image:alt" content="John Syslo portfolio" />
	<meta property="og:site_name" content="John Syslo" />
	
	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="John Syslo" />
	<meta name="twitter:description" content="" />
	<meta name="twitter:image" content="https://johnsyslo.com/og-image.png" />
	
	<!-- Additional Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#18181b" />
	<meta name="robots" content="index, follow" />
	
	<link rel="icon" href={favicon} />
	<link rel="canonical" href="https://johnsyslo.com" />
</svelte:head>

{@render children()}

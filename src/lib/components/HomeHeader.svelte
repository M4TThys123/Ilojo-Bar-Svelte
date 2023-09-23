<script>
import ScrollButton from "$lib/components/ScrollButton.svelte";
</script>

<section>
	<div class="para-container">
		<h2>Welcome to the <br /> Stories of Ilojo Bar</h2>
		<p>Read exciting stories about Ilojo Bar</p>
	</div>

	<ScrollButton></ScrollButton>
</section>

<style>
	section {
		position: absolute;
		z-index: 1;
		padding-top: 7rem;
		padding-bottom: 3rem;
		left: 50%;
		transform: translate(-50%);
		text-align: center;
		max-width: 45rem;
		color: white;

		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	h2 {
		font-size: 2.5rem;
		font-weight: bold;
	}

	p {
		font-size: 1.5rem;
	}
	/* button scrol down */
	.moving-button {
	align-items: center;
	position: relative;
	width: 10em;
	margin-top: 60%;
	animation: moveUp 2s infinite;
	background-color: transparent;
	border: none;
}
	@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
.moving-button svg{
	width: 5em;
}
.btn-text{
	font-size: 1.5rem;
	font-weight: 400;
	color: white;
}

@media (max-width: 55rem) {
		h2 {
			font-size: 2rem;
			white-space: nowrap;
			line-height: 2.5rem;
		}
		p {
			font-size: 1.2rem;
			line-height: 1.5rem;
		}
	}
</style>

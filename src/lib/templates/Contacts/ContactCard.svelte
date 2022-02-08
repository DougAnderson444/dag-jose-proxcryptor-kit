<article class="contact-card">
	<h2>
		<slot name="handle">
			<span class="missing">Unknown handle</span>
		</slot>
	</h2>

	<div class="address">
		<slot name="publicKey">
			<span class="missing">Unknown publicKey</span>
		</slot>
	</div>

	<div class="email">
		<slot name="latest">
			<span class="missing">Unknown latest value</span>
		</slot>
	</div>
</article>

<style>
	.contact-card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		background: lemonchiffon;
		border-radius: 3px;
	}

	h2 {
		font-weight: 600;
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #008000;
	}

	.address,
	.email {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}

	/* .address {
		background-image: url(/tutorial/icons/map-marker.svg);
	}
	.email {
		background-image: url(/tutorial/icons/email.svg);
	} */
	.missing {
		color: #999;
	}
</style>

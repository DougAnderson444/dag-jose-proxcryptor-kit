<script>
	import { onMount } from 'svelte';
	import ShowPost from './ShowPost.svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	export let ipfsNode;
	export let rootCID;
	export let tag = '';

	const textDecoder = new TextDecoder();

	let postArr;
	let getTags, catTags;

	onMount(async () => {
		// console.log({ rootCID });

		if (ipfsNode && rootCID) {
			getTags = async () => {
				const root = await ipfsNode.dag.get(rootCID);
				console.log({ root: root.value });

				const promises = Object.entries(root.value).map(async ([key, val]) => {
					if (key === 'prev' || !val) return null;
					if (tag && key !== tag) return null; // filter on tag name
					// console.log({ key }, { val });
					let resolved = await ipfsNode.dag.resolve(`${rootCID}/${key}`);
					let cid = resolved.cid.toString();
					let fields = await ipfsNode.dag.get(val);
					return {
						cid,
						fields
					};
				});

				const result = await Promise.all(promises);
				const res = result.filter((r) => r).map((r) => ({ value: r.fields.value, cid: r.cid }));
				postArr = res.sort(function (x, y) {
					return y.value.timestamp - x.value.timestamp;
				});
			};
		}
	});

	$: getTags && rootCID && getTags();
</script>

{#if postArr}
	{#each postArr as post (post.value.timestamp)}
		<div class="view" transition:scale|local={{ start: 0.7 }} animate:flip={{ duration: 200 }}>
			<ShowPost post={post.value}>
				<!-- pass post data package back up to parent so it can be decrypted -->
				<slot data={post.value} />
			</ShowPost>
		</div>
	{/each}
{/if}

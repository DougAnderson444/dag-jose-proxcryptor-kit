<script>
	/**
	 * Loads, saves, updates, and displays the latest rootCID
	 */
	import { onMount } from 'svelte';
	import { CID } from 'multiformats/cid';
	// import getTagNodes from utils
	import GetTags from './templates/Contacts/GetTags.svelte';

	// allows users to pass ina  rootCID as propoerty
	export let rootCID = null;
	export let ipfsNode;

	let tagNodes;
	let handleRootCIDUpdate;
	let loaded; // let this Component check for saved previous rootCID before loading anything in the slot
	let selectedTag = 'Profile'; // TODO: Better default / first tag system

	const ROOT_CID = '__ROOT_CID__'; // Database key

	let start = Date.now();

	async function loadIPFS() {
		// setup IPFS
		const IPFSmodule = await import('../modules/ipfs-core-0.14.0/ipfs-core.js');
		const IPFS = IPFSmodule.default;

		if (globalThis.ipfsNode) {
			return;
		}
		console.log('Creating IPFS node...');

		ipfsNode = await IPFS.create();
		globalThis.ipfsNode = ipfsNode;

		const identity = await globalThis.ipfsNode.id();
		let nodeId = identity.id;

		// console.info('NodeId', nodeId, `Loaded in ${(Date.now() - start) / 1000}s`);
	}

	onMount(async () => {
		await loadIPFS();

		const { ImmortalDB } = await import('immortal-db');

		if (!rootCID) {
			const res = await ImmortalDB.get(ROOT_CID);

			if (res) {
				rootCID = CID.asCID(res) || CID.parse(res);
				console.log('rootCID got:', { rootCID });
			}
		}

		handleRootCIDUpdate = async () => {
			// refresh the tag nodes
			ipfsNode.dag.get(rootCID).then((root) => {
				tagNodes = Object.entries(root.value);
				// select the first tag that is not 'prev'
				selectedTag = tagNodes.find(([tag, _]) => tag !== 'prev')[0]; // default to first tag
				console.log({ selectedTag });
			});

			console.log('Saving rootCID', rootCID.toString());
			await ImmortalDB.set(ROOT_CID, rootCID.toString());
		};

		if (rootCID && ipfsNode) getTagNodes();

		function getTagNodes() {}

		loaded = true;
	});

	$: if (rootCID && ipfsNode) {
		handleRootCIDUpdate();
	}
</script>

<div>
	RootCID: <a href="https://explore.ipld.io/#/explore/{rootCID}" target="_blank"> {rootCID}</a>

	<!-- 
    <GetTags {rootCID} let:tagNode>
		Click to view: {tagNode.tag}
	</GetTags> 
    -->
	{#if tagNodes}
		<div class="m-2 p-2 border-slate-300 bg-slate-200 shadow-sm">
			<ul>
				{#each tagNodes as tagNode}
					<li>
						<div on:click={(e) => (selectedTag = tagNode[0])}>
							{tagNode[0]}
						</div>
						:
						<a href="https://explore.ipld.io/#/explore/{tagNode[1]}" target="_blank">{tagNode[1]}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

{#if loaded}
	selectedTag: {selectedTag}
	<!-- show the selected tag in the slot  -->
	<slot tag={selectedTag} />
{/if}

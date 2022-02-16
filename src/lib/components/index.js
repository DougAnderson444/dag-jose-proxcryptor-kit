import ShowContacts from '$lib/templates/Contacts/ShowContacts.svelte';
import Profile from '$lib/templates/Basic/Profile.svelte';

const CONTACTS = 'Show Contacts';
const PROFILE = 'Profile';

export const Components = {
	[PROFILE]: { name: PROFILE, component: Profile, tag: PROFILE },
	[CONTACTS]: { name: CONTACTS, component: ShowContacts, tag: CONTACTS }
};

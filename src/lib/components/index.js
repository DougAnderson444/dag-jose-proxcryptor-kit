import Contacts from '$lib/templates/Contacts/Contacts.svelte';
import Profile from '$lib/templates/Basic/Profile.svelte';

const CONTACTS = 'Contacts';
const PROFILE = 'Profile';

export const Components = {
	[CONTACTS]: { name: CONTACTS, component: Contacts, tag: CONTACTS },
	[PROFILE]: { name: PROFILE, component: Profile, tag: PROFILE }
};

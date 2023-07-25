//schema deals.ts
export default {
	name: 'deals',
	type: 'document',
	title: 'Deals',
	fields: [
	{
	name: 'name',
	type: 'string',
	title: 'Name'
	},
	{
	name: 'price',
	type: 'string',
	title: 'Price'
	},
	{
	name: 'image',
	type: 'image',
	title: 'Image'
	}
		]
	}

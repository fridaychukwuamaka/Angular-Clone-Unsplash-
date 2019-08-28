import { Image } from "./image.model"

export class ImageService{

	image = [
		{
			image: 'https://images.unsplash.com/photo-1542006753314-011db7ae2412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'nature'
		},
		{
			image: 'https://images.unsplash.com/photo-1558907530-a0827a86fb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'nature'
		},
		{
			image: 'https://images.unsplash.com/photo-1558907530-a0827a86fb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'fine',
			category: 'sport'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'remake',
			category: 'food'
		},
		{
			image: 'https://images.unsplash.com/photo-1558961166-696fa4847ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'nature'
		},
		{
			image: 'https://images.unsplash.com/photo-1559249704-8f937e3338fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'food'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'fine',
			category: 'tech'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'remake',
			category: 'sport'
		},
		{
			image: 'https://images.unsplash.com/photo-1559249704-8f937e3338fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'tech'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'fine',
			category: 'animal'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'remake',
			category: 'animal'
		},
		{
			image: 'https://images.unsplash.com/photo-1562362258-46de36d55cef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'tech'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'fine',
			category: 'animal'
		},
		{
			image: 'https://images.unsplash.com/photo-1542006753314-011db7ae2412?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'nature'
		},
		{
			image: 'https://images.unsplash.com/photo-1558907530-a0827a86fb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'remake',
			category: 'animal'
		},
		{
			image: 'https://images.unsplash.com/photo-1561134963-6e154db68426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'nice',
			category: 'tech'
		},
		{
			image: 'https://images.unsplash.com/photo-1561444477-8e04418dc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'fine',
			category: 'animal'
		},
		{
			image: 'https://images.unsplash.com/photo-1558907530-a0827a86fb4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
			title: 'remake',
			category: 'animal'
		}
		];

	getImages(){
		return this.image
	}

	filtImage(filt){
		return (this.image.filter(myfilt => myfilt.category === filt));
	};

}
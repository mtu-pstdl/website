/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

export type Member = {
	firstName: string;
	lastName: string;
	email: string;
	profile?: string;
	bio?: string;
}

export type MemberCollection = {
	title: string;
	detail: boolean;
	members: Member[];
}

export const members: MemberCollection[] = [
	{
		title: "Director",
		detail: true,
		members: [
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			}
		]
	},
	{
		title: "PhD Students",
		detail: true,
		members: [
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			}
		]
	},
	{
		title: "Masters Students",
		detail: true,
		members: [
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			}
		]
	},
	{
		title: "Undergraduate Students",
		detail: false,
		members: [
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			},
			{
				firstName: "First",
				lastName: "Last",
				email: "user@mtu.edu",
				profile: "https://placeimg.com/480/480/people",
				bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Consequat nisl vel pretium lectus quam id. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Sed id semper risus in hendrerit gravida. Fusce ut placerat orci nulla. Maecenas pharetra convallis posuere morbi. Nunc lobortis mattis aliquam faucibus purus. Sed id semper risus in hendrerit gravida rutrum quisque non. Commodo ullamcorper a lacus vestibulum sed. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Donec massa sapien faucibus et molestie ac feugiat. A arcu cursus vitae congue. Diam vel quam elementum pulvinar etiam non. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Neque ornare aenean euismod elementum nisi quis eleifend quam."
			}
		]
	}
];
class LpHandler {
	constructor() {
		this.init();
		this.handleDOM();
		this.handleEvents();
		this.displayPosts();
	}

	/**
	 * Declare global variables
	 */
	init() {}

	/**
	 * Handle DOM queries
	 */
	handleDOM() {
		this.postsContainer = document.querySelector('.posts-container');
		this.morePostsContainer = document.querySelector('.more-posts');
		this.postsButton = document.querySelector('.btn');
	}

	/**
	 * Listen for events
	 */
	handleEvents() {
		// Used for functions closures
		const self = this;
		let elements = [];
		// Next reasons
		this.postsButton.onclick = async function () {
			console.log(self.postsButton);
			try {
				const postsURL = 'https://jsonplaceholder.typicode.com/posts';
				const postsResult = await fetch(postsURL);
				if (!postsResult.ok) {
					throw new Error('You have a server problem');
				}
				let startInterval = 3;
				let endInterval = 8;
				const posts = await postsResult.json();
				posts.map((post, index) => {
					if (index > startInterval && index < endInterval) {
						elements.push(post);
					}
				});

				startInterval += 4;
				endInterval += 4;

				self.morePostsContainer.innerHTML = '';
				elements.map((element) => {
					self.morePostsContainer.innerHTML += `
    	<div class="card">
         	<div class="card-body">
        		<div class="posts">
           	 	<h4 class="post-title">${element.title}</h4>
             	<p class="post-body">${element.body}</p>
             	<small>Anonymous</small>
         			</div>
        			</div>
        			</div>
        
     `;
				});
				self.postsButton.style.display = 'none';
			} catch (err) {
				console.log(err);
			}
		};
	}

	/**
	 * Functions
	 */

	// First reasons
	displayPosts = async function () {
		try {
			const postsURL = 'https://jsonplaceholder.typicode.com/posts';
			const postsResult = await fetch(postsURL);
			if (!postsResult.ok) {
				throw new Error('You have a server problem');
			}
			const posts = await postsResult.json();
			posts
				.map((post, index) => {
					if (index < 4) {
						this.postsContainer.innerHTML += `
     
              <div class="card">
              <div class="card-body">
                <div class="posts">
                    <h4 class="post-title">${post.title}</h4>
                    <p class="post-body">${post.body}</p>
                    <small>Anonymous</small>
                    
                </div>
            
              </div>
              </div>
              
             
          `;
					}
				})
				.join('');
		} catch (err) {
			console.log(err);
		}
	};
}

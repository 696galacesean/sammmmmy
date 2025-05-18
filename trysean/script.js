document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const likeBtn = post.querySelector('.post-actions img:nth-child(1)');
    let liked = false;

    likeBtn.addEventListener('click', () => {
      liked = !liked;
      likeBtn.style.filter = liked ? 'invert(36%) sepia(100%) saturate(600%) hue-rotate(330deg)' : 'none';
    });

    const commentBtn = post.querySelector('.post-actions img:nth-child(2)');
    commentBtn.addEventListener('click', () => {
      alert('Comment feature is coming soon!');
    });

    const shareBtn = post.querySelector('.post-actions img:nth-child(3)');
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('https://yourpostlink.com')
        .then(() => alert('Post link copied to clipboard!'))
        .catch(() => alert('Failed to copy link.'));
    });
  });
});

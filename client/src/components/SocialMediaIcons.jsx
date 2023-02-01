

const SocialMediaIcons = () => {
  return (
    <div
        className="flex justify-center md:justify-start my-10 gap-7"
    >
        {/* Target="_blank" opens link in new tab. */}
        {/* Rel="nonreferrer" makes sure _blank doesn't trigger security issues in older browser.  */}
        <a 
            className ="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="linkedin-link" src="../assets/linkedin.svg" />
        </a>
        <a 
            className ="hover:opacity-50 transition duration-500"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="twittter-link" src="../assets/twitter.svg" />
        </a>
        <a 
            className ="hover:opacity-50 transition duration-500"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
        >
            <img alt="github-link" src="../assets/linkedin.svg" />
        </a>
    </div>
  );
};

export default SocialMediaIcons;
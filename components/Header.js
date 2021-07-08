import headerStyles from '../styles/Header.module.css';

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>
				<span>William</span> Plunkett
			</h1>
			<p className={headerStyles.description}>See what random things I try next</p>
		</div>
	);
};

export default Header;

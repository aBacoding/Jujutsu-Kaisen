import './Hero.scss'

const Hero: React.FC = () => {
	return (
		<section className='hero'>
			<div className='hero__container container'>
				<div className='hero__content'>
					<div className='hero__left'>
						<h1 className='hero__title'>Jujutsu Kaisen</h1>
						<p className='hero__description'>
							Popular Japanese anime and manga series written and illustrated
							by&nbsp;<strong>Gege Akutami</strong>. The story follows&nbsp;
							<strong>Yuji Itadori</strong>, a high school student with
							extraordinary physical abilities who becomes involved in the world
							of Jujutsu Sorcery after he eats a cursed object — the finger of
							the powerful Curse, <strong>Ryomen Sukuna</strong>. As a result,
							Yuji gains the ability to control cursed energy, but also becomes
							the host for Sukuna. He joins the&nbsp;
							<strong>Tokyo Metropolitan Magic Technical College</strong> under
							the guidance of&nbsp;
							<strong>Satoru Gojo</strong>, a powerful Jujutsu Sorcerer, to
							combat Curses and learn how to control his newfound powers. The
							series combines intense action, supernatural elements, and a deep
							narrative exploring themes of life, death, and the consequences of
							power.
						</p>
					</div>
					<div className='hero__right'>
						<img src='../../../image/sukuna_hero.png' alt='Ryomen Sukuna' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero

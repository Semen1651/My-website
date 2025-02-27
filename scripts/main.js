window.addEventListener('load', () => {
	window.scrollTo(0, 0)
})

const translations = {
	en: {
		greetingName: 'Semyon Taranenko',
		moreLink: 'ABOUT ME',
		aboutMeInfo:
			'Hi, I was born on December 9, 2006, and from early childhood, I had a deep interest in everything related to electronics and the internet. Smartphones, tablets, computers, and laptops—although all of this was intuitively understandable to me and even somewhat ordinary, it still brought me great joy and an endless curiosity for the field of information technology. This passion eventually grew into learning programming, which became my main hobby, and soon, as I realized, my desired profession.',
		mySkillsTitle: 'MY SKILLS',
	},

	pl: {
		greetingName: 'Siemion Taranenko',
		moreLink: 'O MNIE',
		aboutMeInfo:
			'Cześć, urodziłem się 9 grudnia 2006 roku i od najwcześniejszego dzieciństwa miałem głębokie zainteresowanie wszystkim, co związane z elektroniką i internetem. Smartfony, tablety, komputery, laptopy — choć wszystko to było dla mnie intuicyjnie zrozumiałe, a nawet nieco codzienne, nadal sprawiało mi ogromną przyjemność i niekończącą się ciekawość w zakresie technologii informacyjnych. Ta pasja ostatecznie przerodziła się w naukę programowania, które stało się moim głównym hobby, a wkrótce, jak zrozumiałem, także wymarzoną pracą.',
		mySkillsTitle: 'MOJE UMIEJĘTNOŚCI',
	},
	ru: {
		greetingName: 'Семён Тараненко',
		moreLink: 'ОБО МНЕ',
		aboutMeInfo:
			'Привет, я родился 9 декабря 2006 года, и с самого раннего детства у меня была глубокая заинтересованность ко всему что связано с электроникой и интернетом. Смартфоны, планшеты, компьютеры, ноутбуки — хотя это всё и было для меня интуитивно понятным и даже немного обыденным, всё равно продолжало приносить мне огромное удовольствие и нескончаемое любопытство к сфере информационных технологий. Эта страсть в конечном итоге и переросла в изучение программирования, которое и стало моим основным увлечением, а вскоре как я понял, желаемой работой.',
		mySkillsTitle: 'МОИ НАВЫКИ',
	},
}

let typingTimeout
let isTyping = false
let aboutMeText
const printElement = document.querySelector('.print')

function print(element, text, speed, callback) {
	let i = 0
	element.textContent = ''
	isTyping = true

	function type() {
		if (i < text.length) {
			element.textContent += text.charAt(i)
			i++
			typingTimeout = setTimeout(type, speed)
		} else {
			isTyping = false
			if (callback) setTimeout(callback, 5000)
		}
	}

	clearTimeout(typingTimeout)
	type()
}

function changeLanguage(lang) {
	clearTimeout(typingTimeout)

	printElement.textContent = ''
	document.querySelector('.greeting-name').textContent =
		translations[lang].greetingName
	document.querySelector('.aboutMe-link').textContent =
		translations[lang].moreLink
	aboutMeText = translations[lang].aboutMeInfo
	document.querySelector('.mySkills-title').textContent =
		translations[lang].mySkillsTitle

	localStorage.setItem('language', lang)
}

document.addEventListener('DOMContentLoaded', () => {
	let savedLanguage = localStorage.getItem('language') || 'en'
	changeLanguage(savedLanguage)
})

document
	.querySelector('.aboutMe-link')
	.addEventListener('click', function (def) {
		def.preventDefault()

		document.querySelector('#aboutMe_section').scrollIntoView({
			block: 'end',
			behavior: 'smooth',
		})

		if (printElement.textContent === aboutMeText) {
			return
		}

		print(printElement, aboutMeText, 100, () => {
			document.querySelector('#mySkills_section').scrollIntoView({
				block: 'end',
				behavior: 'smooth',
			})
		})
	})

let skillIndex = 0
const skillIconsList = [
	'/icons/HTML5.svg',
	'/icons/CSS3.svg',
	'/icons/Sass.svg',
	'/icons/JavaScript.svg',
	'/icons/TypeScript.svg',
	'/icons/NodeJs.svg',
	'/icons/npm.svg',
	'/icons/Git.svg',
	'/icons/Gulp.svg',
	'/icons/Vite.svg',
	'/icons/webpack.svg',
	'/icons/React.svg',
	'/icons/nextJs.svg',
	'/icons/Docker.svg',
]

const skillIcon = document.querySelector('.skill-icon')
const arrLeftButton = document.querySelector('.arrLeft-button')
const arrRightButton = document.querySelector('.arrRight-button')

function switchIcon() {
	if (skillIcon) {
		skillIcon.src = skillIconsList[skillIndex]
	}
}
if (arrLeftButton && arrRightButton) {
	arrLeftButton.addEventListener('click', () => {
		skillIndex =
			(skillIndex - 1 + skillIconsList.length) % skillIconsList.length
		switchIcon()
	})

	arrRightButton.addEventListener('click', () => {
		skillIndex = (skillIndex + 1) % skillIconsList.length
		switchIcon()
	})
}
const description = {
  math: "Во время обучения в бакалавриате углубленно изучаются классические разделы математики, составляющие фундамент современного естественно-научного знания (математический анализ, дифференциальные уравнения, алгебра, геометрия, топология) а также новейшие научные результаты в области качественной теории динамических систем, алгебраической топологии, геометрии и функционального анализа, определяющие современные направления развития математики.",
  mathcomp: "Идеальный выбор для тех, кто увлекается информационными технологиями, но еще не определился с профессией. Студенты получают обширную математическую и IT-подготовку. Изучают фундаментальную и компьютерную алгебру, математический анализ, компьютерную геометрию и геометрическое моделирование, стохастический анализ, дискретную математику и математическую логику, математическое моделирование, базы данных и операционные системы. В зависимости от профиля практические занятия ориентированы либо на аналитическую работу, либо на программирование.",
  teacher: "В новых условиях двухуровневой системы факультет математики и компьютерных наук будет реализовывать образовательную программу интегрированной подготовки учителей информатики и математики в рамках бакалавриата по направлению «Педагогическое образование» с одновременным освоением профилей «Информатика» и «Математика» с приоритетным модулем «Информатика». Т.е. как и раньше наши выпускники получат право преподавать и информатику, и математику. При этом они получают квалификацию «бакалавр».",
  fundMathMeh: "Основная деятельность выпускника программы — математическое моделирование разнообразных физических процессов во твердых, жидких, газообразных телах и в плазме. Студенты в ходе обучения изучают математику и механику на  фундаментальном уровне. Их учат не столько использовать уже имеющиеся теории и практические методы, сколько разрабатывать новые. Этого требует сама сфера — данные могут устареть за несколько лет, пока студент еще не закончил вуз.",
};

const popup = document.querySelector('.popup')
const popupText = document.querySelector('.popup__text')
const popupClose = document.querySelector('.popup__close')
const mathDirection = document.querySelector('.math')
const mathCompDirection = document.querySelector('.mathcomp')
const mathTeacher = document.querySelector('.teacher__math')
const fundMath = document.querySelector('.fund__math')

popupClose.addEventListener('click', () => {
  popup.classList.remove('popup_opened')
})


mathDirection.addEventListener('click', () => {
  popup.classList.add('popup_opened')
  popupText.textContent = description.math
})

mathCompDirection.addEventListener('click', () => {
  popup.classList.add('popup_opened')
  popupText.textContent = description.mathcomp
})

mathTeacher.addEventListener('click', () => {
  popup.classList.add('popup_opened')
  popupText.textContent = description.teacher
})

fundMath.addEventListener('click', () => {
  popup.classList.add('popup_opened')
  popupText.textContent = description.fundMathMeh
})
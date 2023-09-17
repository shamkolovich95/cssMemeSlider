import './styles/style.scss';

const btns: HTMLButtonElement[] = Array.from(document.querySelectorAll('button'));
const slider = document.querySelector('.slider-container') as HTMLDivElement;

const moveSliderLeft = new KeyframeEffect(
    slider,
    [
        {
            transform: `translateX(0%)`,
        },
        {
            transform: `translateX(0%)`,
        },
    ],
    {
        duration: 2000,
        fill: 'forwards',
    }
);

const effect = new Animation(moveSliderLeft, document.timeline);

const moveSlider = (percent: string) => {
    console.log(percent);
    moveSliderLeft.setKeyframes([{ transform: `translateX(0%)` }, { transform: `translateX(${percent}%)` }]);
    effect.play();
};

btns.forEach((btn) => {
    const percent = btn.dataset.percent as string;
    btn.addEventListener('click', () => moveSlider(percent));
});

const aboutYouButtons = ['Life', 'Education', 'Experience'];
const text = [
    'Life is an amazing adventure. Make sure you are surrounded by people you love and appreciate, don’t be afraid to leave toxic relationships behind and make mistakes, because they will help you to become the best version of yourself.',
    'Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life. Remember that fear always lurks behind perfectionism.',
    'A successful website does three things: it attracts the right kinds of visitors, guides them to the main services or product you offer, collect Contact details for future ongoing relation.',
];

let selectedButtonAboutYou = 0;

const animateElement = (element, index) => {
    element.animate(
        [
            {
                transform: `translateX(${
                    index >= selectedButtonAboutYou ? '-' : '+'
                }100px)`,
            },
            { transform: 'translateX(0px)' },
        ],
        {
            duration: 300,
        }
    );
};

const changeImage = (index) => {
    const image = document.getElementById('about-me-image');
    image.src = `./assets/images/about-you/${aboutYouButtons[
        index
    ].toLocaleLowerCase()}.PNG`;
    animateElement(image, index);
};

const changeText = (index) => {
    const description = document.getElementById('description-section');
    description.innerHTML = text[index];
    animateElement(description, index);
};

const changeButton = (button, index) => {
    if (selectedButtonAboutYou == index) return;
    const previousButton = document.getElementById(
        aboutYouButtons[selectedButtonAboutYou]
    );

    previousButton.style = null;
    button.style.borderColor = '#3b43f2';
    changeText(index);
    changeImage(index);
    selectedButtonAboutYou = index;
};

const createButtons = () => {
    const container = document.getElementById('selection-buttons');
    aboutYouButtons.forEach((button, index) => {
        const btn = document.createElement('button');
        btn.id = button;
        btn.innerHTML = button;
        btn.addEventListener('click', () => {
            changeButton(btn, index);
        });
        if (index == 0) btn.style.borderColor = '#3b43f2';
        container.appendChild(btn);
    });
};

createButtons();
changeText(0);
changeImage(0);

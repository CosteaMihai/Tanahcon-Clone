const roller = [
    {
        id: 1,
        name: 'Silvia Natalia',
        position: 'Owner Tanahcon',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
    },
    {
        id: 2,
        name: 'Bob Robinson',
        position: 'CEO Adobee',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
    },
    {
        id: 3,
        name: 'James William',
        position: 'Owner Marocco',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
    },
    {
        id: 4,
        name: 'Lucy Martinez',
        position: 'Owner Tanahcon',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate',
    },
];
let rollerSelectedButton = 0;
let rollerBtn = 0;

const animateSection = (element, index) => {
    element.animate(
        [
            {
                transform: `translateX(${
                    index >= rollerSelectedButton ? '-' : '+'
                }50px)`,
            },
            { transform: 'translateX(0px)' },
        ],
        {
            duration: 300,
        }
    );
};

const changeContent = (index) => {
    const image = document.getElementById('roller-image');
    const text = document.getElementById('roller-text');
    const name = document.getElementById('roller-name');
    const position = document.getElementById('roller-position');

    image.src = `./assets/images/roller-section/${roller[index].name
        .toLowerCase()
        .split(' ')
        .join('-')}.PNG`;

    text.innerHTML = roller[index].description;

    name.innerHTML = roller[index].name;

    position.innerHTML = roller[index].position;

    animateSection(image, index);
    animateSection(text, index);
    animateSection(name, index);
    animateSection(position, index);

    document.getElementById(
        `${roller[rollerSelectedButton].name}`
    ).style = null;
    document.getElementById(`${roller[index].name}`).style.background =
        '#3b43f2';

    rollerSelectedButton = index;
};

const createSectionButtons = () => {
    const container = document.getElementById('roller-butons');
    roller.forEach((button, index) => {
        const btn = document.createElement('button');
        btn.id = button.name;
        btn.classList.add('fourth-section-roller-button');
        btn.addEventListener('click', () => {
            changeContent(index);
            rollerBtn = index;
        });
        if (index == 0) btn.style.background = '#3b43f2';
        container.appendChild(btn);
    });
};

createSectionButtons();
changeContent(0);
const interval = setInterval(() => {
    rollerBtn == roller.length - 1 ? (rollerBtn = 0) : (rollerBtn += 1);
    changeContent(rollerBtn);
}, 5000);

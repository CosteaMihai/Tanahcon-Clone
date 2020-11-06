const portfolioButtons = [
    'UI Design',
    'UX Design',
    'Graphic Design',
    'Branding',
    'Icon',
];
const uiDesign = [
    {
        id: 1,
        title: 'First project',
        date: '25 December 2019',
    },
    {
        id: 2,
        title: 'Second project',
        date: '25 December 2019',
    },
    {
        id: 3,
        title: 'Third project',
        date: '25 December 2019',
    },
    {
        id: 4,
        title: 'Fourth project',
        date: '25 December 2019',
    },
    {
        id: 5,
        title: 'Fifth project',
        date: '25 December 2019',
    },
    {
        id: 6,
        title: 'Sixth project',
        date: '25 December 2019',
    },
    {
        id: 7,
        title: 'Seventh project',
        date: '25 December 2019',
    },
    {
        id: 8,
        title: 'Eighth project',
        date: '25 December 2019',
    },
    {
        id: 9,
        title: 'Ninth project',
        date: '25 December 2019',
    },
];

const uxDesign = [
    {
        id: 1,
        title: 'First project',
        date: '25 December 2019',
    },
    {
        id: 2,
        title: 'Second project',
        date: '25 December 2019',
    },
    {
        id: 3,
        title: 'Third project',
        date: '25 December 2019',
    },
    {
        id: 4,
        title: 'Fourth project',
        date: '25 December 2019',
    },
    {
        id: 5,
        title: 'Fifth project',
        date: '25 December 2019',
    },
    {
        id: 6,
        title: 'Sixth project',
        date: '25 December 2019',
    },
    {
        id: 7,
        title: 'Seventh project',
        date: '25 December 2019',
    },
    {
        id: 8,
        title: 'Eighth project',
        date: '25 December 2019',
    },
    {
        id: 9,
        title: 'Ninth project',
        date: '25 December 2019',
    },
];

const graphicDesign = [
    {
        id: 1,
        title: 'First project',
        date: '25 December 2019',
    },
    {
        id: 2,
        title: 'Second project',
        date: '25 December 2019',
    },
    {
        id: 3,
        title: 'Third project',
        date: '25 December 2019',
    },
    {
        id: 4,
        title: 'Fourth project',
        date: '25 December 2019',
    },
    {
        id: 5,
        title: 'Fifth project',
        date: '25 December 2019',
    },
    {
        id: 6,
        title: 'Sixth project',
        date: '25 December 2019',
    },
    {
        id: 7,
        title: 'Seventh project',
        date: '25 December 2019',
    },
    {
        id: 8,
        title: 'Eighth project',
        date: '25 December 2019',
    },
    {
        id: 9,
        title: 'Ninth project',
        date: '25 December 2019',
    },
];
const branding = [
    {
        id: 1,
        title: 'First project',
        date: '25 December 2019',
    },
    {
        id: 2,
        title: 'Second project',
        date: '25 December 2019',
    },
    {
        id: 3,
        title: 'Third project',
        date: '25 December 2019',
    },
    {
        id: 4,
        title: 'Fourth project',
        date: '25 December 2019',
    },
    {
        id: 5,
        title: 'Fifth project',
        date: '25 December 2019',
    },
    {
        id: 6,
        title: 'Sixth project',
        date: '25 December 2019',
    },
    {
        id: 7,
        title: 'Seventh project',
        date: '25 December 2019',
    },
    {
        id: 8,
        title: 'Eighth project',
        date: '25 December 2019',
    },
    {
        id: 9,
        title: 'Ninth project',
        date: '25 December 2019',
    },
];
const icon = [
    {
        id: 1,
        title: 'First project',
        date: '25 December 2019',
    },
    {
        id: 2,
        title: 'Second project',
        date: '25 December 2019',
    },
    {
        id: 3,
        title: 'Third project',
        date: '25 December 2019',
    },
    {
        id: 4,
        title: 'Fourth project',
        date: '25 December 2019',
    },
    {
        id: 5,
        title: 'Fifth project',
        date: '25 December 2019',
    },
    {
        id: 6,
        title: 'Sixth project',
        date: '25 December 2019',
    },
    {
        id: 7,
        title: 'Seventh project',
        date: '25 December 2019',
    },
    {
        id: 8,
        title: 'Eighth project',
        date: '25 December 2019',
    },
    {
        id: 9,
        title: 'Ninth project',
        date: '25 December 2019',
    },
];

let portofolioSelectedButton = 0;

let windowWidth = window.innerWidth;
const reportWindowSize = () => {
    windowWidth = window.innerWidth;
};
window.onresize = reportWindowSize;

const showDetails = (item) => {
    let delay = 0;
    const container = document.getElementById(`container${item.id}`);
    const info = document.createElement('div');

    const date = document.createElement('div');
    const title = document.createElement('div');

    date.innerHTML = item.date;
    title.innerHTML = item.title;

    info.appendChild(date);
    info.appendChild(title);

    info.id = `info${item.id}`;

    info.classList.add('third-section-portofolio-projects-info');
    if (windowWidth < 639) {
        info.animate(
            [
                {
                    transform: 'translateY(200px)',
                },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 500,
                delay: delay,
            }
        );
        setTimeout(() => {
            container.appendChild(info);
        }, delay);
        delay += 100;
    } else {
        container.appendChild(info);
    }
};

const hideDetails = (item) => {
    const container = document.getElementById(`container${item.id}`);

    const info = document.getElementById(`info${item.id}`);

    container.removeChild(info);
};

const changeButtonBorder = (index) => {
    const currentButton = document.getElementById(portfolioButtons[index]);
    const lastButton = document.getElementById(
        portfolioButtons[portofolioSelectedButton]
    );
    lastButton.style = null;
    currentButton.style.borderColor = 'white';
    portofolioSelectedButton = index;
};

const createList = (index) => {
    list.innerHTML = '';
    let array = [];
    let delay = 0;
    switch (index) {
        case 0:
            array = uiDesign;
            break;
        case 1:
            array = uxDesign;
            break;
        case 2:
            array = graphicDesign;
            break;
        case 3:
            array = branding;
            break;
        case 4:
            array = icon;
            break;
    }
    for (let item of array) {
        const container = document.createElement('div');
        container.id = `container${item.id}`;
        container.classList.add('third-section-portofolio-projects-container');

        list.appendChild(container);

        if (windowWidth > 639) {
            container.addEventListener('mouseenter', () => {
                showDetails(item);
            });

            container.addEventListener('mouseleave', () => {
                hideDetails(item);
            });
        } else {
            showDetails(item);
        }

        const image = document.createElement('img');
        image.src = `./assets/images/portfolio/${portfolioButtons[index]
            .split(' ')
            .join('-')}/${item.id}.PNG`;
        image.classList.add('third-section-portofolio-projects-image');
        image.animate(
            [
                {
                    transform: 'translateY(50px)',
                },
                { transform: 'translateY(0px)' },
            ],
            {
                duration: 300,
                delay: delay,
            }
        );
        setTimeout(() => {
            container.appendChild(image);
        }, delay);
        delay += 100;
    }

    if (index == portofolioSelectedButton) return;
    changeButtonBorder(index);
};

const createPortfolioButtons = () => {
    const container = document.getElementById('third-sectio-nav');
    portfolioButtons.forEach((button, index) => {
        const btn = document.createElement('button');
        btn.id = button;
        btn.innerHTML = button;
        btn.classList.add('third-section-portofolio-button');
        btn.addEventListener('click', () => {
            createList(index);
        });
        if (index == 0) btn.style.borderColor = 'white';
        container.appendChild(btn);
    });
};

list = document.getElementById('image-list');

createPortfolioButtons();
createList(0);

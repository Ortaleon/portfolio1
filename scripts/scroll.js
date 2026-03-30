 class InfiniteScroller {
    constructor(container, speed = 2) {
    this.container = container;

    this.track1 = container.querySelector('.skills__list:nth-child(2)');
    this.track2 = container.querySelector('.skills__list:nth-child(3)');
    this.track3 = container.querySelector('.skills__list:nth-child(4)');

    this.speed = speed;
    this.position1 = 0;
    this.position2 = 0;
    this.position3 = 0;
    this.animationId = null;

    this.init();
}

    init() {
    const items1 = [...this.track1.children];
    const items2 = [...this.track2.children];
    const items3 = [...this.track3.children];

    items1.forEach(item => {
    const clone = item.cloneNode(true);
    this.track1.appendChild(clone);
});

    items2.forEach(item => {
    const clone = item.cloneNode(true);
    this.track2.prepend(clone);
});

    items3.forEach(item => {
    const clone = item.cloneNode(true);
    this.track3.appendChild(clone);
});

    this.start();
}

    start() {
    const scroll = () => {
    this.position1 -= this.speed;
    this.position2 += this.speed; // противоположное направление
    this.position3 -= this.speed;

    const trackWidth1 = this.track1.scrollWidth / 2;
    if (Math.abs(this.position1) >= trackWidth1) {
    this.position1 = 0;
}

    const trackWidth2 = this.track2.scrollWidth / 2;
    if (Math.abs(this.position2) >= trackWidth2) {
    this.position2 = 0;
}

    const trackWidth3 = this.track3.scrollWidth / 2;
    if (Math.abs(this.position3) >= trackWidth3) {
    this.position3 = 0;
}

    this.track1.style.transform = `translateX(${this.position1}px)`;
    this.track2.style.transform = `translateX(${this.position2}px)`;
    this.track3.style.transform = `translateX(${this.position3}px)`;

    this.animationId = requestAnimationFrame(scroll);
};

    this.animationId = requestAnimationFrame(scroll);
}
}

    const scroller = new InfiniteScroller(document.querySelector('.skills'), 1);
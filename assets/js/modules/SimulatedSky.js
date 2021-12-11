if (typeof window.cytoplasm == 'undefined') {
  /**
   * Compatibility junk
   */
  class _Applet {
    // eslint-disable-next-line require-jsdoc
    constructor(props = {}) {
      this.props = props;
      this.state = {};
    }
  }
  window.cytoplasm = {};
  window.cytoplasm.Applet = _Applet;
}

/**
 * Simulated sky component
 */
export class SimulatedSky extends window.cytoplasm.Applet {
  /**
   * get an array of image paths for the sky
   * @return {string[]}
   */
  getLayers_() {
    const obj = this.props;

    let dusk = obj.hasOwnProperty('dusk') ? obj.dusk : false;
    let day = obj.hasOwnProperty('day') ? obj.day : false;

    const meteors = obj.hasOwnProperty('meteors') ? obj.meteors : false;
    const eclipse = obj.hasOwnProperty('eclipse') ? obj.eclipse : false;
    const moon = obj.hasOwnProperty('moon') ? obj.moon : true;

    const now = obj.hasOwnProperty('date') ? obj.date : new Date();
    const randNum = Math.floor((Math.random() * 15) + 1);

    if (obj.autotime) {
      if (now.getHours() < 18 && now.getHours() > 7) {
        day = true;
      } else if (now.getHours() < 19 && now.getHours() >=18) {
        dusk = true;
      } else {
        // night
      }
    }

    const elements = [];

    if (day && eclipse) {
      elements.push('/images/now-sky-parts/solar-eclipse-sky.webp');
      elements.push('/images/now-sky-parts/solar-eclipse-fg.webp');
      elements.push('/images/now-sky-parts/sun.webp');
      elements.push('/images/now-sky-parts/eclipse.webp');
    } else if (day && !dusk) {
      elements.push('/images/now-sky-parts/day-sky.webp');
      elements.push('/images/now-sky-parts/sun.webp');
      elements.push('/images/now-sky-parts/day-fg.webp');
      elements.push('/images/now-sky-parts/normal-shadows.webp');
    } else if (dusk) {
      elements.push('/images/now-sky-parts/solar-eclipse-sky.webp');
      elements.push('/images/now-sky-parts/sunset-sun.webp');
      elements.push('/images/now-sky-parts/solar-eclipse-fg.webp');
      elements.push('/images/now-sky-parts/long-shadows.webp');
    } else if (!day && eclipse) {
      elements.push('/images/now-sky-parts/lunar-eclipse-sky.webp');
      elements.push('/images/now-sky-parts/moon.webp');
      elements.push('/images/now-sky-parts/eclipse.webp');
      elements.push('/images/now-sky-parts/lunar-eclipse-fg.webp');
      elements.push('/images/now-sky-parts/stars.webp');

      if (meteors) {
        elements.push('/images/now-sky-parts/meteors.webp');
      }
    } else {
      elements.push('/images/now-sky-parts/night-sky.webp');
      elements.push('/images/now-sky-parts/night-fg.webp');
      if (moon) {
        elements.push('/images/now-sky-parts/moon.webp');
        elements.push('/images/now-sky-parts/normal-shadows.webp');
      }
      if (meteors) {
        elements.push('/images/now-sky-parts/meteors.webp');
      }
      elements.push('/images/now-sky-parts/stars.webp');
    }

    if (randNum == 2 || now.getMonth() == 5) {
      elements.push('/images/now-sky-parts/prop-pride.webp');
    }

    if (now.getMonth() == 9) {
      elements.push('/images/now-sky-parts/prop-pumpkin.webp');
    }

    if (now.getMonth() == 11 || (now.getMonth() == 0 && now.getDate() < 15)) {
      elements.push('/images/now-sky-parts/prop-holiday-lights.webp');
    }

    if (now.getDate() === 13 && now.getDay() === 5) {
      elements.push('/images/now-sky-parts/prop-monolith.webp');
    }

    if (now.getDate() === 22 && now.getMonth() === 3) {
      elements.push('/images/now-sky-parts/prop-windfarm.webp');
    }

    return elements;
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    const layers = this.getLayers_();
    const elements = [];

    for (let i = 0; i < layers.length; i++) {
      elements.push(
          this.buildImageElement_(
              'stacked-img',
              layers[i],
          ),
      );
    }

    elements.push(
        this.buildImageElement_(
            'today-image-base',
            '/images/bg-night.webp',
        ),
    );

    return window.cytoplasm.createElement(
        'div',
        {class: 'simulated-sky', style: 'position:relative; overflow: hidden'},
        elements,
    );
  }

  /**
   * @param {string} cssClasses
   * @param {string} src
   * @return {CytoplasmFragment}
   */
  buildImageElement_(cssClasses, src) {
    return window.cytoplasm.createElement(
        'img',
        {
          class: cssClasses,
          src: src,
        },
    );
  }
}

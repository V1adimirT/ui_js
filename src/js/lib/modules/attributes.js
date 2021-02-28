import $ from '../core';

$.prototype.setAttribute = function (attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attributeName, value);
    }

    return this;
};

$.prototype.removeAttribute = function (attributeName) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(attributeName);
    }

    return this;
};

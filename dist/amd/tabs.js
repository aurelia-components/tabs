define(['exports', 'aurelia-framework', './utils/custom-element-helper'], function (exports, _aureliaFramework, _customElementHelper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tabs = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

  var Tabs = exports.Tabs = (_dec = (0, _aureliaFramework.customElement)('tabs'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec3 = (0, _aureliaFramework.children)('tab'), _dec(_class = _dec2(_class = (_class2 = function () {
    function Tabs(element) {
      _classCallCheck(this, Tabs);

      _initDefineProp(this, 'tabs', _descriptor, this);

      this.activeTab = undefined;

      this.element = element;
      var scrollAttr = element.attributes.getNamedItem('scroll');
      if (scrollAttr !== null) {
        this.topShiftInPixels = scrollAttr.nodeValue;
        element.style.display = 'block';
        element.style.height = 'calc(100% - ' + this.topShiftInPixels + 'px)';
      }
    }

    Tabs.prototype.attached = function attached() {
      var _this = this;

      this.tabs.forEach(function (tab) {
        if (tab.active) {
          _this.activeTab = tab;
        }

        tab.hide();
      });

      this.activeTab.show();

      if (this.topShiftInPixels !== undefined) {
        this.tabs.forEach(function (tab) {
          tab.setInnerScroll();
        });
      }
    };

    Tabs.prototype.onTabClick = function onTabClick(tab) {
      _customElementHelper.customElementHelper.dispatchEvent(this.element, 'change', {
        tab: tab
      });

      this.activeTab.hide();

      tab.show();
      this.activeTab = tab;
    };

    return Tabs;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'tabs', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return [];
    }
  })), _class2)) || _class) || _class);
});
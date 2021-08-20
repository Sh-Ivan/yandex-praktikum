(function () {
	class Tooltip {
		constructor() {
			this.el = document.createElement('div');
			this.el.style.position = 'absolute';
			this.listeners = [];

			this.el.classList.add(this.name);
			document.body.appendChild(this.el);

			this.onHide = this.onHide.bind(this);
			this.detach = this.detach.bind(this);
		}

		get name() {
			return 'tooltip';
		}

		get indent() {
			return 5;
		}

		delegate(eventName, element, cssSelector, callback) {
			const fn = (event) => {
				if (!event.target.matches(cssSelector)) {
					return;
				}

				callback(event);
			};

			element.addEventListener(eventName, fn);
			this.listeners.push({ fn, element, eventName });

			return this;
		}

		onShow = (event) => {
			const targetEl = event.target;
			const tooltipText = targetEl.getAttribute(['data-tooltip']);
			this.el.innerHTML = tooltipText;
			this.el.classList.add('tooltip_active');
			const targetElCoords = targetEl.getBoundingClientRect();
			let coordY;
			if (targetElCoords.bottom + this.el.clientHeight > document.documentElement.clientHeight) {
				coordY = targetElCoords.top - this.el.clientHeight - this.indent;
			} else {
				coordY = targetElCoords.bottom + this.indent;
			}
			this.el.style.top = coordY + 'px';
			this.el.style.left = targetElCoords.x + 'px';
		};

		onHide() {
			this.el.innerHTML = '';
			this.el.classList.remove('tooltip_active');
		}

		attach(root) {
			this.delegate('mouseover', root, '[data-tooltip]', this.onShow).delegate(
				'mouseout',
				root,
				'[data-tooltip]',
				this.onHide
			);
		}

		detach() {
			this.listeners.forEach(({ fn, element, eventName }) => {
				element.removeEventListener(eventName, fn);
			});
			this.listeners = [];
		}
	}

	window.Tooltip = Tooltip;
})();

const tooltip = new Tooltip();
tooltip.attach(document.body);

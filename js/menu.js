// MENU SCRIPTS 

const list = document.querySelectorAll('.menulist');

var x = window.matchMedia("(max-width: 767px)");

function activeLink() {
	list.forEach((item) =>
		item.classList.remove('active'));
	this.classList.add('active');
}

function iconfill() {
	if (x.matches) {
		list.forEach((item) =>
			list.forEach(function (item) {
				if (item.classList.contains('active')) {
					let activeicon = item.getElementsByTagName("ion-icon")[0];
					let activeiconvalue = activeicon.getAttribute('name');
					let filled = activeiconvalue.split('-')[0];
					activeicon.setAttribute("name", filled);
				}
				if (item.classList.contains('active') === false) {
					let activeicon = item.getElementsByTagName("ion-icon")[0];
					let activeiconvalue = activeicon.getAttribute('name');
					let filled = activeiconvalue.split('-')[0];
					activeicon.setAttribute("name", filled + "-outline");
				}
			})
		);
	}
}

list.forEach((item) =>
	item.addEventListener('click', activeLink)
);

list.forEach((item) =>
	item.addEventListener('click', iconfill)
);
if($('.map').length) {
    let detailsBox = document.getElementById('details-box');
    let detailsBoxState = document.getElementById('details-box__state');
    let nameState = document.getElementById('name-state');
    const popups = $('.popup-state');

    $('svg#us-map').on('mouseover', function (e) {
        if (e.target.tagName === 'path') {
            let state = e.target;
            let stateLetters = e.target.id;
            let content = state.dataset.name;
            detailsBoxState.innerHTML = content;
            detailsBox.style.opacity = "100%";

            let rect = state.getBoundingClientRect();

            let leftDistance = rect.left;
            let topDistance = rect.top;

            let pathHeight = rect.height;
            let pathWidth = rect.width;

            detailsBox.style.left = (leftDistance + pathWidth / 2) + 'px';
            detailsBox.style.top = (topDistance - detailsBox.offsetHeight) + 'px';

            // 	let currentStateName = $('<div>').addClass('state_letters').text(stateLetters);
            //
            // 	let defaultStyles = {
            // 		'position': 'fixed',
            // 		'left': (leftDistance + pathWidth / 2.2) + 'px',
            // 		'top': (topDistance + pathHeight / 2.5) + 'px',
            // 		'pointer-events': 'none',
            // 		'color': 'white',
            // 	};
            //
            // 	let stateOffsets = {
            // 		"MA": { left: leftDistance, top: topDistance },
            // 		"MN": { left: leftDistance + pathWidth / 3.7, top: topDistance + pathHeight / 2.5 },
            // 		"MT": { left: leftDistance + pathWidth / 2.2, top: topDistance + pathHeight / 2.5 },
            // 		"ND": { left: leftDistance + pathWidth / 2.8, top: topDistance + pathHeight / 3.2 },
            // 		"ID": { left: leftDistance + pathWidth / 2.8, top: topDistance + pathHeight / 1.7 },
            // 		"WA": { left: leftDistance + pathWidth / 2.2, top: topDistance + pathHeight / 2.8 },
            // 		"AZ": { top: topDistance + pathHeight / 2.7 },
            // 		"CA": { left: leftDistance + pathWidth / 3.5, top: topDistance + pathHeight / 2 },
            // 		"CO": { left: leftDistance + pathWidth / 2.6, top: topDistance + pathHeight / 2.7 },
            // 		"NV": { left: leftDistance + pathWidth / 2.7, top: topDistance + pathHeight / 3 },
            // 		"NM": { left: leftDistance + pathWidth / 2.7, top: topDistance + pathHeight / 2.8 },
            // 		"OR": { left: leftDistance + pathWidth / 2.7, top: topDistance + pathHeight / 2.5 },
            // 		"UT": { left: leftDistance + pathWidth / 2.4, top: topDistance + pathHeight / 2.3 },
            // 		"WY": { left: leftDistance + pathWidth / 2.6, top: topDistance + pathHeight / 2.7 },
            // 		"RI": { left: leftDistance + 20, top: topDistance + pathHeight / 2.5, color: 'black' },
            // 		"VT": { left: leftDistance - 20, top: topDistance + pathHeight / 2.5, color: 'black' },
            // 		"TX": { left: leftDistance + pathWidth / 2, top: topDistance + pathHeight / 2.5 }
            // 	};
            //
            // 	let customStyles = stateOffsets[stateLetters] || {};
            //
            // 	currentStateName.css(Object.assign({}, defaultStyles, customStyles));


            if (stateLetters) {
                let currentStateName = $('<div>').addClass('state_letters').text(stateLetters);

                currentStateName.css({
                    'position': 'fixed',
                    'left': (leftDistance + pathWidth / 2.2) + 'px',
                    'top': (topDistance + pathHeight / 2.5) + 'px',
                    'pointer-events': 'none',
                    'color': 'white',
                });

                switch (stateLetters) {
                    case "MA":
                        currentStateName.css({
                            'left': (leftDistance) + 'px',
                            'top': (topDistance) + 'px',
                        });

                        break;
                    case "MN":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 3.7) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        console.log('+')
                        break;
                    case "MT":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "ND":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.8) + 'px',
                            'top': (topDistance + pathHeight / 3.2) + 'px',
                        });
                        break;
                    case "ID":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.8) + 'px',
                            'top': (topDistance + pathHeight / 1.7) + 'px',
                        });
                        break;
                    case "WA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.8) + 'px',
                        });
                        break;
                    case "AZ":
                        currentStateName.css({
                            'top': (topDistance + pathHeight / 2.7) + 'px',
                        });
                        break;
                    case "CA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 3.5) + 'px',
                            'top': (topDistance + pathHeight / 2) + 'px',
                        });
                        break;
                    case "CO":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.6) + 'px',
                            'top': (topDistance + pathHeight / 2.7) + 'px',
                        });
                        break;
                    case "NV":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.7) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "NM":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.7) + 'px',
                            'top': (topDistance + pathHeight / 2.8) + 'px',
                        });
                        break;
                    case "OR":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.7) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "UT":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.4) + 'px',
                            'top': (topDistance + pathHeight / 2.3) + 'px',
                        });
                        break;
                    case "WY":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.6) + 'px',
                            'top': (topDistance + pathHeight / 2.7) + 'px',
                        });
                        break;
                    case "AR":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.8) + 'px',
                            'top': (topDistance + pathHeight / 3.2) + 'px',
                        });
                        break;
                    case "IA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.3) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "KS":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.4) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "MO":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.7) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "NE":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.5) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "OK":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 1.8) + 'px',
                            'top': (topDistance + pathHeight / 3.5) + 'px',
                        });
                        break;
                    case "SD":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.4) + 'px',
                            'top': (topDistance + pathHeight / 4) + 'px',
                        });
                        break;
                    case "LA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 5) + 'px',
                            'top': (topDistance + pathHeight / 3.2) + 'px',
                        });
                        break;
                    case "TX":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "CT":
                        currentStateName.css({
                            'left': (leftDistance) + 'px',
                            'top': (topDistance) + 'px',
                        });
                        break;
                    case "NH":
                        currentStateName.css({
                            'left': (leftDistance) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "RI":
                        currentStateName.css({
                            'left': (leftDistance + 20) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "VT":
                        currentStateName.css({
                            'left': (leftDistance - 20) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "AL":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 3) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "FL":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 1.35) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "GA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.4) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "MS":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.8) + 'px',
                            'top': (topDistance + pathHeight / 2.8) + 'px',
                        });
                        break;
                    case "SC":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 4) + 'px',
                        });
                        break;
                    case "IL":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "IN":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.6) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "KY":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.6) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "NC":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.8) + 'px',
                        });
                        break;
                    case "OH":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 3) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "TN":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.4) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "VA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "WI":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "WV":
                        currentStateName.css({
                            'left': (leftDistance + 10) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "DE":
                        currentStateName.css({
                            'left': (leftDistance + 30) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "DC":
                        currentStateName.css({
                            'left': (leftDistance + 30) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "MD":
                        currentStateName.css({
                            'left': (leftDistance + 80) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "NJ":
                        currentStateName.css({
                            'left': (leftDistance + 30) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                            'color': 'black'
                        });
                        break;
                    case "NY":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.2) + 'px',
                            'top': (topDistance + pathHeight / 2.5) + 'px',
                        });
                        break;
                    case "PA":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 2.5) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "ME":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 3.5) + 'px',
                            'top': (topDistance + pathHeight / 3) + 'px',
                        });
                        break;
                    case "MI":
                        currentStateName.css({
                            'left': (leftDistance + pathWidth / 1.5) + 'px',
                            'top': (topDistance + pathHeight / 1.5) + 'px',
                        });
                        break;
                    default:
                        // 'left': (leftDistance + pathWidth / 2.2) + 'px',
                        // 'top': (topDistance + pathHeight / 2.5) + 'px',

                }

                $('.map').append(currentStateName);

                state._currentStateName = currentStateName;
            }
        }
    }).on('mouseout', function (e) {
        if (e.target.tagName === 'path' && e.target._currentStateName) {
            e.target._currentStateName.remove();
            delete e.target._currentStateName;
        }
        detailsBox.style.opacity = "0%";
    });






    $('svg#us-map').on('click', function (e) {
        if (e.target.tagName === 'path') {
            let stateName = e.target.id;
            if (stateName) {
                popups.each((i, elem) => {
                    let popup = $(elem);
                    popup.removeClass('active');
                    if (popup.data('popup') === stateName) {
                        popup.addClass('active');
                    }
                });
            }
        }
    });


    window.onmousemove = function (e) {

    };

    $( ".popup-state" ).each(function( ) {
        let popupStateInformation = $(this).find('.popup-state__information');
        popupStateInformation.each(function( index ) {
            if (index > 4) {
                $(this).closest('.popup-state').addClass('popup-state-big');
            }
        });
    });

}
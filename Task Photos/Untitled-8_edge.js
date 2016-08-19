/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Symbol_1',
                type: 'rect',
                rect: ['43', '-5','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'Symbol_1',
                symbolName: 'Symbol_1'
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "overflow", 'visible'],
                ["style", "height", '100px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['9px', '17px', '95px', '75px', 'auto', 'auto'],
                    type: 'image',
                    id: 'College-Educational2',
                    opacity: 1,
                    autoOrient: false,
                    fill: ['rgba(0,0,0,0)', 'images/College-Educational.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '110px'],
                ["style", "width", '131px']
            ],
            "${_College-Educational2}": [
                ["transform", "rotateZ", '9deg'],
                ["style", "opacity", '1'],
                ["style", "left", '18px'],
                ["style", "width", '95px'],
                ["style", "top", '5px'],
                ["transform", "skewX", '-12.27deg'],
                ["subproperty", "filter.invert", '0.28333366666667'],
                ["style", "height", '100px'],
                ["style", "overflow", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid44", tween: [ "style", "${_College-Educational2}", "height", '100px', { fromValue: '100px'}], position: 2000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid50", tween: [ "transform", "${_College-Educational2}", "rotateZ", '9deg', { fromValue: '9deg'}], position: 2000, duration: 0, easing: "easeInOutQuart" },
                { id: "eid39", tween: [ "style", "${_College-Educational2}", "left", '-43px', { fromValue: '18px'}], position: 0, duration: 2000, easing: "easeInOutBounce" },
                { id: "eid54", tween: [ "transform", "${_College-Educational2}", "skewX", '-12.27deg', { fromValue: '-12.27deg'}], position: 2000, duration: 0, easing: "easeInOutBounce" },
                { id: "eid45", tween: [ "style", "${_College-Educational2}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0, easing: "easeInOutQuart" },
                { id: "eid46", tween: [ "style", "${_College-Educational2}", "top", '5px', { fromValue: '5px'}], position: 2000, duration: 0, easing: "easeInOutQuart" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "Logo-cic");

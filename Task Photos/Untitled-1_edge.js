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
                id: 'RoundRect',
                type: 'rect',
                rect: ['122px', '85px','351px','221px','auto', 'auto'],
                borderRadius: ["10px", "10px", "10px", "10px"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['152px', '189px','123px','101px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,38,38,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Ellipse2',
                type: 'ellipse',
                rect: ['290px', '106px','142px','134px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(156,38,38,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '550px'],
                ["style", "height", '400px'],
                ["style", "overflow", 'hidden']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(156,38,38,1.00)'],
                ["gradient", "background-image", [270,[['rgba(99,29,29,1.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "left", '132px'],
                ["style", "top", '100px']
            ],
            "${_Ellipse}": [
                ["style", "left", '309px'],
                ["style", "top", '149px']
            ],
            "${_Ellipse2}": [
                ["style", "top", '135px'],
                ["style", "left", '298px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6870,
            autoPlay: true,
            timeline: [
                { id: "eid18", tween: [ "style", "${_Ellipse}", "top", '179px', { fromValue: '149px'}], position: 865, duration: 1065, easing: "easeOutBounce" },
                { id: "eid24", tween: [ "style", "${_Ellipse}", "top", '167px', { fromValue: '179px'}], position: 1930, duration: 4940, easing: "easeOutBounce" },
                { id: "eid21", tween: [ "style", "${_RoundRect}", "left", '145px', { fromValue: '132px'}], position: 1210, duration: 720, easing: "easeOutBounce" },
                { id: "eid12", tween: [ "style", "${_Ellipse2}", "left", '179px', { fromValue: '298px'}], position: 1145, duration: 785, easing: "easeOutBounce" },
                { id: "eid25", tween: [ "style", "${_Ellipse2}", "left", '193px', { fromValue: '179px'}], position: 1930, duration: 4940, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_RoundRect}", "top", '94px', { fromValue: '100px'}], position: 1145, duration: 785, easing: "easeOutBounce" },
                { id: "eid22", tween: [ "style", "${_RoundRect}", "top", '107px', { fromValue: '94px'}], position: 1930, duration: 4940, easing: "easeOutBounce" },
                { id: "eid11", tween: [ "style", "${_Ellipse2}", "top", '133px', { fromValue: '135px'}], position: 700, duration: 1230, easing: "easeOutBounce" },
                { id: "eid26", tween: [ "style", "${_Ellipse2}", "top", '134px', { fromValue: '133px'}], position: 1930, duration: 4940, easing: "easeOutBounce" },
                { id: "eid15", tween: [ "style", "${_Ellipse}", "left", '308px', { fromValue: '309px'}], position: 805, duration: 1125, easing: "easeOutBounce" },
                { id: "eid23", tween: [ "style", "${_Ellipse}", "left", '335px', { fromValue: '308px'}], position: 1930, duration: 4940, easing: "easeOutBounce" },
                { id: "eid4", tween: [ "gradient", "${_RoundRect}", "background-image", [270,[['rgba(99,29,29,1.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(99,29,29,1.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid2", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(156,38,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(156,38,38,1.00)'}], position: 0, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-37151424");

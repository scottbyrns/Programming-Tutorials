console.log('Creating Namespaces.');
// We are declaring a namespace (see terms) for our tutorials to keep them logically grouped.
// The use of the com preface is common practice in software engineering to diferintiate software authors.
// The idea is reverse domain names so google.com software would be com.google.[softwarePacakge]
window.com = window.com || {};
window.com.tutorials = window.com.tutorials || {};
window.com.tutorials.canvas = window.com.tutorials.canvas || {};

window.include('canvas.js');
/*global angular */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['ui.bootstrap', 'ui.bootstrap.datetimepicker'])
    .constant('uiDatetimePickerConfig', {
        dateFormat: 'yyyy-MM-dd HH:mm',
        enableDate: true,
        enableTime: true,
        todayText: 'Today',
        nowText: 'Now',
        clearText: 'Clear',
        closeText: 'Done',
        dateText: 'Date',
        timeText: 'Time',
        closeOnDateSelection: true,
        appendToBody: false,
        showButtonBar: true
    });

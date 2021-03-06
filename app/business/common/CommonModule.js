/**
 * @file common modules
 *
 * @author  miaojian(miaojian@wandoujia.com)
 */

define([
    'angular',
    'common/Http',
    'common/Dao',
    'common/Modal',
    'common/Socketio',
    'common/Notification',
    'common/CONFIG',
    'common/Util',
    'common/CommonDirective',
    'common/CommonFilter',
    'common/Bugsnag'
], function (
    angular
) {
    angular.module('dmnCommon', [
        'httpModule',
        'daoModule',
        'modalModule',
        'notificationModule',
        'configModule',
        'ioModule',
        'utilModule',
        'directiveModule',
        'filterModule',
        'bugsnagModule'
    ]);
});

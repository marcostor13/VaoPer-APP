
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-ionic.common",
          "file": "plugins/cordova-plugin-ionic/dist/common.js",
          "pluginId": "cordova-plugin-ionic",
        "clobbers": [
          "IonicCordova"
        ]
        },
      {
          "id": "cordova-plugin-googleplus.GooglePlus",
          "file": "plugins/cordova-plugin-googleplus/www/GooglePlus.js",
          "pluginId": "cordova-plugin-googleplus",
        "clobbers": [
          "window.plugins.googleplus"
        ]
        },
      {
          "id": "cordova-plugin-x-socialsharing.SocialSharing",
          "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
          "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
        },
      {
          "id": "cordova-plugin-ionic.guards",
          "file": "plugins/cordova-plugin-ionic/dist/guards.js",
          "pluginId": "cordova-plugin-ionic",
        "runs": true
        },
      {
          "id": "es6-promise-plugin.Promise",
          "file": "plugins/es6-promise-plugin/www/promise.js",
          "pluginId": "es6-promise-plugin",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-googleplus": "8.5.",
      "cordova-plugin-ionic": "5.4.7",
      "cordova-plugin-x-socialsharing": "5.6.8",
      "es6-promise-plugin": "4.2.2"
    };
    // BOTTOM OF METADATA
    });
    
angular.module('WordApp.config', [])

// Replace with your Wordpress Blog WP REST API url ex.: myblog.com required '/wp-json/wp/v2/' at the end
.constant('WORDPRESS_API_URL', 'http://m.goarbanjara.com//wp-json/wp/v2/')

// Replace with your Google Project Number https://documentation.onesignal.com/docs/generate-a-google-server-api-key
.constant('GOOGLE_PROJECT_NUMBER', '698485000584')

// Replace with your OneSignal AppId https://documentation.onesignal.com/docs/accounts-and-keys#section-keys-ids
.constant('ONESIGNAL_APP_ID', '6013c7b5-418b-4fc9-8a8d-61d10fda424b')

// Change color your Ionic application to light, stable, positive, calm, balanced, energized, assertive, royal or dark 
.constant('IONIC_APP_COLOR', 'positive')

// Change Posts page template to cards, cards2, list, mixed
.constant('POSTS_TEMPLATE', 'list')

// Replace with your Android package name and IOS app ID
.constant('ANDROID_PACKAGE_NAME', 'com.goarbanjara.banjara')
.constant('IOS_APP_ID', '<my_app_id>')

// Replace with your Primary Email to send Feedback
.constant('PRIMARY_EMAIL', 'govindrathod86@gmail.com')

// Replace with email to send copy Feedback or leave empty
.constant('COPY_EMAIL', 'infobanjara@gmail.com')

// Replace with phone number for send SMS
.constant('SMS_PHONE_NUMBER', '9833311883');

var CAMPAIGN_ID = "<CAMPAIGN_ID>";
var CODE = "<code>";

function openRedemption() {
    window.open(`https://www.nytimes.com/subscription/redeem?campaignId=${CAMPAIGN_ID}&gift_code=${CODE}`, "_blank");
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

console.log('Started');

if (window.location.href.includes("welcome-subscriber")) {
    window.close();
}

waitForElm('#resubscribeButton').then((elm) => {
    console.log('Found resubscribe button');
    openRedemption();
});

waitForElm('.css-b93syq').then((elm) => {
    console.log('Found continue button');
    openRedemption();
});

waitForElm('#creditcard').then((elm) => {
    console.log('Found creditcard button');
    openRedemption();
});

waitForElm('.giftRedeem__submitButton').then((elm) => {
    console.log('Found redeem button');
    elm.click()
});

waitForElm('.css-1i3jzoq-buttonBox-buttonBox-primaryButton-primaryButton-Button').then((elm) => {
    console.log('Found continue button');
    elm.click()
});

waitForElm('.css-t0f7tz').then((elm) => {
    console.log('Found continue button');
    elm.click()
    window.close()
});
